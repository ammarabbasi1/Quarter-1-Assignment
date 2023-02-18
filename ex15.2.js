// ex q 15.2 ans
var guestList = ['Albert Einstein', 'Marie Curie', 'Isaac Newton'];
console.log("Original guest list: ".concat(guestList));
// Remove a guest who can't make it and replace with a new guest
var cancelledGuest = guestList[1];
guestList[1] = 'Stephen Hawking';
console.log("Sorry, ".concat(cancelledGuest, " can't make it to dinner."));
console.log("New guest list: ".concat(guestList));
// Send invitation messages to the remaining guests
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please join me for dinner at my house on Saturday."));
});
