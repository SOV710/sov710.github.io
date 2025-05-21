import { CodeTabs } from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.104_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vue_ae53025fbad512a28dfb4becb68ae3bf/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.104_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vue_ae53025fbad512a28dfb4becb68ae3bf/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.104_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vue_ae53025fbad512a28dfb4becb68ae3bf/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
