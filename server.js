
const express = require('express');
const bodyParser = require('body-parser');
const mathjs = require('mathjs');
const { ConditionalNodeDependencies } = require('mathjs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port = 8000;

app.post('/', function(req, res){
  if (req.body) {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if ( num1 && num2 ) {
      var result = String(mathjs.evaluate(num1 + num2));
      res.send(result);
    } else {
      res.send("null")
    }
  } else {
    res.send("null")
  }
});

var server = app.listen(port, ()=> console.log(`listening to port ${port}`));
