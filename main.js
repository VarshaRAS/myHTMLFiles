var canvas;
var ctx;

function initializeCanvas(elementName)
    {
    canvas= document.getElementById(elementName);
    canvas.width=200;
    canvas.height=200;
    ctx= canvas.getContext("2d"); 
    }

function drawCircle(ctx)
{
ctx.beginPath();

ctx.arc(100,100,20,0,2*Math.PI);
 ctx.stroke();
}

initializeCanvas("varuCanvas");
drawCircle(ctx);





