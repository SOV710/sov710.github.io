export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"博客\":{\"path\":\"/category/%E5%8D%9A%E5%AE%A2/\",\"indexes\":[0]},\"教程\":{\"path\":\"/category/%E6%95%99%E7%A8%8B/\",\"indexes\":[1]},\"History\":{\"path\":\"/category/history/\",\"indexes\":[2,3]},\"Category A\":{\"path\":\"/category/category-a/\",\"indexes\":[4,5,6,7,8,9,10,11,12,13,14,15]},\"Category B\":{\"path\":\"/category/category-b/\",\"indexes\":[4,5,6,7,8,9,10,11,12,13]},\"Category C\":{\"path\":\"/category/category-c/\",\"indexes\":[16,17]},\"专栏1\":{\"path\":\"/category/%E4%B8%93%E6%A0%8F1/\",\"indexes\":[18]},\"Intel手册中文翻译\":{\"path\":\"/category/intel%E6%89%8B%E5%86%8C%E4%B8%AD%E6%96%87%E7%BF%BB%E8%AF%91/\",\"indexes\":[19]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"VuePress\":{\"path\":\"/tag/vuepress/\",\"indexes\":[0,1]},\"指南\":{\"path\":\"/tag/%E6%8C%87%E5%8D%97/\",\"indexes\":[0]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[1]},\"WWI\":{\"path\":\"/tag/wwi/\",\"indexes\":[3]},\"WWII\":{\"path\":\"/tag/wwii/\",\"indexes\":[2]},\"tag A\":{\"path\":\"/tag/tag-a/\",\"indexes\":[10,11,12,13,14,15]},\"tag B\":{\"path\":\"/tag/tag-b/\",\"indexes\":[10,11,12,13,14,15]},\"tag C\":{\"path\":\"/tag/tag-c/\",\"indexes\":[4,5,6,7,8,9]},\"tag D\":{\"path\":\"/tag/tag-d/\",\"indexes\":[4,5,6,7,8,9]},\"tag E\":{\"path\":\"/tag/tag-e/\",\"indexes\":[16,17]},\"介绍\":{\"path\":\"/tag/%E4%BB%8B%E7%BB%8D/\",\"indexes\":[18]},\"基础\":{\"path\":\"/tag/%E5%9F%BA%E7%A1%80/\",\"indexes\":[19]},\"教程\":{\"path\":\"/tag/%E6%95%99%E7%A8%8B/\",\"indexes\":[19]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

