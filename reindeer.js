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
    hohohoElement.innerHTML += coloredReindeer;
}
    // *** WHY PUSH?
    // *** is the var coloredReindeer above [] left empty because ______?
    // names generated are ALL POSSIBLE COMBINATIONS. however, is the goal to combine each to each just once?