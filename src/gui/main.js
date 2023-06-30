/**
  Yeah this GUI is skidded from arjhan, so are all the other ones.
*/



/**
  This function is what allows you to drag the panel around the screen.
  Not even gonna bother explaining this because its boring and i don't feel like it.
*/
window.dragElement=e=>{var n=0,t=0,o=0,u=0;function d(e){(e=e||window.event).preventDefault(),o=e.clientX,u=e.clientY,document.onmouseup=m,document.onmousemove=l}function l(d){(d=d||window.event).preventDefault(),n=o-d.clientX,t=u-d.clientY,o=d.clientX,u=d.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function m(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=d:e.onmousedown=d};

var UI = document.createElement("div"); // create the panel

/**
  add buttons and everything
*/
UI.innerHTML='<div id="overloadPanel" style="width:300px; left: 1px; top: 1px; background-color: #282828; color: white; outline: white solid 1px; position:absolute; z-index: 99999;">
    <h1 style="font-size: 32px;">iReady hack</h1><br><br><br>
    <h2 style="font-size: 25px; font-style: normal !important; color: white !important;">Question Skipper</h2><button id="skip" ">Skip current question</button><br><br>
    <hr>This tool was created by <a href="#">you</a>.<br><br>
</div>';


dragElement(UI.firstElementChild); //make the element draggable
document.body.appendChild(UI); //add it to the page
document.getElementById("skip").addEventListener("click", skip); //button bypass
