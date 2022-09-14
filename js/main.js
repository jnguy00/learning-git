/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

var date = new Date();

var weekday = {weekday: 'long'};
var time = {hour: 'numeric', minute: 'numeric', second: 'numeric'};

var day = date.toLocaleDateString("en-US", weekday);
var currentTime = date.toLocaleString("en-US", time);


document.getElementById("answer1").innerHTML = "Today is " + day + "." + "</br>" + "Current Time : " + currentTime;

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.-------- */
var day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);
var month = new Intl.DateTimeFormat('en', {month: '2-digit'}).format(date);
var year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);

var dates = `${month}-${day}-${year}<br />${month}/${day}/${year}<br />${day}/${month}/${year}`; //code w/in backtick (`) + dollar sign ($) before variables makes the variable a string ; you don't have to concatenate diff data types to make everything into a string

//<br /> allows code to validate, is a non-closing tag

//alt:
//const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit'})' --> formats the array
//const [{value: month},,{value: day},,{value: year}] = dateTimeFormat.formatToParts(date); --> labels the values of the array to a variable

document.getElementById("answer2").innerHTML = dates;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.-------- */

function myFunction() {
    var markup = document.documentElement.outerHTML;
    document.getElementById("answer3").innerText = markup;
}


//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.-------- */


$(document).ready(function() { //document ready is built in jQuery //uses the function once the HTML document is loaded
    'use strict';
    console.log('main.js loaded');

    //installing Paper.js library
    paper.install(window);
    paper.setup(document.getElementById("main-canvas")); //prepares the paper.js library for this div

    //making green SVG circle using paper.js
    var c = Shape.Circle(200, 200, 50);
    c.fillColor = "green";

    // filling up the canvas w/ circles, evenly distributed
    // var c;
    // for(var x=25; x<400; x+=50){
    //     for(var y=25; y<400; y+=50){
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = "green";
    //     }
    // }

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = "black";

    var text = new PointText(200, 200);
    text.justification = "center";
    text.fillColor = "white";
    text.fontSize = 20;
    text.content = "hello world";

    var tool = new Tool();

    tool.onMouseDown = function(event) { //an anonymous function, bc it's not named and used only once
        var c = Shape.Circle(event.point, 20);
        c.fillColor = "green";
    };

    paper.view.draw(); //the above code doesn't execute until this function is called (which is why it's written here)

   });





// adapt from Learning Javascript Ethan Brown Chapter 1
