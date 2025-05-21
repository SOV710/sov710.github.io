import CodeDemo from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.88_markdown-it@14.1.0_sass-embedded@1.89.0_vuepress_f6dc3657d95c69d34d418e3e17364ce3/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.88_markdown-it@14.1.0_sass-embedded@1.89.0_vuepress_f6dc3657d95c69d34d418e3e17364ce3/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import Playground from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.88_markdown-it@14.1.0_sass-embedded@1.89.0_vuepress_f6dc3657d95c69d34d418e3e17364ce3/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
  },
};
