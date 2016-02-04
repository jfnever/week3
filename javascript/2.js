/**
 * Created by apple on 16/2/4.
 */
Skip to content
This repository
Search
Pull requests
Issues
Gist
@jfnever
Watch 1
Star 0
Fork 0 devaraje/week3
Code  Issues 0  Pull requests 0  Wiki  Pulse  Graphs
Branch: gh-pages Find file Copy pathweek3/javascript/arrays.js
ff1e157  6 hours ago
@devaraje devaraje add space
1 contributor
RawBlameHistory     97 lines (73 sloc)  2.73 KB
//create an array
var colorList = ["Red", "Black", "White", "Blue", "Green", "Pink"];

//variables IN functions (function scope) can see global variables


var imageList = new Array();

imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
imageList[5] = "images/drawing/thumbs/artwork_6.jpg";
imageList[6] = "images/drawing/thumbs/artwork_1.jpg";
imageList[7] = "images/drawing/thumbs/artwork_2.jpg";
imageList[8] = "images/drawing/thumbs/artwork_3.jpg";
imageList[9] = "images/drawing/thumbs/artwork_4.jpg";
imageList[10] = "images/drawing/thumbs/artwork_5.jpg";
imageList[11] = "images/drawing/thumbs/artwork_6.jpg";
imageList[12] = "images/drawing/thumbs/artwork_1.jpg";
imageList[13] = "images/drawing/thumbs/artwork_2.jpg";
imageList[14] = "images/drawing/thumbs/artwork_3.jpg";
imageList[15] = "images/drawing/thumbs/artwork_4.jpg";
imageList[16] = "images/drawing/thumbs/artwork_5.jpg";
imageList[17] = "images/drawing/thumbs/artwork_6.jpg";

var imageListB = new Array();

for (var b = 0; b < 8; b++)
{
    imageListB[b] = "images/oil/thumbs/artwork_" + (b+1) +".jpg";
}

var imageListC = new Array();

for (var c = 0; c < 10; c++)
{
    imageListC[c] = "images/watercolor/thumbs/artwork_" + (c+1) +".jpg";
}


//create the build Thumbnail function
function buildThumbnails()
{
    //hook onto the thumbs div
    var thumbsDiv = document.getElementById("drawing");

    //create an output variable
    var output = "";

    //first part:counter
    //second part: condition
    //third part: incrementor
    for (var i = 0; i < imageList.length; i++)
    {
        output += '<img src="' + imageList[i] + '" />';  //concatenator assignment operator
    }

    thumbsDiv.innerHTML = output;

    output = "";

    var oilsDiv = document.getElementById("oil");

    for (var j = 0; j < imageListB.length; j++)
    {
        output += '<img src="' + imageList[j] + '"/>';
    }

    oilsDiv.innerHTML = output;

    output = "";

    var watercolorsDiv = document.getElementById("watercolor");

    for (var k = 0; k <imageListC.length; k++)
    {
        output += '<img src="' + imageListC[k] + '"/>';
    }

    watercolorsDiv.innerHTML = output;

    /*//thumbsDiv.innerHTML = "<p>Hi There!</p>";
     thumbsDiv.innerHTML = '<img src="' + imageList[0] + '" />'
     + '<img src="' + imageList[1] + '" />'
     + '<img src="' + imageList[2] + '" />'
     + '<img src="' + imageList[3] + '" />'
     + '<img src="' + imageList[4] + '" />'
     + '<img src="' + imageList[5] + '" />';*/
}

window.onload = function()
{
    buildThumbnails(); //use or "fire off" this function or invoke

};
