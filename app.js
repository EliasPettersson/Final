const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const extensions = require('./extensions')

const port = process.env.PORT || 8888;

var app = express();

hbs.registerPartials(__dirname  + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('message', (text) => {
    return text.toUpperCase();
});

app.get('/', (request, response) => {
    response.render('homepage.hbs', {
        title: "Home Page",
        msg: 'Welcome'
    })
});

app.get('/Homepage', (request, response) => {
    response.render('homepage.hbs', {
        title: "Home Page",
        msg: 'Welcome'
    })
});

app.get('/nasa', (request, response) => {
    response.render('nasa.hbs', {
        title: "Nasa Page",
        msg: 'Welcome to Nasa'
    })
});


app.get('/card', (request, response) => {
    response.render('card.hbs', {
        title: "Card Page",
        msg: 'Get your card'
    })
});

app.get('/404', (request, response) => {
    response.send({
        error: 'Page not found'
    })
});

app.listen(port, () => {
    console.log('Server is up on the port ${port}');
});
