const express = require('express');
const app = express();
const port = 5000;
const hbs = require('express-handlebars');

// Appeler Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));


// Routes
app.get('/', function(req, res) {
    res.render('index');
});


// Express static permet de diriger un chemin sur un dossier en particulier
app.use('/assets', express.static('public'));

app.listen(port, function() {
    console.log("le serveur tourne sur le port 5000")
});