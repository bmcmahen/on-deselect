var event = require('event');
var raf = require('raf');
var caf = raf.cancel;
var selected = require('bmcmahen/text-selection');
var mod = require('bmcmahen/modifier');

var selection = window.getSelection();
var isBound;

module.exports = function(el, fn){
  if (isBound) return;
  event.bind(el, 'mouseup', callback);
  event.bind(el, 'keyup', callback);

  var id;
  function callback(e){
    if (mod(e)) return;
    id = raf(function(){
      if (!selected()) {
        unbind();
        isBound = false;
        fn(e);
      }
      caf(id);
    });
  }

  function unbind(){
    event.unbind(el, 'mouseup', callback);
    event.unbind(el, 'keyup', callback);
  }

};