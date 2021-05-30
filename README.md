
## Important to know
All files related to the task are located in the `api/notification_client` folder and in files `utils/toggle_notification.js` and `constants/constants.js`. The rest is a mock of data and server settings.

### For developers
You can add new types of notifications very easily. To do this, in the file `constants/constants.js` in the constant `TYPES` add your type of notification.
Then in the file `constants/text_constants.js` define by type `TITLES, MESSAGES` for example.

```js
exports.TYPES = {
  WEB: 'WEB',
  MAIL: 'MAIL',
  SMS: 'SMS',
  NEW_TYPE: 'NEW_TYPE',
};

```
Then in the file `constants/text_constants.js`, define message of notification and title of notification by type  for example

```js
exports.TITLES = {
  NEW_TYPE: 'new type title'
};

exports.MESSAGES = {
  NEW_TYPE: 'New type message',
};
```

And finally, add processing of your type to the getNotificationsSender function in the `api/notification_client/get_notification_sender.js ` file  for example.

```js

exports.getNotificationsSender = (type) => {
  switch (type) {
    case CONSTANTS.TYPES.MAIL:
      return sendEmail;
   case CONSTANTS.TYPES.NEW_TYPE:
      return sendNewType;
    default:
      return () => {
        throw new Error('Unknown type of communication.');
      };
  }
};

```

in the file `utils/toggle_notification.js` you can disable notifications for types and course. Add an object with two fields `type` and  `course`
for example
```js
const NOTIFICATIONS_EXCLUSION = [
  {
    course: 'FRONT_END',
    type: 'SMS'
  },
  {
    course: 'NEW_COURSE',
    type: 'NEW_TYPE'
  }
];
```