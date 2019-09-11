const _ = module.exports = {}

_.drop = function (a,b) {
  var arr = []
  if (b && b!=0) {
    for (var i=b; i<=a.length; i++) {
        arr.unshift(a.pop())
    }
    return arr
  }if (b==0) {
      arr = a
      return arr
  }else {
      for (var i=1;i<=a.length; i++) {
          arr.unshift(a.pop())
      }
      return arr
  }
}

_.compact = function (a) {
  var arr = []
  for (var i=0;i<a.length;i++) {
    if (a[i]) {
      arr.push(a[i])
    }
  }
  return arr
}

_.head = function (a) {
  var first = a.shift()
  return first
}