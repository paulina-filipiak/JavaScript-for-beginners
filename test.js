var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time) ;
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Bartek");
var myCar2 = new Car(60, "Paweł");
var myCar3 = new Car(90, "Krzysiek");
var myCar4 = new Car(20, "lalala");

myCar.drive(30,5);

myCar4.logDriver();


