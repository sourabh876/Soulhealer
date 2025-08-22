

// console.log('Lets write JavaScript');
// let currentSong = new Audio();
// let songs;
// let currFolder;

// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) {
//         return "00:00";
//     }

//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);

//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//     return `${formattedMinutes}:${formattedSeconds}`;
// }



// async function getSongs(folder) {
//     currFolder = folder;
//     let a = await fetch(`/${folder}/`);
//     let response = await a.text();
//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a");
//     songs = [];
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split(`/${folder}/`)[1]);
//         }
//     }
 


//     // Show all the songs in the playlist
//     let songUL = document.querySelector(".songcontainer").getElementsByTagName("ul")[0];
//     songUL.innerHTML = "";
//     for (const song of songs) {
//         songUL.innerHTML = songUL.innerHTML + `<li><img class=" songsvg invert" width="34" src="img/music.svg" alt="">
//                             <div class="info">
//                                 <div class="hgt" > ${song.replaceAll("%20", " ")}</div>
                                
//                             </div>
                            
//                             <img class="playsvg invert" src="img/play.svg" alt="">
//  </li>`;
//     }

//     // Attach an event listener to each song
//     Array.from(document.querySelector(".songcontainer").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {
//             playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());

//         });
//     });

//     return songs;
// }


// const playMusic = (track, pause = false) => {
//     currentSong.src = `/${currFolder}/` + track;
//     if (!pause) {
//         currentSong.play();
//         play.src = "img/pause.svg";
//     }
//     document.querySelector(".songinfo").innerHTML = decodeURI(track);
//     document.querySelector(".songtime").innerHTML = "00:00 / 00:00";


// };


// async function displayAlbums() {
//     let a = await fetch(`/songs/`);
//     let response = await a.text();
//     let div = document.createElement("div");
//     div.innerHTML = response;
//     console.log(div);
//     let anchors = div.getElementsByTagName("a");
//     let cardContainer = document.querySelector(".cardcontainer");
//     let array = Array.from(anchors);
//     Array.from(anchors).forEach(async e => {
//     if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
//         let folder = e.href.split("/").slice(-1);
//         let a = await fetch(`/songs/${folder}/info.json`);
//         let response = await a.json();
//         console.log(response);

//         let card = document.createElement("div");
//         card.classList.add("card");
//         card.dataset.folder = folder;
//         card.innerHTML = `
//             <img src="/songs/${folder}/cover.jpg" alt="Cover">
//             <h1>${response.title}</h1>
//             <h2>${response.description}</h2>
//             <div class="playbutton">
//                 <button>
//                     <span>
//                         <svg viewBox="0 0 24 24">
//                             <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
//                         </svg>
//                     </span>
//                 </button>
//             </div>
//         `;

//         cardContainer.appendChild(card);

//         // Add event listener directly after creating the card
//         card.addEventListener("click", async item => {
//             let songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
//             // playmusic(songs[0]);
//         });
//     }
// });

// }


// async function main() {
//     // Get the list of all the songs
//     await getSongs("songs/KK");
//     playMusic(songs[0], true);
//     // Display all the albums on the page
//    await displayAlbums();


//     // Attach an event listener to play, next and previous
//     play.addEventListener("click", () => {
//         if (currentSong.paused) {
//             currentSong.play();
//             play.src = "img/pause.svg";
//         }
//         else {
//             currentSong.pause();
//             play.src = "img/play.svg";
//         }
//     });

//     // Listen for timeupdate event
//     currentSong.addEventListener("timeupdate", () => {
//         document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
//         document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
//     });

//     // Add an event listener to seekbar
//     document.querySelector(".seekbar").addEventListener("click", e => {
//         let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//         document.querySelector(".circle").style.left = percent + "%";
//         currentSong.currentTime = ((currentSong.duration) * percent) / 100;
//     });

//     // Add an event listener for hamburger
//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0";
//     });

//     // Add an event listener for close button
//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%" ;
//     });

//     // Add an event listener to previous
//     previous.addEventListener("click", () => {
//         currentSong.pause();
//         console.log("Previous clicked");
//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
//         if ((index - 1) >= 0) {
//             playMusic(songs[index - 1]);
//         }
//     });

//     // Add an event listener to next
//     next.addEventListener("click", () => {
//         currentSong.pause();
//         console.log("Next clicked");

//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
//         if ((index + 1) < songs.length) {
//             playMusic(songs[index + 1]);
//         }
//     });

//     // Add an event to volume
//     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
//         console.log("Setting volume to", e.target.value, "/ 100");
//         currentSong.volume = parseInt(e.target.value) / 100;
//         if (currentSong.volume >0){
//             document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg");
//         }
//     });

//     // Add event listener to mute the track
//     document.querySelector(".volume>img").addEventListener("click", e=>{ 
//         if(e.target.src.includes("volume.svg")){
//             e.target.src = e.target.src.replace("volume.svg", "mute.svg");
//             currentSong.volume = 0;
//             document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
//         }
//         else{
//             e.target.src = e.target.src.replace("mute.svg", "volume.svg");
//             currentSong.volume = .10;
//             document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
//         }

//     });

//      currentSong.addEventListener("ended", () => {
//     let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
//     if ((index + 1) < songs.length) {
//         playMusic(songs[index + 1]);
//     } else {
//         // Optional: Loop back to the first song
//         playMusic(songs[0]);
//     }


// });




// }

// main() ;


console.log('Lets write JavaScript');
let currentSong = new Audio();
let songs = [];
let currFolder = "";
let play, previous, next;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getAlbums() {
    try {
        let response = await fetch('/songs/albums.json');
        let albums = await response.json();
        return albums;
    } catch (err) {
        console.error("Error loading albums.json:", err);
        return [];
    }
}

async function getSongs(albumFolder) {
    try {
        let response = await fetch(`/songs/${albumFolder}/songs.json`);
        let songList = await response.json();
        return songList;
    } catch (err) {
        console.error(`Error loading songs.json for folder ${albumFolder}:`, err);
        return [];
    }
}

async function displayAlbums() {
    let albums = await getAlbums();
    let cardContainer = document.querySelector(".cardcontainer");
    cardContainer.innerHTML = '';
    for (const album of albums) {
        let info = {title: album.title, description: album.description};
        try {
            let response = await fetch(`/songs/${album.folder}/info.json`);
            let albumInfo = await response.json();
            info = {...info, ...albumInfo};
        } catch(e) {
            // Use defaults from albums.json
        }

        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.folder = album.folder;
        card.innerHTML = `
            <img src="/songs/${album.folder}/cover.jpg" alt="Cover">
            <h1>${info.title}</h1>
            <h2>${info.description}</h2>
            <div class="playbutton">
                <button>
                    <span>
                        <svg viewBox="0 0 24 24">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        `;

        cardContainer.appendChild(card);
    }
}

// Display song list in the left sidebar playlist container
function displayPlaylist(songList, albumFolder) {
    let songUL = document.querySelector(".songcontainer ul");
    if (!songUL) return;
    songUL.innerHTML = "";

    for (const song of songList) {
        songUL.innerHTML += `
        <li>
            <img class="songsvg invert" width="34" src="img/music.svg" alt="">
            <div class="info">
                <div class="hgt">${decodeURIComponent(song)}</div>
            </div>
            <img class="playsvg invert" src="img/play.svg" alt="">
        </li>`;
    }

    Array.from(songUL.getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            playMusic(`/${albumFolder}/` + e.querySelector(".info").firstElementChild.innerHTML.trim());
        });
    });
}

const playMusic = (track, pause = false) => {
    currentSong.src = track;
    if (!pause) {
        currentSong.play();
        if (play) play.src = "img/pause.svg";
    }
    const displayedName = track.split("/").pop();
    document.querySelector(".songinfo").innerHTML = decodeURIComponent(displayedName);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

function attachAlbumClickListeners() {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", async () => {
            const albumFolder = card.dataset.folder;
            songs = await getSongs(albumFolder);
            currFolder = albumFolder;
            displayPlaylist(songs, albumFolder);
            if (songs.length > 0) playMusic(`/${albumFolder}/` + songs[0], true);
        });
    });
}

async function main() {
    play = document.getElementById("play");
    previous = document.getElementById("previous");
    next = document.getElementById("next");

    await displayAlbums();
    attachAlbumClickListeners();

    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "img/pause.svg";
        } else {
            currentSong.pause();
            play.src = "img/play.svg";
        }
    });

    currentSong.addEventListener("timeupdate", () => {
        let duration = currentSong.duration || 0;
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(duration)}`;
        let percent = duration ? (currentSong.currentTime / duration) * 100 : 0;
        document.querySelector(".circle").style.left = percent + "%";
    });

    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100;
    });

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%" ;
    });

    previous.addEventListener("click", () => {
        currentSong.pause();
        let currentTrack = currentSong.src.split("/").pop();
        let index = songs.indexOf(currentTrack);
        if (index > 0) {
            playMusic(songs[index - 1]);
        }
    });

    next.addEventListener("click", () => {
        currentSong.pause();
        let currentTrack = currentSong.src.split("/").pop();
        let index = songs.indexOf(currentTrack);
        if (index < songs.length - 1) {
            playMusic(songs[index + 1]);
        }
    });

    document.querySelector(".range input[type='range']").addEventListener("change", (e) => {
        currentSong.volume = e.target.value / 100;
        let volImg = document.querySelector(".volume img");
        if (currentSong.volume > 0) {
            volImg.src = volImg.src.replace("mute.svg", "volume.svg");
        } else {
            volImg.src = volImg.src.replace("volume.svg", "mute.svg");
        }
    });

    document.querySelector(".volume img").addEventListener("click", e => { 
        let volImg = e.target;
        if (volImg.src.includes("volume.svg")) {
            volImg.src = volImg.src.replace("volume.svg", "mute.svg");
            currentSong.volume = 0;
            document.querySelector(".range input[type='range']").value = 0;
        } else {
            volImg.src = volImg.src.replace("mute.svg", "volume.svg");
            currentSong.volume = 0.1;
            document.querySelector(".range input[type='range']").value = 10;
        }
    });

    currentSong.addEventListener("ended", () => {
        let currentTrack = currentSong.src.split("/").pop();
        let index = songs.indexOf(currentTrack);
        if (index < songs.length - 1) {
            playMusic(songs[index + 1]);
        } else {
            playMusic(songs[0]);  // Loop back to first song
        }
    });
}

main();
