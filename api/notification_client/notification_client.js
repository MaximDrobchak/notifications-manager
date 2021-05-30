const cron = require('cron');
const NotificationModel = require('../models/notifications');
const {
  sortNotificationsByTime,
  isValidNotification,
} = require('./notification_client_utils');
const { showLogForSendNotification } = require('../../utils/mock_data_utils');
const { getNotificationsSender } = require('./get_notification_sender');
const { STATUS } = require('../../constants/constants');

const sendNotification = (notification) => {
  const { type, timeSend } = notification;
  const notificationsSender = getNotificationsSender(type);
  showLogForSendNotification(notification);
  cron
    .job(new Date(timeSend), async () => {
      try {
        const result = await notificationsSender(notification);
        const { id, userId, course, type } = result.notification;

        console.log(
          `for course: ${course}, userId: ${userId} and type: ${type}, sendes is succesfuld`
        );

        NotificationModel.update({ id }, { status: STATUS.COMPLETED });
      } catch {}
    })
    .start();
};

exports.sendNotifications = async (req, res, next) => {
  try {
    const notifications = await NotificationModel.findAll();
    if (!notifications.length) {
      const error = new Error('No notifications to send.');
      res.status(400).json({ error });
      return;
    }

    sortNotificationsByTime(notifications.filter(isValidNotification)).forEach(
      sendNotification
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};
