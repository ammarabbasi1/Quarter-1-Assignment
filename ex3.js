//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Namevar = "John Smith";
console.log("Lowercase: ".concat(Namevar.toLowerCase()));
console.log("Uppercase: ".concat(Namevar.toUpperCase()));
console.log("Titlecase: ".concat(toTitleCase(Namevar)));
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
