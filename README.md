* ### VUE源码阅读笔记
*首先感谢vue大佬们的杰出贡献*
*<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">VUE官网</a>*

---

 Vue.js 的源码都在 src 目录下，其目录结构如下
* ── compiler        # 编译相关
* ── core            # 核心代码
* ── platforms       # 不同平台的支持
* ── server          # 服务端渲染
* ── sfc             # .vue 文件解析
* ── shared          # 共享代码

> compiler
* 包含 Vue.js 所有编译相关的代码,模板解析，语法树优化，代码生成
* 编译工作分：在线编译（包含构建功能的vue.js）和离线编译(webpack，vue-loader等工具)，推荐离线编译。

>core
* 包含了 Vue.js 的核心代码，包括内置组件、全局 API 封装，Vue 实例化、观察者、虚拟 DOM、工具函数等等

>platform
* Vue.js 是一个跨平台的 MVVM 框架，它可以跑在 web 上，也可以配合 weex 跑在 natvie 上
* 2个目录标识分别打包成运行在web上和weex上的Vue.js

>server
* Vue.js 2.0 支持了服务端渲染，所有服务端渲染相关的逻辑都在这个目录下。注意：这部分代码是跑在服务端的 Node.js，不要和跑在浏览器端的 Vue.js 混为一谈。

>sfc
* 把 .vue 文件内容解析成一个 JavaScript 的对象

>shared
* 定义的共享工具方法

---
通常我们利用 vue-cli 去初始化我们的 Vue.js 项目的时候会询问我们用 Runtime Only 版本的还是 Runtime+Compiler 版本
* 使用 Runtime Only 版本的 Vue.js 的时候，通常需要借助如 webpack 的 vue-loader 工具把 .vue 文件预编译成 JavaScript，因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，因此代码体积也会更轻量

* 在 Vue.js 2.0 中，最终渲染都是通过 render 函数，如果写 template 属性，则需要编译成 render 函数，那么这个编译过程会发生运行时，所以需要带有编译器的版本。
但是这个编译过程对性能会损耗，所以更推荐使用 Runtime-Only 的 Vue.js

---

从目录文件 src/platform/web可以看到有几个entry文件，选择对应的entry-runtime-with-compiler.js看完整版代码
* 通过脚本内 import Vue from './runtime/index'可以找到VUE的实现
* 继续查找 import Vue from 'core/index' 找到初始化VUE核心
* 继续查找 import Vue from './instance/index'终于找到VUE的庐山真面目，用 Function 实现的类，通过 new Vue 去实例化
* Vue 按功能把这些扩展分散到多个模块中去实现，非常方便代码的维护和管理
* 相关注释会在源代码内













*
