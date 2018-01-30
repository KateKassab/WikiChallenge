var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
 res.render('index');
});

app.get('/history', function (req, res) {
 res.render('history');
});

app.get('/LoZ', function (req, res) {
 // res.render('LoZ');
 res.json({message: 'API Example App'})
});

app.get('/LinkDeku', function (req, res) {
 res.render('LinkDeku');
});

app.get('/DekuTree', function (req, res) {
 res.render('DekuTree');
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});

//edit later
