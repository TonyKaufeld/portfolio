//-- navigation buttons ------------------------- --/

/*$('.position1').click(function () {
    $('html, body').stop().animate({
        scrollTop: $("#home").offset().top
    }, 2000);
});

$('.position2').click(function () {
    $('html, body').stop().animate({
        scrollTop: $("#over_mij").offset().top - 132.5
    }, 2000);
});

$('.position3').click(function () {
    $('html, body').stop().animate({
        scrollTop: $("#opleiding").offset().top - 132.5
    }, 2000);
});

$('.position4').click(function () {
    $('html, body').stop().animate({
        scrollTop: $("#project").offset().top - 132.5
    }, 2000);
});

$('.position5').click(function () {
    $('html, body').stop().animate({
        scrollTop: $("#contact").offset().top - 500
    }, 2000);
});*/

//-- overmij fadeIn effect --------------------- --/

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > $("#over_mij").offset().top - 600) {
        $("#overmij_left").stop().fadeIn();
    } else {
        $("#overmij_left").stop().fadeOut();
    }
});

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > $("#over_mij").offset().top - 600) {
        $("#overmij_right").stop().fadeIn();
    } else {
        $("#overmij_right").stop().fadeOut();
    }
});

//-- opleiding fadeIn effect ------------------- --/

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > $("#opleiding").offset().top - 600) {
        $("#opleiding_left").stop().fadeIn();
    } else {
        $("#opleiding_left").stop().fadeOut();
    }
});

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > $("#opleiding").offset().top - 600) {
        $("#opleiding_right").stop().fadeIn();
    } else {
        $("#opleiding_right").stop().fadeOut();
    }
});

//-- project fadeIn effect ------------------- --/

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > $("#project").offset().top - 600) {
        $("#project_left").stop().fadeIn();
    } else {
        $("#project_left").stop().fadeOut();
    }
});

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > $("#project").offset().top - 600) {
        $("#project_right").stop().fadeIn();
    } else {
        $("#project_right").stop().fadeOut();
    }
});

//-- scrollify ------------------------------ --/

$.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
});

//-- cc-typing ----------------------------- --/

$(".css-typing").delay(1000).fadeIn(500);

//-- li hover effect ----------------------- --/

$('li').hover(
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') }
);

// -- active menu --------------------------- --/

$('#home').waypoint(function() {
    $("li").removeClass('actief');
    $( "li:nth-child(1)" ).addClass( "actief" );
});

$('#over_mij').waypoint(function() {
    $("li").removeClass('actief');
    $( "li:nth-child(2)" ).addClass( "actief" );
});

$('#opleiding').waypoint(function() {
    $("li").removeClass('actief');
    $( "li:nth-child(3)" ).addClass( "actief" );
});

$('#project').waypoint(function() {
    $("li").removeClass('actief');
    $( "li:nth-child(4)" ).addClass( "actief" );
});

$('#contact').waypoint(function() {
    $("li").removeClass('actief');
    $( "li:nth-child(5)" ).addClass( "actief" );
});

//-- add smooth scrolling ------------------- --/

$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });
});


