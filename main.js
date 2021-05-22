const music = document.querySelector("audio"); 
const img = document.querySelector('img');
const play = document.getElementById("play");


const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let progress = document.getElementById("progress");
let current_time = document.getElementById("current-time");
let total_duration = document.getElementById("duration");
const progress_div =document.getElementById("progress-div");

const songs=[{
name:"music-1",
imgs:"img-1",
title:"CHITTI",
artist:"Jubin Nautiyal"
},
{
name:"music-2",
imgs:"img-2",
title:"SHAYAD",
artist:"Arijit Singh"
},
{
name:"music-3",
imgs:"img-3",
title:"TERA_YAAR_HOON_MAIN",
artist:"Arijit Singh"
},
{
name:"music-4",
imgs:"img-4",
title:"Agar_tum_sath_ho",
artist:"Arijit Singh,ALka Yagnik"
},
{
name:"music-5",
imgs:"img-5",
title:"Leja re",
artist:"Dhvani Bhanushali"
},
{
name:"music-6",
imgs:"img-6",
title:"Nayan",
artist:"Dhvani Bhanushali"
},
{
name:"music-7",
imgs:"img-7",
title:"TERI_AANKHO_MAIN",
artist:"Neha Kakkar"
},
{
name:"music-8",
imgs:"img-8",
title:"MAIN_JIS_DIN_BHULAA_DU",
artist:"Jubin Nautiyal"
},
{
name:"music-9",
imgs:"img-9",
title:"ASAL MEIN",
artist:"Darshan Raval"
},
{
name:"music-10",
imgs:"img-10",
title:"TARO_KE_SAHAR_ME",
artist:"neha kakkar"
}
]
let isPlaying = false;
//   for play functionality
const playMusic= ()=>{
  isPlaying=true;
  music.play();
  play.classList.replace('fa-play-circle','fa-pause-circle');
  img.classList.add('anime');
};

//   for pause functionality

const pauseMusic= ()=>{
  isPlaying=false;
  music.pause();
  play.classList.replace('fa-pause-circle','fa-play-circle');
  img.classList.remove('anime');
};
play.addEventListener("click",()=>{
if(isPlaying)
{
    pauseMusic();
}
else{
    playMusic();
}
});

// changing THE MUSIC DATA
const loadSong = (songs)=>{
title.textContent = songs.title;
artist.textContent = songs.artist;
music.src = "/music/" + songs.name + ".mp3";
img.src="/images/" + songs.imgs +".jpg"
}

songIndex=0;


const nextSong = () =>{
songIndex=(songIndex+1)%songs.length;
loadSong(songs[songIndex]);
playMusic();
}
const prevSong = () =>{
songIndex=(songIndex - 1 + songs.length) % songs.length;
loadSong(songs[songIndex]);
playMusic();
}


// progress js work

    music.addEventListener('timeupdate',(event) =>{
    //    console.log(event);
    const {currentTime, duration}=event.srcElement;
    // console.log(currentTime);
    // console.log(duration);

    let progress_time=(currentTime/duration)*100;
    progress.style.width=`${progress_time}%`;

    // Music duration Update

            // console.log(duration);
            let min_duration=Math.floor(duration/60);
            let sec_duration=Math.floor(duration%60);
            // console.log(min_duration);
            // console.log(sec_duration);
            let tot_duration= `${min_duration}:${sec_duration}`;
            if(duration){
                total_duration.textContent=`${tot_duration}` ;
            }
    // Current duration Update

            // console.log(duration);
            let min_currentTime=Math.floor(currentTime/60);
            let sec_currentTime=Math.floor(currentTime%60);
            // console.log(min_duration);
            // console.log(sec_duration);
          
       
            if(sec_currentTime<10){
               sec_currentTime=`0${sec_currentTime}`;
            }
            let tot_currentTime= `${min_currentTime}:${sec_currentTime}`;
         current_time.textContent=`${tot_currentTime}` ;

            });


            // progress on click functionality
            progress_div.addEventListener("click",(event) =>{
                console.log(event);
                const {duration}= music;

                let move_progress=(event.offsetX/event.srcElement.clientWidth)*duration;
                music.currentTime= move_progress;
            })





            // if music end call next song func 
            music.addEventListener("ended",nextSong);




next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);