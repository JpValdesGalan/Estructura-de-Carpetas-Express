const ChannelsController = {
    getAll: (req, res) => {
        res.send('Get Channels');
    },
    create: (req, res) => {
        res.send('Channel Crated');
    },
    update: (req, res) => {
        res.send('Channel Updated')
    }
}

module.exports = ChannelsController;
