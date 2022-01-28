const express = require('express');

/*config view engine*/

let configViewEngine = (app) => {
    app.use(express.static('./src/public'));
    app.set('viewEngine', 'ejs');
    app.set('views', './src/views' )
}
module.exports = configViewEngine;
