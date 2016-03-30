//change the <p> tag
function bold(){
	document.getElementById("games").innerHTML = "Awesome games you should play!";
}

function foo() {
	 i = 10
	 document.write(i)
}
//document.getElementsByTagName('li').style.color = 'white'; // doesn't work I don't know why

document.getElementById('games').style.color = 'navy'; //Works

var myFoo = function() {
	alert("Hello World!");
}

//myFoo();
document.write(typeof "John"); //string
document.write("<br />");
document.write(typeof 100.0); //number
document.write("<br />");
document.write(typeof false); //boolean
document.write("<br />");
document.write(typeof foo); //fuction
document.write("<br />");
document.write(typeof myFoo); //function
document.write("<br />");
document.write(typeof [1, 2, 3, 4]); //the type of arrays in object in JS
document.write("<br />");
document.write(typeof {key: value});
document.write("<br />");
document.write({showName: "Orphan Black", year: "2013");
document.write("<br />");
