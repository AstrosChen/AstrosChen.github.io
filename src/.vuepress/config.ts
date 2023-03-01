import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "星空下的咖啡馆",
      head: [['link', { rel: 'icon', href: '/assets/icon/myAvatar.png' }]],
      description: "astroschen的咖啡馆",
    },
    /* "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    }, */
  },

  theme,

  shouldPrefetch: false,
});
