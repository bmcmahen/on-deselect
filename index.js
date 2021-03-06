var event, raf, mod;

try {
  event = require('component-event');
  raf = require('component-raf');
  mod = require('bmcmahen-modifier');
} catch(err) {
  event = require('event');
  raf = require('raf');
  mod = require('modifier');
}

/**
 * Deselection listener
 *
 * @param  {Element}   el
 * @param  {Function} fn callback
 * @return {Function}      unbind events
 */

module.exports = function(el, fn){
  event.bind(window, 'mouseup', callback);
  event.bind(window, 'touchend', callback);
  event.bind(el, 'keyup', callback);
  event.bind(el, 'blur', callback);

  function callback(e){
    if (mod(e)) return;
    var id = raf(function(){
      if (!window.getSelection().toString()) fn(e);
      raf.cancel(id);
    });
  }

  return function unbind(){
    event.unbind(window, 'mouseup', callback);
    event.unbind(window, 'touchend', callback);
    event.unbind(el, 'keyup', callback);
    event.unbind(el, 'blur', callback);
  };

};
