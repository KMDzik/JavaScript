/* var size = 165;

if ( size < 165 && size > 175 || size === 165) {
    document.write("This dress will not match");
}
else  {

    document.write("Perfecto!");
}
*/



 /* var age = 5;

while (age < 10) {

    console.log("      You are over 12!");
    age++;
}
    document.write("      your age is less than 12"); 
    */
 

/* var links = document.getElementsByTagName("a");

for ( i = 1; i <= links.length; i++) {
    console.log("this is link number" + i);
}

document.write("all links now looped"); */

 /* function getAverage (a,b) {

 var average = (a + b) / 2;
 console.log(average);
return average;
 }

 var myResult = getAverage (7,7)
 console.log("the average is " + myResult ); */


 /* for (i = 0; i < 20; i ++) {

    if (i === 5 || i === 11 || i === 13 || i === 14) {
        
        continue;
    }
    if (i === 16){

        break;
    }

   

 }

 console.log("This is the end");
*/

/* var a = "5";
var b = 6;

console.log(typeof (a+b));

console.log(a - b);

console.log(Math.round(7.6)); */


Object 

 /* var myHouse = new Object();

var myHouse
    myHouse.door = 25;
    myHouse.windows = 4;
    myHouse.roof = "welcome!"
    myHouse.phone = function() {console.log("Call me today!");
};


console.log(myHouse.phone()); */

var myCar = new Object();

var myCar = {
    speed: 250,
    way: function(speed, time){
    console.log(speed * time);
}
};

 console.log(myCar.speed); myCar.way(250,3);