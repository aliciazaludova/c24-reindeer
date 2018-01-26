var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

var coloredReindeer = [];

for (var i = 0; i < reindeer.length; i++) {  // assign reindeer.length

        coloredReindeer.push(colors[i] + reindeer[i] + `<br>`); // both are assigned i
    }
    hohohoElement.innerHTML = coloredReindeer;  

    // the `br` 


/* THE BELOW PRODUCED EACH COLOR 12 X ASSIGNED TO EACH REINDEER 

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

var coloredReindeer = [];

for (var i = 0; i < colors.length; i++) { // wrongly saying put blue in the reindeer loop 12 times
    for (var j = 0; j < reindeer.length; j++) {
        coloredReindeer.push(colors[i] + reindeer[j]);
    }
    hohohoElement.innerHTML = coloredReindeer;
}
*/

    // *** WHY PUSH?
    // *** is the var coloredReindeer above [] left empty because ______?
    // names generated are ALL POSSIBLE COMBINATIONS. however, is the goal to combine each to each just once?

/* practice stuff

var myArray = [];       // just created a shoe. new object constructed for storing
                        // brackets instantiate
                        // we can do any of an array's methods
console.log(myArray)
myArray.push("item0");
console.log(myArray);

var shoes = [];
shoes.push("gucci");
shoes.push("nike");

function addIngredients() { // nosemicolon because you're not calling it yet. there's nothing to tell it what to do.
}
function addIngredients(x){
    return x + "ice-cream";
}
var result = addIngredients("chocolate");
console.log(result)

var lengthOfResult = result.length {
console.log(lengthOfResult)
}
*/

