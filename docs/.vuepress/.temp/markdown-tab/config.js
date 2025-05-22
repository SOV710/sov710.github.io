import { CodeTabs } from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.104_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vue_df72c89952107046daabbf4e18526960/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.104_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vue_df72c89952107046daabbf4e18526960/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.104_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vue_df72c89952107046daabbf4e18526960/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
