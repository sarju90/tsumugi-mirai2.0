$(document).ready(function(){

    $(window).scroll(function() {
      drawLine( $('#bx_a'),document.getElementById('path') );
      positionTheDot();
      positionCar();			
    });
  
    // init the line length
    drawLine( $('#bx_a'),document.getElementById('path') );
    positionTheDot();		
    positionCar();
  
    function positionTheDot() {
      // What percentage down the page are we? 
      var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      // Get path length
      var path = document.getElementById("path");
      var pathLen = path.getTotalLength();
      // Get the position of a point at <scrollPercentage> along the path.
      var pt = path.getPointAtLength(scrollPercentage * pathLen);
  
      var  scrollY = window.scrollY || window.pageYOffset;
      var  maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
      var  path = document.getElementById("path");
      // Calculate distance along the path the car should be for the current scroll amount
      var  pathLen = path.getTotalLength();
      var  dist = pathLen * scrollY / maxScrollY;
      var  pos = path.getPointAtLength(dist);
      // Calculate position a little ahead of the car (or behind if we are at the end), so we can calculate car angle
      if (dist + 1 <= pathLen) {
        var  posAhead = path.getPointAtLength(dist + 1);
        var  angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
      } else {
        var  posBehind = path.getPointAtLength(dist - 1);
        var  angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
      }
  
      // Position the red dot at this point
      var dot = document.getElementById("dot");		  
      dot.setAttribute("transform", "translate("+ pt.x + "," + (pt.y+5) + ")");
    };
  
    //draw the line
    function drawLine(container, line) {
      var pathLength = line.getTotalLength(),
      maxScrollTop = $(document).height() - $(window).height(),
      percentDone = $(window).scrollTop() / maxScrollTop,
      length = percentDone * pathLength;
      line.style.strokeDasharray = [ length,pathLength].join(' ');
    }
  
    function positionCar() {
      var  scrollY = window.scrollY || window.pageYOffset;
      var  maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
      var  path = document.getElementById("path");
      // Calculate distance along the path the car should be for the current scroll amount
      var  pathLen = path.getTotalLength();
      var  dist = pathLen * scrollY / maxScrollY;
      var  pos = path.getPointAtLength(dist);
      // Calculate position a little ahead of the car (or behind if we are at the end), so we can calculate car angle
      if (dist + 1 <= pathLen) {
      var  posAhead = path.getPointAtLength(dist + 1);
      var  angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
      } else {
      var  posBehind = path.getPointAtLength(dist - 1);
      var  angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
      }
      // Position the car at "pos" totated by "angle"
      var  car = document.getElementById("c");
      car.setAttribute("transform", "translate(" + (pos.x) + "," + (pos.y) + ") rotate(" + (rad2deg(angle)) + ")");
    }
  
    function rad2deg(rad) {
      return 180 * rad / Math.PI;
    }
  
  });