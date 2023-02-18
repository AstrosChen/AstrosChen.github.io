---
icon: edit
date: 2022-01-01
category:
  - 前端
tag:
  - node
  - nodejs
---

# node

## 包管理工具

这里是内容。

### npm
通过npm可以更好的管理自己的工具包，其他人也可以更好的使用我们的工具包。

包管理工具npm:Node Package Manager,也就是Node包管理器；

但是目前已经不仅仅是Nod包管理器了，在前端项目中我们也在使用它来管理依赖的包：比如express、koa、react、.react-dom、axios、.babel、webpack等等；

### 配置项
配置文件记录该项目的名称、版本号、项目描述。

项目所使用其他项目的的依赖名称、版本号。

配置文件无论是前端还是后端都是是package.json

常见属性：
- name 项目名称（必填
- version 当前项目版本号（必填
- description 描述信息，通常作为项目基本描述
- author 作者相关信息，发布时用到
- license 开源协议，发布时用到
- private 为true时项目将无法发布
- main 发布后的入口文件
- scripts 执行脚本命令
- dependencies 属性指定无论是开发环境华硕生成环境都需要依赖包， 实际开发用到的库模块
- devDependencies 生产环境不需要的包比如说webpack、babel等，npm install webpack --save-dev可安装到该属性中

### npm install 原理

![npm install 执行逻辑图](/assets/img/npminstall.png "npm install 执行逻辑图")

流程图
```flow
st=>start: package.json
e=>end: 完成安装
op1=>operation: npm install
lock=>condition: 是否有lock文件
op2=>operation: 构建依赖关系
op3=>operation: registry仓库
op4=>operation: 压缩包
op5=>parallel: 压缩到node_modules 并且生成package-lock.json
op21=>operation: package-lock.json
yl=>condition: 检查依赖一致性
cz=>condition: 查找缓存
hc=>operation: 缓存文件

st->op1->lock
lock(yes, right)->op21
lock(no)->op2->op3
op21->yl(yes)->cz
yl(no, left)->op2
cz(yes)->hc
hc(left)->op4
cz(no, left)->op3
op3->op4->op5
op5(path1)->op21
op5(path2, bottom)->e
```