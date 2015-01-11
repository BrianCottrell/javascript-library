/* Draw Line         */
/* by Brian Cottrell */
/* 01-11-2015        */

//Draws a straight line between two points within a containing element
function drawLine(container, point1x, point1y, point2x, point2y){
	var x1 = point1x;
	var y1 = point1y;
	var x2 = point2x;
	var y2 = point2y;
	var leftOffset;
	var rotation;
	line = document.createElement('div');
	line.classList.add('line');
	line.style.width = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))+'%'
	leftOffset = (x1-(parseFloat(line.style.width.substr(0,line.style.width.length-1))-(x2-x1))/2);	
	line.style.marginLeft = leftOffset+'%';
	line.style.marginTop = ((y1-50)+(y2-y1)/2)+'%';
	rotation = Math.atan((y2-y1)/(x2-x1));
	line.style.transform = 'rotate('+rotation+'rad)';
	line.style.mozTransform = 'rotate('+rotation+'rad)';
	line.style.webkitTransform = 'rotate('+rotation+'rad)';
	container.appendChild(line);
}