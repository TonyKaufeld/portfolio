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

//-- ervaring fadeIn effect ------------------- --/

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > $("#ervaring").offset().top - 600) {
        $("#ervaring_left").stop().fadeIn();
    } else {
        $("#ervaring_left").stop().fadeOut();
    }
});

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > $("#ervaring").offset().top - 600) {
        $("#ervaring_right").stop().fadeIn();
    } else {
        $("#ervaring_right").stop().fadeOut();
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
// offset when scrolling down

$('#home').waypoint(function(down) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(1)" ).addClass( "actief" );
}, {offset: 100});

$('#over_mij').waypoint(function(down) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(2)" ).addClass( "actief" );
}, {offset: 100});

$('#opleiding').waypoint(function(down) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(3)" ).addClass( "actief" );
}, {offset: 100});

$('#project').waypoint(function(down) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(5)" ).addClass( "actief" );
}, {offset: 100});

$('#ervaring').waypoint(function(down) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(4)" ).addClass( "actief" );
}, {offset: 100});

$('#contact').waypoint(function(down) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(6)" ).addClass( "actief actief_contact" );
    $( "span" ).addClass( "hover-text-contact" );
}, {offset: 100});

//offset when scrolling up

$('#home').waypoint(function(up) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(1)" ).addClass( "actief" );
}, {offset: -100});

$('#over_mij').waypoint(function(up) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(2)" ).addClass( "actief" );
}, {offset: -100});

$('#opleiding').waypoint(function(up) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(3)" ).addClass( "actief" );
}, {offset: -100});

$('#project').waypoint(function(up) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(5)" ).addClass( "actief" );
}, {offset: -100});

$('#ervaring').waypoint(function(up) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(4)" ).addClass( "actief" );
}, {offset: -100});

$('#contact').waypoint(function(up) {
    $("li").removeClass('actief');
    $("span").removeClass('hover-text-contact');
    $( "li:nth-child(6)" ).addClass( " actief actief_contact" );
    $( "span" ).addClass( "hover-text-contact" );

}, {offset: -100});

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

//-- veranderd de breedte en margin bij de video en welkom div --/

$( "span" ).hover(
    function() {
        $( "#welkom" ).addClass( "welkom_hover" );
        $( "video" ).addClass( "welkom_hover_video" );
    }, function() {
        $( "#welkom" ).removeClass( "welkom_hover" );
        $( "video" ).removeClass( "welkom_hover_video" );
    }
);





