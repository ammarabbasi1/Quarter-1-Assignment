// Define the initial list of guests
var guests = ["Albert Einstein", "Isaac Newton", "Marie Curie"];
// Print the original list of guests
console.log("Original guest list:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear " + guest + ", you are invited to dinner.");
}
// Find a bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Add a new guest to the beginning of the list
guests.unshift("Nikola Tesla");
// Add a new guest to the middle of the list
guests.splice(2, 0, "Galileo Galilei");
// Add a new guest to the end of the list
guests.push("Stephen Hawking");
// Print the updated list of guests
console.log("Updated guest list:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear " + guest + ", you are invited to dinner.");
}
