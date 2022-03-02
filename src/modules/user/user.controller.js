const User = require("./user.model");

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then((results) => {
            res.send(results);
        });
    },
    create: (req, res) => {
        res.send('User Crated');
    },
    update: (req, res) => {
        res.send('User Updated')
    }
}

module.exports = UsersController;