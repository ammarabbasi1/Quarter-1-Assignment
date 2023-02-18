// ex q 37 ans
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt("medium");
// Small shirt with custom message
make_shirt("small", "TypeScript is awesome!");
