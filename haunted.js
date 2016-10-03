document.onmousemove = function(e){
  //get your haunted element however you want here
  var hauntedElement = document.getElementById('hopefully_some_id');
  var hauntedElementXCenter = hauntedElement.offsetLeft + hauntedElement.offsetWidth/2;
  var hauntedElementYCenter = hauntedElement.offsetTop + hauntedElement.offsetHeight/2;

  hauntedElement.style.zIndex = 999;

  var calculateNewPositionOffset = function(mouseX, mouseY, elementXCenter, elementYCenter, elementWidth, elementHeight) {
    var newXOffset, newYOffset;

    if(mouseX > elementXCenter) {
      if(elementXCenter - elementWidth/2 > 0) {
        newXOffset = -elementWidth/2;
      } else {
        newXOffset = elementWidth/2;
      }
    } else if (mouseX < elementXCenter) {
      if(elementXCenter+elementWidth/2 < window.innerWidth) {
        newXOffset = elementWidth/2;
      } else {
        newXOffset = -elementWidth/2;
      }
    }

    if(mouseY > elementYCenter) {
      if(elementYCenter - elementHeight/2 > 0) {
        newYOffset = -elementHeight/2;
      } else {
        newYOffset = elementHeight/2;
      }
    } else if (mouseY < elementYCenter) {
      if(elementYCenter + elementHeight/2 < window.innerHeight) {
        newYOffset = elementHeight/2;
      } else {
        newYOffset = -elementHeight/2;
      }
    }

    return {
      'xOffset': newXOffset,
      'yOffset': newYOffset
    };
  };

  if(Math.abs(e.x - hauntedElementXCenter) < hauntedElement.offsetWidth/2 && Math.abs(e.y - hauntedElementYCenter) < hauntedElement.offsetHeight/2) {
    hauntedElement.style.position = 'absolute';
    var position = calculateNewPositionOffset(e.x, e.y, hauntedElementXCenter, hauntedElementYCenter, hauntedElement.offsetWidth, hauntedElement.offsetHeight);
    hauntedElement.style.left = hauntedElement.offsetLeft + position.xOffset + 'px';
    hauntedElement.style.top = hauntedElement.offsetTop + position.yOffset + 'px';
  }
};