import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/project/",
  // "/arithmetic/",
  { text: "算法", icon: "calculate", link: "/arithmetic/"},
  {
    text: "学习",
    icon: "blog",
    prefix: "/stady/",
    children: [
      {text: "nodejs", icon: "nodeJS", link: "nodejs/"},
      {text: "threejs", icon: "geometry", link: "threejs/"},
    ],
  }
]);