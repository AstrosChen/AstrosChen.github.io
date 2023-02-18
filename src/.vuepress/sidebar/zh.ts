import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    // 空自字符就是首页
    {
      text: "项目",
      icon: "ability",
      prefix: "/project/",
      children: [
        "gistopo/",
      ],
    },
    {
      text: "算法",
      icon: "calculate",
      prefix: "arithmetic/",
      children: [
        "bessel/",
      ],
    },
    {
      text: "学习",
      icon: "blog",
      prefix: "stady/",
      children: [
        { text: "nodejs", icon: "nodeJS", link: "nodejs/"},
        { text: "threejs", icon: "geometry", link: "threejs/"},
      ],
    }
  ],
  // 此配置独立的侧边栏
  "/arithmetic/": "structure",
  "/project/": "structure",
  "/stady/": "structure",
});
