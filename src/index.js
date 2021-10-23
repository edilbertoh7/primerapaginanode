const express = require('express');
const app = express();
const path = require("path");
//setings
app.set('port',80);
// indico al servidor la ruta completa de la carpet views
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//midlewares

app.use(require('./routes/index'));

//static files


// escuha el puerto 4000
app.listen(app.get('port'), () => {
    console.log("server works on port ", app.get("port"));
    
})
