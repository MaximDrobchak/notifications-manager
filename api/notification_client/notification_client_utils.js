const CONSTANTS = require('../../constants/constants');
const TEXT_CONSTANTS = require('../../constants/text_constants');
const { isToggleNotification } = require('../../utils/toggle_notification');

exports.sortNotificationsByTime = (notifications) =>
  notifications.sort((a, b) => a.timeSend - b.timeSend);

exports.getNotificationContentent = (type) => ({
  message: TEXT_CONSTANTS.MESSAGES[type] || '',
  title: TEXT_CONSTANTS.TITLES[type] || '',
});

exports.isValidNotification = ({ status, userStatus, type, course }) =>
  status === CONSTANTS.STATUS.ACTIVE &&
  userStatus === CONSTANTS.USER_STATUS.ACTIVE &&
  isToggleNotification({ course, type });
