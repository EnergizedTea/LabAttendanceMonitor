function draw() {
//drawing time!
    const canvas = document.getElementById("myCanvas");
    // we get our canvas...
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        // so to be able to clarify the context in which we will be drawing (2d)
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 50, 50);
    }
    else{
        // canvas-unsupported code here
        alert("Your browser does not support canvases");
    }
}
draw();