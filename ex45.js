// ex q 45 ans
function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var i = 0; i < args.length; i += 2) {
        var key = args[i];
        var value = args[i + 1];
        car[key] = value;
    }
    return car;
}
// Example usage:
var myCar = createCar("Toyota", "Camry", "color", "blue", "year", "2022", "sunroof", "true");
console.log(myCar);
