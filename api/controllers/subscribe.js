exports.subscribe = (notification) =>
  new Promise((resolve, reject) => {
    // integrate with webPush
    setTimeout(resolve, 1000, {
      success: true,
      notification,
    });
  });
