let searchbtn=document.querySelector('#search-btn');
let searchbar=document.querySelector('.search-bar-container');
let formbtn=document.querySelector('#login-btn');
let loginform=document.querySelector('.login-form-cont');
let formclose= document.querySelector('#form-close');

let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar')
let videobtn=document.querySelectorAll('.vid-btn');



window.onscroll=()=>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}

searchbtn.addEventListener('click', () =>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});

formbtn.addEventListener('click',()=>{
    loginform.classList.add('active');
});

formclose.addEventListener('click',()=>{
    loginform.classList.remove('active');
})

videobtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    })
})


// var swiper = new Swiper(".review-slider", {
//    spaceBetween:20,
//    loop:true,
// });
function search() {
    var input = document.getElementById('search-bar').value.toLowerCase();
    var places = document.querySelectorAll('.box');

    if (input === '>') {
        // Show the Taj Mahal section
        var tajMahalSection = document.getElementById('tajMahal');
        tajMahalSection.style.display = 'block';

        // Hide other place sections
        places.forEach(function(place) {
            if (place !== tajMahalSection) {
                place.style.display = 'none';
            }
        });
    } else {
        // Handle regular search functionality
        places.forEach(function(place) {
            var placeName = place.querySelector('h3').innerText.toLowerCase();
            if (placeName.includes(input)) {
                place.style.display = 'block';
            } else {
                place.style.display = 'none';
            }
        });
    }
}
  

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper
    var swiper = new Swiper('.review-slider', {
        // Optional parameters
        slidesPerView: 1, // Number of slides per view (you can change this according to your layout)
        spaceBetween: 30, // Space between each slide
        loop: true, // Loop slides
        autoplay: {
            delay: 2500, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Continue autoplay even when user interacts with slider
        },
        breakpoints:{
            640:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:2,
            },
            1024:{
                slidesPerView:3,
            },
        }
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper
    var swiper = new Swiper('.brand-slider', {
        // Optional parameters
        slidesPerView: 1, // Number of slides per view (you can change this according to your layout)
        spaceBetween: 30, // Space between each slide
        loop: true, // Loop slides
        autoplay: {
            delay: 2500, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Continue autoplay even when user interacts with slider
        },
        breakpoints:{
            640:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:2,
            },
            1024:{
                slidesPerView:3,
            },
        }
    });
});
