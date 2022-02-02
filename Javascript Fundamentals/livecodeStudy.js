
function isMobile() {
    if (typeof navigator === 'undefined') {
      return false;
    }
    if (/ipad|silk/i.test(navigator.userAgent)) {
      return false;
    } else if (/mobi|phone/i.test(navigator.userAgent)) {
      return true;
    }
    return false;
  }

  function isChrome66() {
    if (typeof navigator === 'undefined') {
      return false;
    }
    const userAgent = navigator.userAgent;
    const browserCheck = userAgent.match(/chrome/i);
    if (browserCheck != null && browserCheck[0].toLowerCase() === 'chrome') {
      const verIndex = browserCheck.index;
      const ver = userAgent.substring(verIndex + 7, verIndex + 9);
      if (!isNaN(ver) && ver >= 66) {
        return true;
      }
    }
    return false;
  }




// Checking Types 