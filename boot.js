var express = require('express');

var nV1 = "";
var nV2 = "";

var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'form2'});


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT||3000);

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
    console.log('Express started on http:// local host:' + 
    app.get('port') + 'press C-trl C to terminate!');
});

app.use(require('body-parser')());



app.get('/form1', function(req, res) {
    // we will learn about CSRF later...for now, we just
    // provide a dummy value
    res.render('form1', { csrf: 'CSRF token goes here' });
    });

    app.get('/form2', function(req, res) {
        // we will learn about CSRF later...for now, we just
        // provide a dummy value
        res.render('form2', {name : "SHLY"});
        });
    
app.post('/process', function(req, res){

console.log('Form (from querystring): ' + req.query.form);
console.log('CSRF token (from hidden form field): ' + req.body._csrf);
console.log('Name (from visible form field): ' + req.body.name);
console.log('Email (from visible form field): ' + req.body.email);
//res.redirect(303, '/thank-you');

    response = {
    name : req.body.name,
    email : req.body.email
    };

    
  //  res.send(req.body.name.text + res.body.name);

 // res.render('form2', { csrf: 'CSRF token goes here' });
 // console.log("EMAIL " + req.body.email);
    res.redirect(302, '/form2');

});

