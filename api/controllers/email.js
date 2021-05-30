exports.sendEmail = (notification) =>
  new Promise((resolve, reject) => {
    // integrate with Nodemailer
    setTimeout(resolve, 1000, {
      success: true,
      notification,
    });
  });
