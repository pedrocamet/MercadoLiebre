const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath));

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});


app.listen(3001, function() {
    console.log("Servidor corriendo en el puerto 3001");
});

app.get('/login', (req,res) =>{
    res.send("log in")
 }); // Pagina de Log In

