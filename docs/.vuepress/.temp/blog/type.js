export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[15,0,16,1,4,5,6,7,8,9,10,11,12,13,14,2,3,19,20,21,17,18]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[0]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[1,0,4,5,6,7,8,9,10,11,12,13,14,16,15,2,3]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

