var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
console.log(colors);

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
console.log(reindeer);

var hohohoElement = document.getElementById("reindeer");

var coloredReindeer =[];

for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < reindeer.length; j++) {
        coloredReindeer.push(colors[i] + reindeer[j]);
    }
    // *** WHY PUSH?
    // *** is the var coloredReindeer above [] left empty because ______???
    /* originally tried just to see what happens:
    var coloredReindeer = colors.concat("reindeer");
    console.log(coloredReindeer); 
    it printed the colors 13 times, reindeer once. */
    hohohoElement.innerHTML += coloredReindeer;
}