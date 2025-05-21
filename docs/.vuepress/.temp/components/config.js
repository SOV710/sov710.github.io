import { hasGlobalComponent } from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.105_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_cf552a9a6c35afa3482f8d97516aa40b/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.88_sass-embedded@1.89.0_vuepress@2.0.0-rc.23_@vuepr_6a9f8607bbef21db8cc6a3c8174f178e/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.105_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_cf552a9a6c35afa3482f8d97516aa40b/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
