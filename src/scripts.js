
var string = "latest articles:"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("word").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',100); /* change 70 for speed */

}
frameLooper();