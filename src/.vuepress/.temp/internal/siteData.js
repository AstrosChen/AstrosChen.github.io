export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"星空下的咖啡馆\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/myAvatar.png\"}]],\"description\":\"astroschen的咖啡馆\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Blog Demo\",\"description\":\"A blog demo for vuepress-theme-hope\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
