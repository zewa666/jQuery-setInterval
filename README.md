jQuery setInterval
=======================

jQuery setInterval is an implementation of setInterval using requestAnimFrame to render Frame based animations.
Moreover this implementation includes as well an optional breakCondition, which is implemented as passed callback and a
stopNotification, which gets triggered if the breakCondition returns true.

Besides the frame based animation, another feature is that requestAnimFrame will also stop rendering as soon as the Browser tab has
been switched.
See Paul Irish' great article about it [here](http://paulirish.com/2011/requestanimationframe-for-smart-animating/).

Usage
-----

$.setInterval(callback_for_action, interval, callback_for_break_condition, callback_for_stop_notification );

Inspect the projects index.html file to see an example setup.

Note: To verify the pause while not active simply open another page in parallel and switch to the other tab
      while the counting is in progress, then switch back to.

```js
  // Initialize setInterval
  $.setInterval(function(){
    // DO YOUR MAGIC HERE ...
  }, 500, function() {
    return ("SOME CONDITION") ? true : false;
  }, function() {
    // DO STUFF HERE WHEN INTERVAL HAS STOPPED
  });
```


