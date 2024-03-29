yy = typeof yy != 'undefined' ? yy : {}

yy.css = (function() {
  let settings = {

  }

  let CSSRules      = ``
  let CSSIdentifier = `yy.css.rules`
  let based64       = {}

  let initialise = function() {
    // Load base64
    Object.keys(yy.base64).forEach(key => {
      based64[key] = yy.base64[key]
    })

    cssRules = `
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');

body {
  background-image: url('background.png');
  background-size : cover;
}

#yy_linkContainer {
  position       : absolute;
  width          : 43ch;
}

.yy_linkItem {
  display        : flex;
  position       : relative;
  color          : rgba(  24,  24,  24, 1.00 );
  background     : rgba( 251, 251, 251, 0.08 );
  border-radius  : 7px;
  cursor         : pointer;
  transition     : all 140ms;
  margin         : 3px;
}
.yy_linkItem:hover {
  color          : rgba(   1,   1,   1, 1.00 );
  background     : rgba( 255, 255, 255, 0.23 );
}
.yy_linkItemContent {
  position       : relative;
  font-family    : "Mulish", sans-serif;
  font-size      : 16pt;
  padding        : 1.1ch;
}
.yy_linkItemBackdrop {
  position       : absolute;
  left           : 0%;
  top            : 0%;
  width          : 100%;
  height         : 100%;
  min-height     : 100%;
  background     : rgba( 251, 251, 251, 0.11 );
  backdrop-filter: blur(6px);
  border-radius  : 7px;
}
.yy_linkItem:hover .yy_linkItemBackdrop {
  backdrop-filter: blur(5px);
}

#yy_linkFilter {
  width          : 100%;
  background     : none;
  border         : none;
  outline        : none;
  border         : 1px solid rgba( 24,  24,  24, 1.00);
  border-radius  : 4px;
  font-family    : "Mulish", sans-serif;
  font-size      : 13pt;
  padding        : 0.6ch;
}

.center {
  left     : 50%;
  top      : 50%;
  transform: translate( -50%, -50% );
}

/* Icons */
.yy_linkItemIcon {
  position         : absolute;
  left             : calc(100% - 3.5vh);
  top              : 0%;
  width            : 2.4vh;
  height           : 100%;
  background-size  : contain;
  background-repeat: no-repeat;
  background-position: center;
  transition       : all 230ms;
}
#yy_linkItemIcon_dexcom {
  background-image: url(${based64['dexcom']});
  filter: contrast(1.7);
}
.yy_linkItem:hover #yy_linkItemIcon_dexcom {
  filter: contrast(2.7);
}
#yy_linkItemIcon_laverty {
  background-image: url(${based64['laverty']});
  filter: contrast(0.3);
}
.yy_linkItem:hover #yy_linkItemIcon_laverty {
  filter: contrast(0.69);
}
#yy_linkItemIcon_douglas-hanly-moir {
  background-image: url(${based64['douglas-hanly-moir']});
  filter: contrast(0.77);
}
.yy_linkItem:hover #yy_linkItemIcon_douglas-hanly-moir {
  filter: contrast(1.69);
}
#yy_linkItemIcon_4cyte {
  background-image: url(${based64['4cyte']});
  filter: contrast(0.3);
}
.yy_linkItem:hover #yy_linkItemIcon_4cyte {
  filter: contrast(0.69);
}
#yy_linkItemIcon_prp-imaging {
  background-image: url(${based64['prp-imaging']});
  filter: contrast(0.87);
}
.yy_linkItem:hover #yy_linkItemIcon_prp-imaging {
  filter: contrast(1.69);
}
#yy_linkItemIcon_hunter-imaging-group {
  left             : calc(100% - 3.8vh);
  width            : 3vh;
  background-image: url(${based64['hunter-imaging-group']});
  filter: contrast(1.87);
}
.yy_linkItem:hover #yy_linkItemIcon_hunter-imaging-group {
  filter: contrast(3.69);
}
#yy_linkItemIcon_clarity-imaging {
  background-image: url(${based64['clarity-imaging']});
  filter: contrast(0.87);
}
.yy_linkItem:hover #yy_linkItemIcon_clarity-imaging {
  filter: contrast(1.69);
}
  `
    // Manage CSS
    document.querySelector(`.${CSSIdentifier}`)?.remove()
    addCSS(cssRules)
  }

  // helper functions
  let addCSS = function(rule, container, ruleIdentifier) {
    let rc = ruleIdentifier ? ruleIdentifier : CSSIdentifier
    let output = '<div class="' + rc + '" style="display:none;">&shy;<style>' + rule + '</style></div>'
    document.querySelectorAll(rc).forEach(e => e.remove())
    if (container) {
      document.querySelector(container).insertAdjacentHTML('beforeend', output)
    } else {
      document.body.insertAdjacentHTML('beforeend', output)
    }
  }


  return {
    init : initialise,
  }
})()
