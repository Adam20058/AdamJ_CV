document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#fff',
    lineColor: '#ffd5cd',
    directionX: 'right',
    directionY: 'up',
    density: 8900,
    particleRadius: 0,
    proximity: 200,
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


