var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/leaflet', express.static(__dirname + '/client/leaflet'));

app.get('/', function (req, res) {
		data = [
		{id: 1, lat: 20, lng:20, name: "a" },
		{id: 2, lat: 40, lng:80 },
		{id: 3, lat: 60, lng:40 },
		{id: 4, lat: 80, lng:80 },
		{id: 7, lat: 80, lng:20 },
		{id: 6, lat: 80, lng:30 },
		{id: 5, lat: 100, lng:10 }
	];
	res.render('map', {data: data});
});

app.listen(3000, function() { console.log('Listening on 3000'); });
