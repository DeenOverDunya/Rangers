// Create canvas variable
var canvas=new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images

fabric.Image.fromURL(get_image,function(Img)
{
block_img_object=Img;
block_img_object.scaleToWidth(block_imgwidth);
block_img_object.scaleToHeight(block_imgheight);
block_img_object.set({
top:block_y,
top:block_x
});
canvas.add(block_img_object);

}

);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		console.log("Red Ranger! Agni!");
		new_image('rr.jpg');
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		console.log("Green Ranger! Juvenile!");
		new_image('gr.png');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		console.log("Yellow Ranger! Happy!");
		new_image('yr.png');
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		console.log("Pink Ranger! Amity!");
		new_image('pr.png');
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	console.log("Blue Ranger! Aman!");
		new_image('br.png');
	}
	
}

