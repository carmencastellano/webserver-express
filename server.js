const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// middleware hace algo sin importar la peticion
app.use(express.static(__dirname + '/public'));


// // helpers
// hbs.registerHelper('getAnio', () => {
//     return new Date().getFullYear();
// });

// hbs.registerHelper('capitalizar', (texto) => {

//     let palabras = texto.split(' ');
//     palabras.forEach((element, idx) => {

//         palabras[idx] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//     });

//     return palabras.join(' ');

// });

// // -- fin de helpers

hbs.registerPartials(__dirname + '/views/parciales');


// app.set('view  engine', 'hbs');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'titulo dinamico..lo que sea'
    })
});

app.get('/about', (req, res) => {
    res.render('about');
});


// app.get('/', (req, res) => {
//     // res.send('Hello World')
//     let salida = {
//         nombre: ' Carmen',
//         edad: 51,
//         url: req.url
//     }
//     res.send(salida);
// })


// app.get('/data', (req, res) => {
//     res.send('Hello Data')

// })

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
})