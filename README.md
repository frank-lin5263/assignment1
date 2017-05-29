# assignment1
使用express搭配handlebars view engine,處理HTML view回應

var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main' });
  
  對應到/views/layouts/main.handlebars預設layout
  
  '/' 對應 home.handlebars
  
  '/speak/:animal' 對應 speak.handlebars
  
  '/repeat/:word/:count' 對應 repeat.handlebars
  
  404 對應 404.handlebars
