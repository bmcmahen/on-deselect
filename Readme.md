
# on-deselect

  emit an event when a selection is deselected. pairs with yields/on-select

## Installation

  Install with [component(1)](http://component.io) or NPM:

    $ component install bmcmahen/on-deselect
    $ npm install on-deselect

## Usage

```javascript
var select = require('on-select');
var deselect = require('on-deselect');
select(el, function(e){
  console.log('on select');
  deselect(el, function(e){
    console.log('on deselect');
  }); 
});
```



## License

  MIT
