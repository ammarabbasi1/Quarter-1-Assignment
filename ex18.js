var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ex q 18 ans
var placesToVisit = ["Japan", "Brazil", "Iceland", "Thailand", "Egypt"];
// Print array in its original order
console.log("Original order:", placesToVisit);
// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// Show that the array is still in its original order by printing it
console.log("Original order:", placesToVisit);
// Print array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("Original order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again to show it's back to its original order
placesToVisit.reverse();
console.log("Original order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order:", placesToVisit);
