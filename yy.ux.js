yy = typeof yy != 'undefined' ? yy : {}

yy.ux = (function() {

  let initialise = function() {

  }

  let render = function() {
    let data = yy.data
    let dseq = yy.dseq
    let s = ``
   
    let m = Object.values(data)

    m.sort(chainsort([
      sort_by(function(a,b) { console.log(a); return dseq.indexOf(a.key) > dseq.indexOf(b.key) }, false, null),
    ]))
    console.log(m)

    let t  = `<div class="yy_linkItem" onclick="_ONCLICK">`
        t += `<div class="yy_linkItemBackdrop"></div>`
        t += `<div class="yy_linkItemIcon" id="yy_linkItemIcon__ICON"></div>`
        t += `<div class="yy_linkItemContent">_CONTENT</div>`
        t += `</div>`
    m.forEach(item => {
      s += t
           .replace('_ONCLICK', `window.open('${item.link}','_blank')`)
           .replace('_CONTENT', item.display) 
           .replace('_ICON', item.key)
    })

    // s = `<input id="yy_linkFilter" placeholder="filter here"></input><br/>` + s
    s = `<div id="yy_linkContainer" class="center">` + s + `</div>`

    document.body.insertAdjacentHTML('beforeend', s)
  }

  /* Special sorting functions */
  let chainsort = function(arr) {
    return function(a, b) {
      for (var i = 0; i < arr.length; i++) {
        var r = arr[i](a, b)
        if (r != 0) { return r }
      }
      return 0
    }
  }
  let sort_by = function(field, reverse, primer) {
    var key = primer ? function(x) { return primer(x[field]) } : function(x) { return x[field] }
    reverse = [-1, 1][+!!reverse]
    return function(a, b) {
      a = key(a)
      b = key(b)
      return a == b ? 0 : reverse * ((a > b) - (b > a))
    }
  }

  return {
    render: render,
  }
})()