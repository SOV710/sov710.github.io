---
title: 朋友们
icon: user-group
breadcrumb: false
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
---
# 友情链接

<div class="friend-title">感谢每一位朋友的支持与陪伴!</div>

<div class="friend-links-container">
  <div class="friend-card">
    <div class="friend-card-cover">
      <img src="/friends/ljq.png" alt="知言" />
    </div>
    <div class="friend-card-content">
      <div class="friend-name">知言</div>
      <div class="friend-desc">任豚收收味</div>
      <a href="https://timlin15.github.io/" target="_blank" class="friend-link">访问网站</a>
    </div>
  </div>

  <div class="friend-card">
    <div class="friend-card-cover">
      <img src="/friends/wnc.jpg" alt="wnc的咖啡馆" />
    </div>
    <div class="friend-card-content">
      <div class="friend-name">wnc的咖啡馆</div>
      <div class="friend-desc">很厉害很全面的群u</div>
      <a href="https://wncfht.github.io/notes/" target="_blank" class="friend-link">访问网站</a>
    </div>
  </div>

  <div class="friend-card">
    <div class="friend-card-cover">
      <img src="/friends/baoshuo.jpg" alt="Baoshuo" />
    </div>
    <div class="friend-card-content">
      <div class="friend-name">Baoshuo</div>
      <div class="friend-desc">全栈很厉害的群u</div>
      <a href="https://baoshuo.ren/" target="_blank" class="friend-link">访问网站</a>
    </div>
  </div>

  <div class="friend-card">
    <div class="friend-card-cover">
      <img src="/friends/kinnari.jpg" alt="Kinnari" />
    </div>
    <div class="friend-card-content">
      <div class="friend-name">Kinnari</div>
      <div class="friend-desc">贴贴</div>
      <a href="https://kinnariyamamatanha.github.io/" target="_blank" class="friend-link">访问网站</a>
    </div>
  </div>

</div>

<div class="apply-container">
  <div class="apply-title">申请友链</div>
  <div class="apply-desc">
    可以通过以下方式联系我喵~：

    - 邮箱: chris916911179@outlook.com
    - GitHub: https://github.com/sov710

</div>

<div class="apply-info">
    <div class="apply-info-title">申请请至少提供：</div>
    <div class="apply-info-content">
      <pre><code>name: "您的网站名称"
desc: "网站简短描述"
url: "网站链接"
avatar: "头像图片链接"</code></pre>
    </div>
  </div>

<div class="apply-info">
    <div class="apply-info-title">本站信息</div>
    <div class="apply-info-content">
      <pre><code>name: "SOV710 Blog"
desc: "Let's play arch & robotics!"
url: "https://sov710.github.io"
avatar: "https://sov710.github.io/logo.jpg"</code></pre>
    </div>
  </div>
</div>

<style>
.friend-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2rem 0;
  background-image: linear-gradient(to right, var(--theme-color, #3eaf7c), #6d4ea3);
  -webkit-background-clip: text;
  color: transparent;
}

.friend-links-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.friend-card {
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  background-color: var(--bg-color, #fff);
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid var(--border-color, #eaecef);
}

.friend-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.friend-card-cover {
  height: 150px;
  overflow: hidden;
  background-color: var(--bg-color-secondary, #f8f8f8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.friend-card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.friend-card:hover .friend-card-cover img {
  transform: scale(1.05);
}

.friend-card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.friend-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color, #2c3e50);
}

.friend-desc {
  font-size: 0.9rem;
  color: var(--text-color-light, #6a8bad);
  margin-bottom: 1rem;
  flex-grow: 1;
}

.friend-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, var(--theme-color, #3eaf7c), var(--theme-color-dark, #3b8070));
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
}

.friend-link:hover {
  background: linear-gradient(to right, var(--theme-color-light, #4abf8a), var(--theme-color, #3eaf7c));
  transform: translateY(-2px);
}

.apply-container {
  margin: 4rem 0;
  padding: 2rem;
  border-radius: 12px;
  background-color: var(--bg-color-secondary, #f8f8f8);
  border: 1px solid var(--border-color, #eaecef);
}

.apply-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--text-color, #2c3e50);
  border-bottom: 2px solid var(--border-color, #eaecef);
  padding-bottom: 0.5rem;
}

.apply-desc {
  margin-bottom: 2rem;
  color: var(--text-color, #2c3e50);
}

.apply-info {
  margin-top: 2rem;
}

.apply-info-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color, #2c3e50);
}

.apply-info-content {
  background-color: var(--code-bg-color, #282c34);
  border-radius: 6px;
  padding: 1rem;
}

/* Custom dark mode variables */
html.dark .friend-card {
  background-color: var(--bg-color, #1e1e1e);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border-color: var(--border-color, #333);
}

html.dark .friend-card-cover {
  background-color: var(--bg-color-secondary, #2a2a2a);
}

html.dark .apply-container {
  background-color: var(--bg-color-secondary, #2a2a2a);
  border-color: var(--border-color, #333);
}

html.dark .friend-name {
  color: var(--text-color, #c9d1d9);
}

html.dark .friend-desc {
  color: var(--text-color-light, #8b949e);
}

html.dark .apply-title,
html.dark .apply-desc,
html.dark .apply-info-title {
  color: var(--text-color, #c9d1d9);
}

html.dark .apply-title {
  border-color: var(--border-color, #333);
}

/* Code formatting in apply sections */
.apply-info-content pre {
  margin: 0;
  padding: 0;
  background-color: transparent;
}

.apply-info-content code {
  display: block;
  font-family: var(--font-family-code);
  line-height: 1.5;
  white-space: pre-wrap;
  padding: 0;
  background-color: transparent;
  color: var(--c-text-code, #c9d1d9); /* Default to a light color suitable for dark backgrounds */
}

/* Ensure code text is light in light mode if background is dark, or dark if background is light */
html:not(.dark) .apply-info-content code {
  color: #c9d1d9; /* Light color for code text on dark background in light mode */
}

html.dark .apply-info-content code {
  color: var(--c-text-code-dark, #c9d1d9); /* Keep this for dark mode consistency */
}

/* Responsive adjustments */
@media (max-width: 719px) {
  .friend-links-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .friend-title {
    font-size: 1.5rem;
  }
}
</style>
