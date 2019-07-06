 function navigate(lat, lng) 
    if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1) || (navigator.platform.indexOf("iPad") != -1)) {
      function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform))
          var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
      }
      
      var ver = iOSversion() || [0];

      if (ver[0] >= 6) {
        protocol = 'maps://';
      } else {
        protocol = 'http://';

      }
      window.location = protocol + 'maps.apple.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=';
    }
    else {
      window.open('http://maps.google.com?daddr=' + lat + ',' + lng + '&amp;ll=');
    }
  }
