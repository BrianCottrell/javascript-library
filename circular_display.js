/* Circular Display   */
/* by Brian Cottrell  */
/* 01-11-2015         */

//Display a ring of elements
function displayElements(num, elementClass, container){
    var elements    = [],               //Initialize an array of elements
        radius      = 12.5-0.75*num,    //Set the size of each element
        offset      = 12.25+0.75*num;   //Indicates where to position each element
    elements.length = num;              //Pass in the number of elements to add
    //Create each element with the specified class and add to the specified container
    for(var i = 0; i < sites.length; i++){
        sites[i] = document.createElement('div');
        sites[i].classList.add(elementClass);
        sites[i].style.padding = radius+'%';
        sites[i].style.marginTop = offset*Math.sin(i*2*Math.PI/sites.length)-radius+'%';
        sites[i].style.marginLeft = offset*Math.cos(i*2*Math.PI/sites.length)+offset+'%';
        container.appendChild(sites[i]);
    }
}