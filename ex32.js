// ex q 32 ans
var current_users = ['Ali', 'zaifi', 'mooon', 'murad', 'ammar'];
var new_users = ['saim', 'daim', 'basit', 'azlan', 'mohsin'];
for (var i = 0; i < new_users.length; i++) {
    var new_username = new_users[i];
    var username_exists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_username.toLowerCase() === current_users[j].toLowerCase()) {
            username_exists = true;
            break;
        }
    }
    if (username_exists) {
        console.log("Sorry, the username '".concat(new_username, "' is already taken. Please choose a new username."));
    }
    else {
        console.log("Congratulations, the username '".concat(new_username, "' is available!"));
    }
}
