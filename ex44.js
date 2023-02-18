// ex q 42 ans
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich with:");
    items.forEach(function (item) {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!\n");
}
// Example usage:
makeSandwich("turkey", "bacon", "lettuce", "tomato");
makeSandwich("peanut butter", "jelly");
makeSandwich("ham", "swiss cheese", "mayonnaise");
