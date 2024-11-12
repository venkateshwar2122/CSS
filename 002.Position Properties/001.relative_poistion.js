/*
The position property specifies the type of positioning method used for an element.

There are five different position values:

static
relative
fixed
absolute
sticky

**** by default all html elements are static positioned i.e we cannot change element positions by using "top","bottom","left",
"right"

******Elements are then positioned using the " top", "bottom", "left", and "right" properties. However, these properties will not
work unless the position property(like relative,absolute,etc) is set first. They also work differently depending on the position value.

*/


/* Relative Position */

/*NOTE   When position: relative is used, top, bottom, left, and right shift the element relative to its original position
in the document flow. */

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 200px;
            height: 100px;
        }
        .con1{
            background-color: blue;
            position: relative;
            bottom: -20px;              // can only use top,bottom,left,right
        }
        .con2{
            background-color: yellow;
        }
        .con3{
            background-color: green;
            position: relative;    // RELATIVE
            right:30px;          // can only use top,bottom,left,right(WITH RELATIVE)
            bottom: 50px;         // can only use top,bottom,left,right(WITH RELATIVE)
        }
        .con4{
            background-color: red;
            position: relative;
            left:100px;
            top: 30px;
        }
    </style>
</head>
<body>
    <div class="con1"></div>
    <div class="con2"></div>
    <div class="con3"></div>
    <div class="con4"></div>
</body>

</html>
