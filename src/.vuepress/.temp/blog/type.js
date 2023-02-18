export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-653b81a3","v-63f88b46","v-5d24ec26","v-29199fe6","v-f2e0f19a","v-184f4da6","v-2e3eac9e","v-f510f7a8","v-c9bbfba2","v-71d1fb11"]},"/en/":{"path":"/en/article/","keys":["v-df57e292","v-06447c71","v-ef850d8c","v-236c4579","v-4db91f47","v-5aa3d8ba","v-367b840a","v-e49748d0","v-34f37b7a"]}},"star":{"/":{"path":"/star/","keys":[]},"/en/":{"path":"/en/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-653b81a3","v-63f88b46","v-5d24ec26","v-29199fe6","v-f2e0f19a"]},"/en/":{"path":"/en/timeline/","keys":["v-df57e292","v-06447c71","v-ef850d8c","v-236c4579","v-4db91f47"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

