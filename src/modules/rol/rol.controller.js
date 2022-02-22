const RolController = {
    getAll: (req, res) => {
        res.send('Get Roles');
    },
    create: (req, res) => {
        res.send('Rol Created');
    },
    update: (req, res) => {
        res.send('Rol Updated');
    }
}

module.exports = RolController;