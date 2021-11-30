canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
mouseEvent="empty";
var Last_Posititon_x;
var Last_Posititon_y;
canvas.addEventListener("mousedown", my_mousedown);
function  my_mousedown(e){
    mouseEvent="mousedown";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseup", my_mouseup);
function  my_mouseup(e){
    mouseEvent="mouseup";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseleave", my_mouseleave);
function  my_mouseleave(e){
    mouseEvent="mouseleave";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove", my_mousemove);
function  my_mousemove(e){
   current_position_of_x= e.clientX - canvas.offsetLeft;
   current_position_of_y= e.clientY - canvas.offsetTop;
   if(mouseEvent=="mousedown"){
       console.log("mousemove")
       ctx.beginPath();
       ctx.strokeStyle="blue";
       ctx.lineWidth=3;
       ctx.moveTo(Last_Posititon_x,Last_Posititon_y);
       ctx.lineTo(current_position_of_x,current_position_of_y);
       console.log(current_position_of_x)
       ctx.stroke();
   }
Last_Posititon_x=current_position_of_x;
Last_Posititon_x=current_position_of_y;
}