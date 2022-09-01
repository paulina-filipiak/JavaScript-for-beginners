var myArray = new Array()

myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Paulina"
myCar.drive = function(){console.log("now driving");};
myCar.drive();

console.log(myCar.driver);


var myCar2 = {
    maxSpeed: 70, 
    driver: "Hela", 
    drive: function(){console.log("driving again");}};

console.log(myCar2.maxSpeed);