##personal blog 
`2016/10/11`

### Update

* php文件添加了cors header 解决跨域请求

  ```
  <?php
  header("Access-Control-Allow-Origin: http://localhost:8080");
  ?>
  ```

  主要为了能够使用`webpack-dev-server` 监听数据更新，并能与后台交互数据

  ​

* 更新markdown样式为github-markdown样式

  从GitHub抓包得到css文件，筛选出markdown样式<https://github.com/masongzhi/github-Markdown-style>

