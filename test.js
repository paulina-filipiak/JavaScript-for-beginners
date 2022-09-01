var myString = "Hello there ninja!";

if (myString.indexOf("ninja") === -1) {
    console.log("The word ninja is not in the string");
}
else{
    console.log("the word ninja starts at position " + myString.indexOf("ninja"));
}