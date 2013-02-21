(function( $ ){
  
  $.setInterval = function(del, time, breakCondition, stopNotifier) {
    (function animloop(){
      
      if(breakCondition !== undefined && breakCondition())
      {
        if(stopNotifier !== undefined)
          stopNotifier();
        return;
      }
      
      setTimeout(function() {
        requestAnimFrame(animloop);
        del();
      },time);
    })();
  };
  
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function( callback ){
              window.setTimeout(callback, 1000 );
            };
  })();
})( jQuery );