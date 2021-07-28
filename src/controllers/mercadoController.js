const controlador =
{
    home: (req, res) => {
        res.render ("home");
    },

    login: (req, res) => {
        res.render ("login");
    },

    registro: (req, res) => {
        res.render ("./users/registro");    
    },  
}

module.exports = controlador;