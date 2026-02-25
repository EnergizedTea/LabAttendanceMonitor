function draw() {
//drawing time!
    const canvas = document.getElementById("myCanvas");
    // we get our canvas...
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        ctx.moveTo(20, 125);
        ctx.lineTo(130, 20);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
    else{
        // canvas-unsupported code here
        alert("Your browser does not support canvases");
    }
}
draw();