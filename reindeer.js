var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
console.log(colors);

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
console.log(reindeer);

var hohohoElement = document.getElementById("reindeer");

for (let i = 0; i < colors.length; i++) {
    var coloredReindeer = colors.concat("reindeer");
    console.log(coloredReindeer);
    // this prints the colors 13 times, reindeer once
}