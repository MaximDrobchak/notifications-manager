const NOTIFICATIONS_EXCLUSION = [
  {
    course: 'FRONT_END',
    type: 'SMS'
  }
];

exports.isToggleNotification = ({ course, type }) =>
   !NOTIFICATIONS_EXCLUSION.some(exclusion => exclusion.course === course && exclusion.type === type);