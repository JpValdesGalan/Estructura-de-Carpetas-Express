const GroupsController = {
    getAll: (req, res) => {
        res.send('Get Groups');
    },
    create: (req, res) => {
        res.send('Group Created');
    },
    update: (req, res) => {
        res.send('Group Updated');
    }
}

module.exports = GroupsController;