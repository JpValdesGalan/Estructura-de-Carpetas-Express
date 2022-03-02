const UsersController = {
    getAll: (req, res) => {
        //res.send('Get Users');
        
    },
    create: (req, res) => {
        res.send('User Crated');
    },
    update: (req, res) => {
        res.send('User Updated')
    }
}

module.exports = UsersController;