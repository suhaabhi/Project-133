status = "";
objects = [];
img = "";

function preload()
{
    img = loadImage('kitchen.jpg');
}

function setup()
{
    canvas = createCanvas(450,450);
    canvas.center;

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementsById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function gotResults()
{
    if(error)
    {
        console.log("error");
    }
    console.log('results');
    objects = results;
}

function draw()
{
    image(video, 0, 0, 450, 450);
    if (status != true);
    {
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;

            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
            text(objects[i].label + "" + percent + "%" , objects[i].x + 15, objects[i].y + 15);
        }
    }
}