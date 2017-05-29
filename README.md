# assignment1
使用express搭配handlebars view engine,處理HTML view回應

var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main' });
  
  對應到/views/layouts/main.handlebars預設layout
  
  '/' 對應 home.handlebars
  
  '/speak/:animal' 對應 speak.handlebars
  
  '/repeat/:word/:count' 對應 repeat.handlebars
  
  404 對應 404.handlebars
  
  '/speak/:animal' route 裡先使用toLowerCase()將route animal參數轉成小寫存在var animal,再使anima遍歷animalSpeakArray的animal是否相同,
 相同就res.render('speak', { animal: animalSpeakArray[i].speak });
 
 '/repeat/:word/:count' route 裡將word及count兩參數暫存後,使用for loop重復,再呼叫res.render('repeat', { repeat: word} );
 
 Demo
 
 https://youtu.be/9AOGatSpx7I
 
 
