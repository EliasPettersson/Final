const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

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

// app.use((request, response, next) => {
//     response.render('maintenance.hbs', {
//         title:'Maintenance Page',
//         msg:'Maintenance'
//     });
// });

app.get('/', (request, response) => {
    //response.send('<h1>Hello Express!</h1>');
    response.send({
        name: 'Your Name',
        school: [
            'BCIT',
            'SFU',
            'UBC'
        ]
    })
});

app.get('/info', (request, response) => {
    response.render('about.hbs', {
        title: 'About Page',
        year: new Date().getFullYear(),
        welcome: 'hello!'
    });
});

app.get('/', (request, response) => {
    response.render('homepage.hbs', {
        title: "Home Page",
        msg: 'Welcome'
    })
});

app.get('/homepage', (request, response) => {
    response.render('homepage.hbs', {
        title: "Home Page",
        msg: 'Welcome'
    })
});

app.get('/info', (request, response) => {
    response.render('about1.hbs', {
        title: "About Page",
        msg: 'This is Derek Do'
    })
});

app.get('/weather', (request, response) => {
    response.render('weather.hbs', {
        title: "Weather Page",
        msg: 'Weather Page'
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

fs.writeFileSync