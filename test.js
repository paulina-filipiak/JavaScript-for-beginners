function getAverage (a,b){
    var average = (a + b) / 2;
    console.log(average);
    return average;
}

var myResult = getAverage(5,8);

function logResult(){
    console.log("the average is " + myResult);
}

logResult();