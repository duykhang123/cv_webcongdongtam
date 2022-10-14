$(document).ready(function(){
    $('.slide-nhan-vien').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.arrow-next-3'),
        prevArrow: $('.arrow-prev-3'),
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });

    $('.sub-img-category').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.arrow-next-4'),
        prevArrow: $('.arrow-prev-4'),
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
});
$('.sub-customer').slick({
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.arrow-next-3'),
        prevArrow: $('.arrow-prev-3'),
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});
$('.sub-dt').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: $('.arrow-next-3'),
    prevArrow: $('.arrow-prev-3'),
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// })
$('.abc').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// $('.multiple-items').slick({
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: $('.arrow-next-2'),
//     prevArrow: $('.arrow-prev-2'),
//     responsive: [
//         {
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//         }
//         },
//         {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//         }
//         },
//         {
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//         }
//     ]
// });
$(document).ready(function(){
    $('.slick').slick({
         nextArrow: $('.arrow-next'),
         prevArrow: $('.arrow-prev'),
    });
    });
});

