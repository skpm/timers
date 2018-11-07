/* globals coscript, sketch */
var fibers = []

var setInterval = function (func, delay, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  // fibers takes care of keeping coscript around
  var id = fibers.length
  fibers.push(coscript.scheduleWithRepeatingInterval_jsFunction(
    (delay || 0) / 1000,
    function () {
      func(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
    }
  ))
  return id
}

var clearInterval = function (id) {
  var interval = fibers[id]
  if (interval) {
    interval.cancel() // fibers takes care of keeping coscript around
    fibers[id] = undefined // garbage collect the fiber
  }
}

module.exports = {
  setInterval: setInterval,
  clearInterval: clearInterval
}
