// ex q 17 ans
var guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("Hey everyone, I've found a bigger dinner table!");
guestList.splice(2, 0, "Frank"); // Add new guest to middle of list
guestList.unshift("Grace"); // Add new guest to beginning of list
guestList.push("Hannah"); // Add new guest to end of list
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you're invited to my dinner party!"));
}
console.log("Unfortunately, my new dinner table won't arrive in time for the dinner, so I can only invite two people.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", I won't be able to invite you to dinner this time."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you're still invited to my dinner party!"));
}
guestList.splice(0); // Remove all remaining names from the list
console.log(guestList); // Should output an empty array
