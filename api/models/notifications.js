const { v4: uuidv4 } = require('uuid');
const {
  getStatus,
  getUserStatus,
  getType,
  getPayload,
  getTimeSend,
  getCourse,
} = require('../../utils/mock_data_utils');
const getNotificationsMock = () => {
  const notifications = [];
  let i = 0;
  while (i < 100) {
    const type = getType(i);
    notifications.push({
      id: uuidv4(),
      userId: i,
      status: getStatus(i),
      userStatus: getUserStatus(i),
      type,
      contacts: { phoneNumber: '+38389634223', email: 'example@example.com' },
      timeSend: getTimeSend(i),
      payload: getPayload(type),
      course: getCourse(i),
    });
    i++;
  }

  return notifications;
};

module.exports = {
  findAll: () =>
    new Promise((resolve, reject) => {
      resolve(getNotificationsMock());
    }),
  update: (id) =>
    new Promise((resolve, reject) => {
      resolve({ sucsses: true });
    }),
  insertMany: (notifications) => {},
};
