import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.88_@vuepress+plugin-prismjs@2.0.0-rc.105_@vueuse+core@13.2_f5764d6e0db861692ea98601bcf9d052/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.104_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0_bf5e15933e747f3e6373d78bf47e1c10/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.88_@vuepress+plugin-prismjs@2.0.0-rc.105_@vueuse+core@13.2_f5764d6e0db861692ea98601bcf9d052/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "/home/chris/myworld/git/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.88_@vuepress+plugin-prismjs@2.0.0-rc.105_@vueuse+core@13.2_f5764d6e0db861692ea98601bcf9d052/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";

import "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.105_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_39f8414e50688e51fde45883e5355aa2/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.105_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_39f8414e50688e51fde45883e5355aa2/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.105_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_39f8414e50688e51fde45883e5355aa2/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/home/chris/myworld/git/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.88_@vuepress+plugin-prismjs@2.0.0-rc.105_@vueuse+core@13.2_f5764d6e0db861692ea98601bcf9d052/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
