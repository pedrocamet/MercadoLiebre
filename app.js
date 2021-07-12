const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath));

const publicPath2 = path.resolve(__dirname, './views');  
app.use(express.static(publicPath2));

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/home.html'));  // Pagina Home
});


app.listen(process.env.PORT || 3001, function() {
    console.log("Servidor corriendo en el puerto 3001");
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/logIn.html'));
}); 

