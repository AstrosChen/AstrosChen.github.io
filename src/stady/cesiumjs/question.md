---
icon: edit
date: 2022-01-01
category:
  - 前端
tag:
  - cesium
  - cesiumjs
---

# 问题汇总

## 绘制对象时破损问题
`cesium 版本1.9.0`
在开发过程中，如果在绘制多边形面的时候会出现下面这种面破损的情况

![多边形破损](/assets/img/cesium_question_1.png)

导致这种情况的原因是开启了地形的深度检测
```js
viewer.scene.globe.depthTestAgainstTerrain = true
```
地图绘制多边形又使用了entities的方式，使用这种方式会导致破损
```js
viewer.entities.add({
  name: '',
  polygon: {
    hierarchy: Cesium.Cartesian3.fromDegreesArray([110, 30, 120, 40, 130, 30]),
    material: new Cesium.ColorMaterialProperty(new Cesium.Color(1,0,0,1)),
    outline: true,
    outlineColor: new Cesium.Color(1,0,0,1),
    outlineWidth: 3,
    height: 0, // 一定要设置height为0否则outline不生效
    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
  }
})
```
::: tip 解决方案：
- 不启用地形深度检测
- 不使用entities绘制，采用
:::

