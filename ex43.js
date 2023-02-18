// ex q 43 ans
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define a function to show magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define a function to add "Great" to each magician's name
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("Great " + magician);
    }
    return great_magicians;
}
// Define an array of magicians
var magicians = ["David Copperfield", "Harry Houdini", "David Blaine"];
// Call show_magicians() with the original array
console.log("Original Magicians:");
show_magicians(magicians);
// Call make_great() with a copy of the array
var great_magicians = make_great(__spreadArray([], magicians, true));
// Call show_magicians() with the modified array
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
