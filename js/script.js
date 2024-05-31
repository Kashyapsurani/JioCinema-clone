
var swiper = new Swiper(".mySwiperse", {
    rewind: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 1,
        stretch: 322,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 3,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5,
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".mySwipers", {
    slidesPerView: 2.5,
    spaceBetween: 3,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


function myfununction() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = "kashyap";
    let pass = "123456789̧";
    if (username == user && password == pass) {
        location.replace("http://127.0.0.1:5502/main.html");
    } else if (username != user && password == pass) {
        Swal.fire({
            icon: "error",
            title: "Your Username Is Worng",
        });
    } else if (username == user && password != pass) {
        Swal.fire({
            icon: "error",
            title: "Your Password Is Worng",
        });
    }
    else if (username != user && password != pass) {
        Swal.fire({
            icon: "error",
            title: "Your Username And Password Is Worng",
        });

    } 

}
