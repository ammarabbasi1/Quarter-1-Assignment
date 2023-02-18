//ex q 16.1 ans
var guests = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
var unableToAttend = "Marie Curie";
// Print invitation messages to original guests
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my house."));
}
// Print message for guest unable to attend
console.log("".concat(unableToAttend, " cannot attend the dinner party."));
// Replace guest who cannot attend with a new guest
var index = guests.indexOf(unableToAttend);
if (index !== -1) {
    guests[index] = "Nikola Tesla";
}
// Print invitation messages to updated guest list
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my house."));
}
// Add three more guests to the list
guests.push("Ada Lovelace", "Grace Hopper", "Alan Turing");
// Print invitation messages to updated guest list
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest = guests_3[_b];
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my house."));
}
