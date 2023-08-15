console.log("Welcome to Music Player");

// Initialise the variables
let songIndex = 0;
let audioElement = new Audio('New Folder/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let karaokePlay = document.getElementById('karaokePlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Wicked Games -Chris Isaak", filePath: "C:\Users\Vinit Khedu\Desktop\Music Player\New folder\1.mp3", coverPath:"C:\Users\Vinit Khedu\Desktop\Music Player\New folder\coverWG.jpg" },
    {songName: "I'll be there for you(FRIENDS-theme song)", filePath: "C:\Users\Vinit Khedu\Desktop\Music Player\New folder\2.mp3", coverPath:"C:\Users\Vinit Khedu\Desktop\Music Player\New folder\coverFRNDS.jpg" },
    {songName: "Still falling for you -Ellie Goulding", filePath: "C:\Users\Vinit Khedu\Desktop\Music Player\New folder\3.mp3", coverPath:"C:\Users\Vinit Khedu\Desktop\Music Player\New folder\coverSFFY.jpg" },
    {songName: "Heartbeat -Enriques Iglesias", filePath: "C:\Users\Vinit Khedu\Desktop\Music Player\New folder\4.mp3", coverPath:"C:\Users\Vinit Khedu\Desktop\Music Player\New folder\coverHB.jpg" },
    {songName: "Stay -The kid laroi ft.Justin Bieber", filePath: "C:\Users\Vinit Khedu\Desktop\Music Player\New folder\5.mp3", coverPath:"C:\Users\Vinit Khedu\Desktop\Music Player\New folder\coverSTAY.jpg" },
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();

//Handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused  || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0;
    }
})


// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //Update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

    
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `New Folder/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `New Folder/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `New Folder/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})