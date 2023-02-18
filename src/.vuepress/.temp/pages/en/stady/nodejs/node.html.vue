<template><div><h1 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> node</h1>
<h2 id="包管理工具" tabindex="-1"><a class="header-anchor" href="#包管理工具" aria-hidden="true">#</a> 包管理工具</h2>
<p>这里是内容。</p>
<h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h3>
<p>通过npm可以更好的管理自己的工具包，其他人也可以更好的使用我们的工具包。</p>
<p>包管理工具npm:Node Package Manager,也就是Node包管理器；</p>
<p>但是目前已经不仅仅是Nod包管理器了，在前端项目中我们也在使用它来管理依赖的包：比如express、koa、react、.react-dom、axios、.babel、webpack等等；</p>
<h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h3>
<p>配置文件记录该项目的名称、版本号、项目描述。</p>
<p>项目所使用其他项目的的依赖名称、版本号。</p>
<p>配置文件无论是前端还是后端都是是package.json</p>
<p>常见属性：</p>
<ul>
<li>name 项目名称（必填</li>
<li>version 当前项目版本号（必填</li>
<li>description 描述信息，通常作为项目基本描述</li>
<li>author 作者相关信息，发布时用到</li>
<li>license 开源协议，发布时用到</li>
<li>private 为true时项目将无法发布</li>
<li>main 发布后的入口文件</li>
<li>scripts 执行脚本命令</li>
<li>dependencies 属性指定无论是开发环境华硕生成环境都需要依赖包， 实际开发用到的库模块</li>
<li>devDependencies 生产环境不需要的包比如说webpack、babel等，npm install webpack --save-dev可安装到该属性中</li>
</ul>
<h3 id="npm-install-原理" tabindex="-1"><a class="header-anchor" href="#npm-install-原理" aria-hidden="true">#</a> npm install 原理</h3>
<figure><img src="/assets/img/npminstall.png" alt="npm install 执行逻辑图" tabindex="0" loading="lazy"><figcaption>npm install 执行逻辑图</figcaption></figure>
<p>流程图</p>
<FlowChart id="flowchart-97" code="eJxlkM1qwkAUhfd5iiwtmEL82QjJq5Q0mZrUcSYk00VcuaioVIqgiIu2LsSWLmoLtmKN+DSZiY/RGROFoZuBud+5955zQ2KYIbECUlN9y25YdXB5G2KkAMMEyKmpdDlgvSFd9g/zjoJ93TCxDwKLeBjVVOQ3VQ/xdggViO2GYdoYOV4G2fSTDl/ZU18QNukm8ZoPKEkD2Ms9jbfJ/vnwM6GdVbqKuaQsSQJQ90ISREk8otsRxxUJ08eHdPdOB8Jc1TB9K+BmADyD3hfCDrhqYucOglClv+tkM07HMx4qz6sJf1lobk8O+F8SQTnkvM1miyxAsmkfut+s/abYLVk0W7D+Pt2N6MdUcW1pQ1bNz6OERONQ10yx8HjSQgTCohp4dZdcCFbSszLC2Vc85aNxzYygUPO63eI+uaSoQnCT93FTOXVtbqJwJhVBJK2YVz4i8VTFZQu+RVz95OBUKBXVa0wIbnIAlD/Cp/S6" preset="vue"></FlowChart></div></template>


