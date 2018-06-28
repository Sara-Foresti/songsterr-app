// console.log("test");

const element = document.getElementById("search-form");
const input = document.getElementById("artist");
const songs = document.getElementById("results");
const header = document.getElementById("songs-header");

element.addEventListener("submit", (event) => {
  fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${input.value}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data); // good to leave to see what we get in the console
      // manipulating data
      header.innerText = `${input.value}'s songs:`;

      data.forEach((song) => {
        const title = song["title"];
        const chords = song["chordsPresent"];

        const chordsAvailability = () => {
          if (chords === true) {
            return 'Chords available';
          } else {
            return 'No chords for this song';
          }
        };

        const chordsResult = chordsAvailability();
        songs.insertAdjacentHTML("beforeend", `<li><strong>${title}</strong><p>${chordsResult}</p></li>`);

      });

    });
});


