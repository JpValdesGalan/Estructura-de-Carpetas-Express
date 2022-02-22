const MessagesController = {
    getAll: (req, res) => {
        res.send('Get Messages');
    },
    create: (req, res) => {
        res.send('Message Created');
    },
    update: (req, res) => {
        res.send('Message Updated');
    }
}

module.exports = MessagesController;