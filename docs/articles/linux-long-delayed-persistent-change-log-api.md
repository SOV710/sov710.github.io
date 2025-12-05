---
title: Linux 迟迟难产的持久化变更日志 API
date: 2025-09-16
category:
  - 文章
tag: 
  - Linux
  - 文件系统
  - SRCU
cover: https://pic1.zhimg.com/70/v2-30fa79b1973d7dc85c15eb4afed5a617_1440w.image?source=172ae18b&biz_tag=Post
---

持久化变更日志这个 Windows & macOS 实现了许久的功能，在 Linux 上却迟迟难产。

想象一下，你在做一个持久化的文件**同步**系统，你想赋予其足够的鲁棒性，让它能够保证**跨重启**依旧**可续接**。你本来以为这个相当显明的需求应该早就被实现了，但是你查到了 Windows 的 USN Journel 的 `last_usn`，查到了 macOS 的 FSEvents 的 `since_id`，但是偏偏却发现 Linux 的这个 API 到了 2025 年也还是没有实现。

你的程序希望能够在文件系统发生更改时执行某些操作，“无论是什么”。他的应用程序使用它来同步数据到云端和从云端同步数据，你需要这个 API 更改日志记录信息以确保所有文件系统更改都得到记录；它用于在系统重新启动时避免扫描整个文件系统。

要做可续接，内核必须在磁盘上维护一个全局变更日志。

但是，Linux 没有。这意味着 Linux 上的同步系统要么仅依赖 inotify，不做全局变更日志，要么重启后扫盘。

虽然 Linux 上还有个 fanotify，但这俩 API 都是内存队列，重启就没了，依然不管用。

我认为这个 feature 不能实现的主要问题还是，**Linux 生态和具体的 FS 是不绑定的**，Windows 99% 都是 NTFS，macOS 99% 都是 APFS，这些文件级的事件 API 也都是把数据结构内建在 FS 里的，它们本来就能跟踪数据块变更。但 Linux 不行，Linux 要想实现这个功能，就只能在 VFS 层加写前 hook / 写后 hook，实现一个"跨文件系统的持久 change journel API"就是另一个级别的工作量了。

顺带一提，Everything 是依赖 NTFS 的特性实现的，Spotlight/Time Machine 是依赖 APFS 的特性实现的，我看那些说 Linux 不如 win/macos 的人大多都是在说 fs 啊，但根本不知道 Linux 实现 fs 级操作根本不是一回事，那还有什么好说的呢，Linux 牛逼！

让我们看看为什么 Linux 这么久也没把这个 feature 合并进主线：

2014: 这个问题首次被提出，在 LWM 上可见

https://lwn.net/Articles/605128

2017 LSFMM：Amir Goldstein (overlayfs 的 co-maintainer) 提及了一个解决方案

> Goldstein is trying to make fsnotify more scalable for getting notifications of changes in a large filesystem. To that end, he has proposed a "superblock watch" mechanism to efficiently report all changes made to a filesystem. For his use case, he just needs to be able to receive notifications when any file in any directory in the filesystem has changed (been created, deleted, or moved). There was a question about whether the names of the files that are changed should be included in the event, but Goldstein said he did not need that functionality (though others might); his application simply rescans the directory if anything has changed in it.  
> Goldstein 试图使 fsnotify 更具可扩展性，以便在大型文件系统中获取更改通知。为此，他提出了一种“超级块监视”机制，以高效地报告对文件系统所做的所有更改。对于他的用例，他只需要在文件系统中的任何目录中的任何文件发生更改（被创建、删除或移动）时能够接收通知。有一个关于更改的文件名是否应该包含在事件中的问题，但 Goldstein 表示他不需要该功能（尽管其他人可能需要）；他的应用程序只是在目录中有任何更改时重新扫描该目录。
>
> Al Viro was concerned that the file names would not stay valid while notifications were being delivered. Jan Kara said that there could be races that would make it hard to reproduce the sequence of changes that were made to the directory. But adding names to the fsnotify events does add significant complexity to the code. There is a clear demand for being able to get notification events on a large directory tree, however, Kara said. For now, he is not convinced that adding file names into the event is warranted and it could lead to various kinds of problems.  
> Al Viro 担心在传递通知时文件名可能会无效。Jan Kara 表示可能会出现竞争，使得难以重现对目录所做更改的顺序。但是，向 fsnotify 事件添加名称确实给代码增加了显著的复杂性。然而，Kara 表示，确实存在对能够在大型目录树上获取通知事件的明显需求。目前，他并不认为在事件中添加文件名是必要的，这可能会导致各种问题。
>
> Goldstein said that the superblock watch is the simplest approach, rather than having a recursive fanotify watch on the mount point, which does not scale well. That API could eventually be extended to allow the creation of a [change journal](https://msdn.microsoft.com/en-us/library/windows/desktop/aa363798\(v=vs.85\).aspx) like NTFS supports, he said. There did not seem to be any fundamental opposition to the superblock watch feature as it stands.  
> Goldstein 表示，超级块监视是最简单的方法，而不是在挂载点上进行递归 fanotify 监视，这种方法不具有良好的可扩展性。他说，该 API 最终可以扩展以允许创建类似 NTFS 支持的更改日志。对于目前的超级块监视功能似乎没有任何根本上的反对意见。

https://lwn.net/Articles/718802/

2018 LSFMM: Amir Goldstein 带着他在 overlayfs 上的初步实践回来了。他明确表示他在 overlayfs 上的类似实现误报有点多，但是最主要的原因是很多 FS 并没有实现这层语义，导致在 VFS 层做简明的实现是有很多困难的。

https://lwn.net/Articles/lsfmm2018

2019: Amir Goldstein 汇报了最新的进展：进一步修改了 overlayfs，公司内部生产环境已经用这个机制来跟踪命名空间变化（新建、删除、重命名），而不跟踪文件数据变化，这样就不依赖底层文件系统的 reflink 支持。另外，对于文件数据的变更，他改用自己实现的文件系统 change journal（类似 NTFS 的持久日志），避免其他 fs 未实现的问题。

遇到的技术难点主要有两点：
- 缺少“写前通知”机制：现在只能在文件被 `open` for write 时得到通知；如果文件已打开，再次写入或 mmap 写入不会触发通知。他希望有一种方式：能在文件第一次被真正写入前冻结、刷盘，并产生通知 → 记录到 change journal。理想效果类似“pre-write one-shot mark”：只在首次修改时触发，之后解除冻结。提议可能需要新的 VFS hook 或安全钩子，但进入 page-fault 路径的复杂度和锁问题让内核开发者担心。
- 缺少子树级过滤。希望内核能支持“把某目录标记为子树根”，只报告该子树内的事件。macOS 有类似功能；Btrfs 的子卷处理也和这个有共通点。不过社区（如 Jan Kara）担心强制隔离子树（禁止 rename 进出、hard link 跨越）语义怪异，不好让用户理解。

https://lwn.net/Articles/789038/

2025 LSFMM: Goldstein 继续先前的话题，提出了两种实现思路，一种是和前面一样做写入前后各发一次事件进行 hook，第二种是提供一种新的系统调用，使得用户需要一致性时，写入操作是通过 SRCU 挂起的，直到写入操作全部完成再统一写入。内核社区认可需求场景，但担心复杂度和性能；目前尚未达成共识。

https://lwn.net/Articles/1017947/
