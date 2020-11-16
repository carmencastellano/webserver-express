const http = require('http');

http.createServer((req, res) => {
        // puede devolver un json

        res.writeHead(200, { 'Content-type': 'application/json' })
            // res.write('que es un webserver');

        let salida = {
            nombre: ' Carmen',
            edad: 51,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen('8080');



console.log('puerto 8080');