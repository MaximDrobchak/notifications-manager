exports.sendSms = (notification) =>
  new Promise((resolve, reject) => {
    // integrate with an sms provider
    setTimeout(resolve, 1000, {
      success: true,
      notification,
    });
  });
