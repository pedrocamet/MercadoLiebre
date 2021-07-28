const express = require('express');
const path = require('path');

const app = express();
app.set ("view engine", "ejs");

const mercadoRoutes = require("./routes/mercadoRoutes");

app.use("/", mercadoRoutes);

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath));

const publicPath2 = path.resolve(__dirname, './views');  
app.use(express.static(publicPath2));

app.listen(process.env.PORT || 3001, function() {
    console.log("Servidor corriendo en el puerto 3001");
});


