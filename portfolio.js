// const myList = document.querySelectorAll('#work li')

// myList.forEach((item) => {
//    const link = item.querySelector('a');
//    const para = item.querySelector('#para')

//    link.addEventListener("click", (e) => {
//         e.preventDefault();
//         if(para.style.display === "block") {
//             para.style.display = "none"
//         } else {
//             para.style.display = "block"
//         }
//    })
// })

// const Links = document.querySelectorAll('.link');
// const currentpara = null;

// Links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const targetId = e.target.getAttribute("data-target");
//         const targetPara = document.getElementById(targetId)

//         if (currentpara && currentpara !== targetPara) {
//             currentpara.style.display = 'none';
//         }

//         if (targetPara.style.display === 'none' || !targetPara.style.display) {
//             targetPara.style.display = 'block';
//         } else {
//             targetPara.style.display = 'none';
//         }

//         currentpara = targetPara.style.display === 'block' ? targetPara : null;
//     })
// })


document.addEventListener('DOMContentLoaded', function () {

const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.cards');
const sliderTrack = document.getElementById('slider-track')
const cardWidth= cards[0].getBoundingClientRect().width + 20;
const nextbtn = document.querySelector('.angle-right');
const prevbtn = document.querySelector('.angle-left');

const currentIndex = 0;
const totalCards = cards.length;
const visibleCards = Math.floor(slider.clientWidth/ cardWidth)
const maxIndex = totalCards - visibleCards;

function updateSliderPosition(){
    sliderTrack.style.transform = `translate(${currentIndex * cardWidth})`;

}
    prevbtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextbtn.addEventListener('click', function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSliderPosition();
        }
    });



})


