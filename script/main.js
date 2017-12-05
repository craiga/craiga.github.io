function rotateForEver($elem, rotator) {
  if (rotator === void(0)) {
    rotator = $({deg: 0});
  } else {
    rotator.get(0).deg = 0;
  }

  return rotator.animate(
    {deg: 360},
    {
      duration: 45 / 60 * 1000,
      easing: 'linear',
      step: function(now){
        $elem.css({transform: 'rotate(' + now + 'deg)'});
      },
      complete: function(){
        rotateForEver($elem, rotator);
      },
    }
  );
}

var kkeys = [], konami = "38,38,40,40,37,39,37,39";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ) {
    $(document).unbind('keydown',arguments.callee);
    rotateForEver($('.konami-rotate'))
  }
});
