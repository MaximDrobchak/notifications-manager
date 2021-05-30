const express = require('express');
const router = express.Router();

const NotificationsClient = require('../notification_client/notification_client');

router.post('/', NotificationsClient.sendNotifications);

module.exports = router;
