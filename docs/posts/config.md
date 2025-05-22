---
title: 我的梦中情机配置之软件篇——Neovim，启动！
category: 教程
tags:
  - neovim
  - linux
  - lsp
order: 1
cover: '/posts/config/config-cover.jpg'
---

**OS**: Gentoo (现在屈居在QEMU里，等我挑个良辰吉日装进物理机

**Terminal-based tool:**
- kitty (目前已经彻底代替tmux的生态位了 ；而且后续想做个实现类似vscode中typst-preview，所以图像渲染不可避，而目前kitty是我觉得图像渲染做的最好的terminal emulator…
- zsh (暂时的选择，后续打算试一试fish和nushell
- keyd (目前vim键盘映射的解决方案，不买HHKB也能达到HHKB的效果 ；而且在Wayland下也能稳定运行，比xkeybinds爽多了)
- neovim (梦中情editor
- uv (新的python工具，made in rust，打算用它替代所有的pyenv, pipx, poetry
- starship (好看的说
- zoxide (神，现在彻底不用cd了
- fzf (刚装，先试试
- zsh-syntax-highlighting, zsh-autosuggestions (目前这个是用linuxbrew安装下来是让我很恼火的…linuxbrew不能改directory prefix

![config-1](/posts/config/config-1.png "现在这个terminal还是GNOME下的阉割版，等换了hyprland再发一张")

**Coooool**: fastfetch, htop, btop (真帅吧

**Input method**: fcitx5-rime-雾凇拼音(ice)

**Display protocol**: Wayland (Wayland生态有待建设

**Desktop**:

- Hyprland (毕竟Wayland下也没什么选择，我也没什么i3迁移需求，电脑性能也不差，就hyprland了的说，绝对不是男凉的说
- mako (notification daemon
- pipewire (非systemd不得不品的一环
- XDG desktop portal (哎我操systemd怎么这么坏
- authentication agent
- qt wayland (just a library
- eww (也不是说waybar不好，但总是想玩些 奇的东西，而且，btw it made in rust
- tofi (应用启动器，made in c
- hyprpicker (取色器，好玩
- cliphist (剪切板管理器
- thunar (xfce的file manager，这个其实还有待商榷
- yazi (file manager果然还是要用terminal啊 (感慨
- swww (wallpaper engine 4 wayland, made in rust
- 以上的都没配过
- 等我Gentoo转移到物理机上再配，现在主力机还在用Ubuntu特供版GNOME（

![config-2](/posts/config/config-2.jpg "自己的还没配出来，偷的网图")

**Font**: JetBrains Nerd Font, 鹭霞文楷（后续计划把这两个合成一个字体，就成了所有字体的最终解决方案 做出来后上传github

**Network**:

- clash (纯命令行clash还有点折腾的
- ssh

**Language**:

- C/C++: clang, llvm (Gentoo理论上能做出没有GNU的GNU/Linux（？
- Rust
- Python: uv
- Lua: luajit, luarocks
- Ruby
- Go
- Javascript/Typescript: nodejs, eslint
- Typst (近些年我很喜欢的排版工具，感觉是接近latex的上限+接近markdown的门槛，大脑已经变得光溜溜了；打算给它写个neovim插件
- Latex

**Useful tool**: imagemagick, ffmpng
