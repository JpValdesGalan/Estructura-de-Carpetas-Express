const SesionController = {
    getAll: (req, res) => {
        res.send('Get Sesions');
    },
    create: (req, res) => {
        res.send('Sesion Created');
    },
    update: (req, res) => {
        res.send('Sesion Updated');
    }
}

module.exports = SesionController;