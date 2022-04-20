const express = require('express');
const app = express();
const port = 1206;
const hbs = require('express-handlebars');

// définir handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));

// Express static permet de diriger un chemin sur un dossier en particulier
app.use('/assets', express.static('public'));


app.get('/', (req, res) => {
    res.render('home');
});



// Lecture sur le port
app.listen(process.env.PORT || port, function() {
    console.log("le serveur est en fonction sur le port 1206")
});