var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser')
var app = module.exports = express();
var jsonfile = require('jsonfile');

var datafile = "data.json";
jsonfile.spaces = 2;

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.render('index')
})

app.set('views', './client')
app.set('view engine', 'html')
app.engine('.html', ejs.__express)
// app.set('html', ejs.renderFile)

app.use(express.static(path.join(__dirname, 'client')));

app.post('/gym', function(req, res) {
    var data = req.body.data
    console.log(data);
    res.send(data);

    // jsonfile.readFile(datafile, function(err, obj) {
    //   console.dir(obj)
    // })

    var obj = {name: 'JP2'}

    jsonfile.writeFile(datafile, obj, function (err) {
      console.error(err)
    })
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
