# 主题定制

本节介绍如何自定义SOV710博客的主题样式和外观，包括颜色、组件和响应式设计。

## 自定义样式文件

在`.vuepress/styles/index.scss`中创建自定义样式，增强导航栏和其他UI元素：

```scss
/**
 * Custom styles for the blog
 */

/* Navbar styling */
.navbar {
  backdrop-filter: blur(5px);
  background-color: rgba(var(--bg-color), 0.8) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  .site-name {
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .nav-links {
    .nav-item > a {
      font-weight: 500;
      transition: all 0.2s ease;
      
      &:hover {
        color: var(--c-brand);
        background-color: rgba(var(--c-brand), 0.1);
        transform: translateY(-2px);
      }
    }
    
    .dropdown-wrapper .dropdown-title {
      font-weight: 500;
    }
    
    .dropdown-wrapper .nav-dropdown {
      border-radius: 8px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      padding: 0.6rem 0;
      
      .dropdown-item {
        transition: all 0.2s ease;
        
        &:hover {
          background-color: rgba(var(--c-brand), 0.1);
        }
        
        a {
          padding: 0.5rem 1.5rem;
          
          &.router-link-active {
            color: var(--c-brand);
            font-weight: 500;
          }
        }
      }
    }
  }
}

/* 搜索框样式美化 */
.search-box {
  margin-right: 0.5rem;
  
  input {
    border-radius: 4px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    background-color: rgba(127, 127, 127, 0.1);
    
    &:focus {
      border-color: var(--c-brand);
      box-shadow: 0 0 0 2px rgba(var(--c-brand), 0.1);
    }
  }
  
  .suggestions {
    border-radius: 6px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    
    .suggestion {
      padding: 0.6rem 0.8rem;
      
      a {
        font-weight: 500;
        
        .page-title {
          font-weight: 600;
        }
      }
      
      &.focused {
        background-color: rgba(var(--c-brand), 0.1);
      }
    }
  }
}

/* 项目卡片样式美化 */
.project-panel {
  .project {
    transition: all 0.3s ease;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .icon {
      padding: 1.5rem;
      font-size: 1.8rem;
      background: linear-gradient(to right bottom, var(--c-brand), #6d4ea3);
      color: white;
    }
    
    .name {
      font-weight: 600;
      font-size: 1.1rem;
    }
    
    .desc {
      opacity: 0.8;
      font-size: 0.95rem;
    }
  }
}
```

## 颜色主题定制

要自定义主题颜色，可以在`.vuepress/styles/palette.scss`文件中设置：

```scss
// 颜色变量
$theme-color: #3eaf7c;
$text-color: #2c3e50;
$bg-color: #ffffff;
$bg-color-secondary: #f8f8f8;
$border-color: #eaecef;
```

## 图片和图标配置

### 图标配置

vuepress-theme-hope支持使用FontAwesome图标，可以在主题配置中启用：

```js
// 在theme.ts中
plugins: {
  // 其他插件配置...
  
  // 图标配置
  icon: {
    assets: "fontawesome-with-brands",   // 使用FontAwesome图标
  }
}
```

### 静态资源路径

图片和其他静态资源应放置在`.vuepress/public/`目录下，访问时使用根路径：

```md
![Logo](/logo.jpg)
```

> 注意：始终使用以`/`开头的根路径引用静态资源，而不是相对路径。

## 响应式设计

vuepress-theme-hope已内置响应式设计，会自动适配不同屏幕尺寸的设备。你可以在浏览器中通过开发者工具查看不同屏幕尺寸下的显示效果。

## 深色模式配置

在theme.ts中，可以配置深色模式选项：

```js
// 深色模式设置
darkmode: "toggle",  // 可选值："toggle" | "switch" | "auto" | "enable" | "disable"
```

- `toggle`: 在导航栏中显示深色模式切换按钮
- `switch`: 在导航栏中显示深色/浅色模式开关
- `auto`: 自动根据用户系统偏好切换
- `enable`: 始终启用深色模式
- `disable`: 禁用深色模式 