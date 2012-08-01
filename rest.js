//     Rest.js 1.0
//     Boris Huai Augmentum
//     A utility lib of common function, which is supplementary to jQuery and underscorejs

(function(window, document) {
  var rest = {};
  
  //load a javascript file into current file.
  rest.loadScript = function(sURL) {
    var dScript = document.createElement('script');
    dScript.type = 'text/javascript';
    dScript.src = sURL;
    document.body.appendChild(dScript);
  };
  
  //load inline script into current file.
  rest.loadScriptString = function(sCode) {
    var dScript = document.createElement('script');
    dScript.type = 'text/javascript';
    
    try {
      dScript.appendChild(document.createTextNode(sCode));
    } catch (ex) {
      dScript.text = sCode;
    }

    document.body.appendChild(dScript);
  };
  
  //load a style file into current file
  rest.loadStyle = function(sURL) {
    var dLink = document.createElement('link');
    var dHead = document.head || document.getElementsByTagName('head')[0];
    
    dLink.rel = 'stylesheet';
    dLink.type = 'text/css';
    dLink.href = sURL;
    dHead.appendChild(dLink);
  };
  
  rest.loadStyleString = function(sCSS) {
    var dStyle = document.createElement('style');
    var dHead = document.head || document.getElementsByTagName('head')[0];
    
    dStyle.type = 'text/css';
    
    try {
      dStyle.appendChild(document.createTextNode(sCSS));
    } catch (ex) {
      dStyle.styleSheet.cssText = sCSS;
    }
    
    dHead.appendChild(dStyle);
  };
  
   //event bind handler
   rest.eventUtil = {
    'addEvent': function(dTarget, sEvent, fHandler) {
      if (dTarget.addEventListener) {
        dTarget.addEventListener(sEvent, fHandler, false);
      } else if (dTarget.attachEvent) {
        dTarget.attachEvent('on' + sEvent, fHandler);
      } else {
        dTarget['on' + sEvent] = fHandler;
      }
    },
    removeEvent: function(dTarget, sEvent, fHandler) {
      if (dTarget.removeEventListener) {
        dTarget.addEventListener(sEvent, fHandler, false);
      } else if (dTarget.attachEvent) {
        dTarget.detachEvent('on' + sEvent, fHandler);
      } else {
        dTarget['on' + sEvent] = null;
      }
    }
  };
 

  
  window.rest = rest;
})(window, document);