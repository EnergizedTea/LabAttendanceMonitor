function draw() {
//drawing time!
    const canvas = document.getElementById("myCanvas");
    // we get our canvas...
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        // so to be able to clarify the context in which we will be drawing (2d)
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 50, 50);
        ctx.fillStyle = "rgb(200,0,220)";
        ctx.fillRect(10, 1, 1, 50);
        ctx.fillStyle = "rgb(20,100,0)";
        ctx.fillRect(1, 50, 10, 10);
        // ok so  (controls where on the left to start), (where to start on the top), (controls where on the right to stop), (where to start on the bottom)
        // aka x,-x,y,-y, ergo...
        ctx.fillStyle = "rgb(0,0,255)";
        ctx.fillRect(5, 95, 120, 20);
        // mmm.. but its only making rec- a of course, rect = rectangle so then
        ctx.fillStyle = "rgb(255,255,0)";
        // ctx.drawLine(5, 95, 120, 20);
        // ctxstroke(); doesnt work
        ctx.beginPath();// we declare we'll make a path (aka a line)
        ctx.moveTo(5, 115); // here lays the starting point
        ctx.lineTo(125, 40); // here we have the end point
        ctx.stroke(); // aaaand go!
    }
    else{
        // canvas-unsupported code here
        alert("Your browser does not support canvases");
    }
}
draw();