<h3>developtest是什么？</h3>
<p>作为一个前端人员，感受到前端开发需求日益增加，不管是后台服务器，前台接口都涉及。而为了解决前端对于服务器和接口跨域的盲区问题，node.js很好的帮我们解决这个问题。node.js有自己本身的一个服务器模块（http），利用http模块可以在电脑上临时搭建一个本地服务器，而且可以利用局域网帮助我们检测手机上的问题。</p>

<h3>developtest主要目的</h3>
<p>developtest项目里插入webpack，vue，require，ejs等插件和模块，以node为启动语言开发。</p>
<p>webpack是现在前端比较流行的一个基于node打包模块，它可以帮助我们把js文件，以及其他css，html，图片等文件打包压缩，尽可能的减轻页面加载的负担，减少一些<script>等标签重复使用。</p>
<p>vue是现在比较流行的一个前端数据交互框架，它有效的帮助网页实现组件化，利用vue中各个组件可以减少js和html代码的开发，同时在处理数据可以更有效。</p>
<p>require一个js文件模块化插件</p>
<p>ejs一个基于node.js模板引擎,使用方法请参考 https://ejs.bootcss.com/</p>

<h3>developtest为了更好的学习前端</h3>
<p>我一直相信，学会的知识如果用不到会逐渐遗忘，而且为了更好更快的学习webpack，vue等前端知识，我把它们整合起来一起使用，结合以前学习的知识整合了一个比较合适个人使用的一个小项目。因为之前使用的是公司vue+webpack网站项目，觉得纯vue+webpack做的项目局限性有点大（可能是我自己不太会用或者不怎么习惯），因此自己就结合自身修改了这个项目。developtest初期只是用来测试和开发接口以及网站跨域等问题，至于后期要不要做成一个站点项目还需要策划和代码编写其他功能。</p>

<h3>developtest项目目录</h3>
<p>
  config:配置文件夹，webpack以及其他配置；<br>
  routers:路由文件夹<br>
  src:存放压缩打包的js文件，最终生成的bundle.js文件在static\dist目录下存放；<br>
  static:存放静态文件，如图片，js，css等；<br>
  views:网站html模板页面存放；<br>
  index.js:启动页面；<br>
</p>

<h3>developtest启动</h3>
<p>npm run dev</p>
