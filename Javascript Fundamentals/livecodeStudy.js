
let userAgent=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)
 Chrome/98.0.4758.102 Safari/537.36`
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


function isChrome77 (userAgent) {



}

isChrome77 (userAgent)
// Checking Types 