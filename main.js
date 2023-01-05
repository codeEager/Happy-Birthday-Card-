var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function newImage() {
    fabric.Image.fromURL("A-Day.gif", function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(225);
        block_image_object.scaleToHeight(225);
        block_image_object.set({ top:0, left:0 });

        canvas.add(block_image_object);
    });
    fabric.Image.fromURL("D-Day.gif", function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(225);
        block_image_object.scaleToHeight(225);
        block_image_object.set({ top:0, left:225});

        canvas.add(block_image_object);
    });
    fabric.Image.fromURL("C-Day.gif", function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(225);
        block_image_object.scaleToHeight(225);
        block_image_object.set({ top:225, left:0 });

        canvas.add(block_image_object);
    });
    fabric.Image.fromURL("B-Day.gif", function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(225);
        block_image_object.scaleToHeight(225);
        block_image_object.set({ top:225, left:225 });

        canvas.add(block_image_object);
    });
}

function playSound () {
    x.play();
};
