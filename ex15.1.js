//ex q 15 ans
// Original guest list
var guests = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
// Print invitation message for each guest
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", please come to my dinner party!"));
}
// Update guest list
var unableToAttend = guests.splice(1, 1); // remove Marie Curie from the list
guests.push("Nikola Tesla"); // add Nikola Tesla to the list
// Print updated invitation message for each guest
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", please come to my dinner party on Saturday!"));
}
