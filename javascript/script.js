$(document).ready(function() {

    // $('h1').click(function(){
    //     $(this).css('background-color', '#ff0000');
    // })

// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })

/* For the sticky navigation*/
    // $('.js--section-about').waypoint(function(direction) {
    //     if (direction == "down") {
    //         $('nav').addClass('sticky');
    //     } else {
    //         $('nav').removeClass('sticky');
    //     }
    // }, {
    //     offset: '60px'
    // });

    $('#stickyy').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });


/* Scroll on buttons*/
$('.js--scroll-to-services').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});

/* Animation on scroll */
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '50%'
})

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeIn');
}, {
    offset: '50%'
})

// $('.js--wp-2').waypoint(function(direction) {
//     $('.js--wp-2').addClass('animated fadeInUp');
// }, {
//     offset: '50%'
// })

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated pulse');
}, {
    offset: '50%'
});

/* Animation on scroll */

$('.js--nav-icon').click(function(){

    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i')

    nav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    }else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }

});



});