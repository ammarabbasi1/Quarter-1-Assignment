// ex q 40 ans
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Examples
var album1 = make_album("Linkin Park", "Hybrid Theory");
console.log(album1); // { artist: 'Linkin Park', title: 'Hybrid Theory' }
var album2 = make_album("Metallica", "Metallica (The Black Album)", 12);
console.log(album2); // { artist: 'Metallica', title: 'Metallica (The Black Album)', tracks: 12 }
var album3 = make_album("Pink Floyd", "The Dark Side of the Moon", 10);
console.log(album3); // { artist: 'Pink Floyd', title: 'The Dark Side of the Moon', tracks: 10 }
