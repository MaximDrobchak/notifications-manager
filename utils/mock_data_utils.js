// This halper with generate mock data for fake model
const CONSTANTS = require('../constants/constants');
const TEXT_CONSTANTS = require('../constants/text_constants');

exports.getStatus = (i) =>
  i % 2 === 0 ? CONSTANTS.STATUS.ACTIVE : CONSTANTS.STATUS.COMPLETED;

exports.getUserStatus = (i) =>
  i % 2 === 0 ? CONSTANTS.USER_STATUS.ACTIVE : CONSTANTS.USER_STATUS.SHOWN;

exports.getType = (i) => {
  const rendomNumber = Math.floor(Math.random() * 50);
  if (rendomNumber < 10) {
    return CONSTANTS.TYPES.WEB;
  }
  if (rendomNumber > 10 && rendomNumber < 20) {
    return CONSTANTS.TYPES.MAIL;
  }
  if (rendomNumber > 20 && rendomNumber < 30) {
    return CONSTANTS.TYPES.SMS;
  }
  return CONSTANTS.TYPES.NEW_TYPE;
};

exports.getPayload = (type) => {
  const title = TEXT_CONSTANTS.TITLES[type];
  const message = TEXT_CONSTANTS.MESSAGES[type];
  return title && message ? { title, message } : null;
};

exports.getCourse = (i) => {
  if (i % 3 === 1) {
    return CONSTANTS.COURSE_TYPES.FRONT_END;
  }
  if (i % 3 === 0) {
    return CONSTANTS.COURSE_TYPES.BACK_END;
  }
  return CONSTANTS.COURSE_TYPES.DEV_OPS;
};

exports.getTimeSend = (i) =>
  i % 2 === 0
    ? new Date().getTime() + 10 * 1000
    : new Date().getTime() + 20 * 1000;

exports.showLogForSendNotification = ({ timeSend, type }) => {
  if (process.env.NODE_ENV === 'development') {
    const date = new Date();
    const dateSend = new Date(timeSend);

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();

    const secondsSend = dateSend.getSeconds();
    const minutesSend = dateSend.getMinutes();
    const hourSend = dateSend.getHours();
    console.log(
      `current time: ${hour}:${minutes}:${seconds}, time send: ${hourSend}:${minutesSend}:${secondsSend}, notification type: ${type}`
    );
  }
};
