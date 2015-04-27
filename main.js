var element = document.querySelector("#greeting");
element.innerText = "by SilverWolf";

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


 context.rect(0, 0, canvas.width, canvas.height);

      // create radial gradient
      var grd = context.createRadialGradient(238, 50, 10, 238, 50, 300);
      // light blue
      grd.addColorStop(0, '#333333');
      // dark blue
      grd.addColorStop(1, '#666666');

      context.fillStyle = grd;
      context.fill();
      

// do cool things with the context
context.font = '40pt Calibri';
context.fillStyle = 'yellow';
context.fillText('Pong', 250, 200);


      

context.beginPath();
      context.moveTo(568, 150);
      context.lineTo(568, 250);
      context.lineWidth = 10;

      //set line color
      context.strokeStyle = '#0000ff';
      context.stroke();
      
      
      context.beginPath();
      context.moveTo(10, 150);
      context.lineTo(10, 250);
      context.lineWidth = 10;

      // set line color
      context.strokeStyle = '#ff0000';
      context.stroke();
      
      
      var centerX = canvas.width / 1.9;
      var centerY = canvas.height / 1.5;
      var radius = 10;
      
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = '#003300';
      context.stroke();
      
      
