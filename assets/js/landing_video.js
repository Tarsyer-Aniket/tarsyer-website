    // Get the image element
    var image = document.getElementById('image');

    // Check if the device is a mobile or desktop
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
      // If the device is a mobile, show the mobile image
      image.src = 'https://res.cloudinary.com/dt224xdxl/video/upload/v1672685385/tarsyer-web/img/LANDING_VIDEO_MOBILE_pc9wvg.mp4';
    } else {
      // If the device is a desktop, show the desktop image
      // image.src = 'https://res.cloudinary.com/dt224xdxl/video/upload/v1672685392/tarsyer-web/img/LANDING_VIDEO_3_rdyspa.mp4';
      image.src = "https://res.cloudinary.com/dt224xdxl/video/upload/v1674048889/tarsyer-web/img/output_video_e3k637.mp4";
    }
