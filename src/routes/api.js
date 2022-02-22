const router = require('express').Router();

const userRoutes = require('../modules/user/user.routes');
const channelRoutes = require('../modules/channel/channel.routes');
const groupRoutes = require('../modules/group/group.routes');
const messagesRoutes = require('../modules/message/message.routes');
const rolRoutes = require('../modules/rol/rol.routes');
const sesionRoutes = require('../modules/sesion/sesion.routes');
const userGroupRoutes = require('../modules/userGroup/userGroup.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/groups', groupRoutes);
router.use('/messages', messagesRoutes);
router.use('/rols', rolRoutes);
router.use('/sesions', sesionRoutes);
router.use('/userGroups', userGroupRoutes);

module.exports = router;