// API_KEY = dc5ac7e8-57a1-4d1c-8c9a-317977337fe9

const scrollBtn = document.getElementById('scroll-btn');


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')

const introVid = document.getElementById('intro-video')



function play() {
  introVid.play()
  playBtn.style.display = "none"
}


function pause(){
  introVid.pause()
  pauseBtn.style.display = "block"
}

function pausePlay() {
  introVid.play()
  pauseBtn.style.display = "none"
}

playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pausePlay)
introVid.addEventListener("click", pause)







// const ScrollTop = () => {
//     if(document.body.scrollHeight > 20 || document.documentElement.scrollTop > 20) {
//         scrollBtn.style.display = "block"
//     } else {
//         scrollBtn.style.display = "hidden"
//     }
// }

// window.addEventListener("scroll", ScrollTop())

// scrollBtn.addEventListener("click", () => {
//     document.body.scrollTop = 0
//     document.documentElement.scrollTop = 0
// })


// const form = document.querySelector('.form')
// const name = document.getElementById('name')
// const email = document.getElementById('email')
// const phone = document.getElementById('phone')
// const text = document.getElementById('message')



// const btn = document.querySelector('.submit');

// btn.addEventListener("submit", () => {
//     if(form) {
//         name.input.value = ""; 

//     }
// })


// /portfolio
















