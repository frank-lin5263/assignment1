var express = require('express');

var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

var animalSpeakArray = [
	{animal: "pig", speak: 	"The pig says \'Oink\'"},
	{animal: "cow", speak: 	"The cow says \'Moo\'"},
	{animal: "dog", speak: 	"The dog says \'Woof Woof\'"},
	{animal: "undefine", speak: "error undefine animal"}
];

app.get('/', function(req, res) {
	res.render('home');
});
app.get('/speak/:animal', function(req,res){
	var animal = req.params.animal.toLowerCase();
	for (var i = 0; i < animalSpeakArray.length; i += 1) {
		if (animalSpeakArray[i].animal == animal) {
			res.render('speak', { animal: animalSpeakArray[i].speak });
		}
	}
	res.render('speak', { animal: animalSpeakArray[3].speak });
});
app.get('/repeat/:word/:count', function(req, res) {
	var word = "";
	var count = Number(req.params.count);
	for (var i = 0; i < count; i += 1) {
		word += req.params.word;
		word += "\r\n";
	}
	res.render('repeat', { repeat: word} );
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});
