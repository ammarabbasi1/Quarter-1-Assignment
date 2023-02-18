// ex q 31 ans
var Usernames = []; // empty array
if (Usernames.length > 0) {
    for (var _i = 0, Usernames_1 = Usernames; _i < Usernames_1.length; _i++) {
        var username = Usernames_1[_i];
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log('We need to find some users!');
}
