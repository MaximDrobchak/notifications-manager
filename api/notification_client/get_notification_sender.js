const { sendEmail } = require('../controllers/email');
const { sendSms } = require('../controllers/sms');
const { subscribe } = require('../controllers/subscribe');
const CONSTANTS = require('../../constants/constants');

const newTypeNotification = () => {
  // throw exaption forthrow an exception to simulate a poorly implemented send type
  throw new Error("Oops new type isn't valid");
};
exports.getNotificationsSender = (type) => {
  switch (type) {
    case CONSTANTS.TYPES.MAIL:
      return sendEmail;
    case CONSTANTS.TYPES.SMS:
      return sendSms;
    case CONSTANTS.TYPES.WEB:
      return subscribe;
    case CONSTANTS.TYPES.NEW_TYPE:
      return newTypeNotification;
    default:
      return () => {
        throw new Error('Unknown type of communication.');
      };
  }
};
