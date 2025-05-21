export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[16,0,17,1,4,5,6,7,8,9,10,11,12,13,14,15,2,3,20,21,18,19]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[0]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[1,0,4,5,6,7,8,9,10,11,12,13,14,15,17,16,2,3]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

