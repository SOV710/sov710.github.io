import { hasGlobalComponent } from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.105_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_39f8414e50688e51fde45883e5355aa2/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/home/chris/myworld/git/vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.88_sass-embedded@1.89.0_sass@1.89.0_vuepress@2.0.0-_9527c76b7facc96ebb96731de770841e/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "/home/chris/myworld/git/vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.105_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_39f8414e50688e51fde45883e5355aa2/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
