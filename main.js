
    var swiper = new Swiper(".popular-content", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev"
      },
      breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,   
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,   
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,   
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,   
        },   

        
        900: {
            slidesPerView: 4,
            spaceBetween: 20,   
        },
      },
    });

    // show video
    let playbutton = document.querySelector('.play-movie');
    let video = document.querySelector('.video-container');
    let myvideo = document.querySelector('#myvideo');
    let  closebtn = document.querySelector('.close-video');

    playbutton.onclick = () =>{
        video.classList.add('show-video')
        //autoplay when click on btn
        myvideo.play();
    };
    closebtn.onclick = () =>{
        video.classList.remove('show-video')
        //pause when click on btn
        myvideo.pause();
    };
    