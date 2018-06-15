//-- home ------------------------------------ --/

$('#home').waypoint(function(down) {
    $("div").removeClass('left right');
}, {offset: 100});

$('#home').waypoint(function(up) {
    $("div").removeClass('left right');
}, {offset: -100});

//-- overmij fadeIn effect --------------------- --/

$('#over_mij').waypoint(function(down) {
    $("div").removeClass('left right');
    $( "#overmij_left" ).addClass( "left" );
    $( "#overmij_right" ).addClass( "right" );
}, {offset: 100});

$('#over_mij').waypoint(function(up) {
    $("div").removeClass('left right');
    $( "#overmij_left" ).addClass( "left" );
    $( "#overmij_right" ).addClass( "right" );
}, {offset: -100});

//-- opleiding fadeIn effect ------------------- --/

$('#opleiding').waypoint(function(down) {
    $("div").removeClass('left right');
    $( "#opleiding_left" ).addClass( "left" );
    $( "#opleiding_right" ).addClass( "right" );
}, {offset: 100});

$('#opleiding').waypoint(function(up) {
    $("div").removeClass('left right');
    $( "#opleiding_left" ).addClass( "left" );
    $( "#opleiding_right" ).addClass( "right" );
}, {offset: -100});

//-- ervaring fadeIn effect ------------------- --/

$('#ervaring').waypoint(function(down) {
    $("div").removeClass('left right');
    $( "#ervaring_left" ).addClass( "left" );
    $( "#ervaring_right" ).addClass( "right" );
}, {offset: 100});

$('#ervaring').waypoint(function(up) {
    $("div").removeClass('left right');
    $( "#ervaring_left" ).addClass( "left" );
    $( "#ervaring_right" ).addClass( "right" );
}, {offset: -100});

//-- project fadeIn effect ------------------- --/

$('#project').waypoint(function(down) {
    $("div").removeClass('left right');
    $( "#project_left" ).addClass( "left" );
    $( "#project_right" ).addClass( "right" );
}, {offset: 100});

$('#project').waypoint(function(up) {
    $("div").removeClass('left right');
    $( "#project_left" ).addClass( "left" );
    $( "#project_right" ).addClass( "right" );
}, {offset: -100});

//-- contact -------------------------------- --/

$('#contact').waypoint(function(down) {
    $("div").removeClass('left right');
}, {offset: 100});

$('#contact').waypoint(function(up) {
    $("div").removeClass('left right');
}, {offset: -100});

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





