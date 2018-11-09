$(document).ready( function(){

    //test
    // $('main').hide(3000).delay(1000).show(500)


    $( ".image" ).mouseenter(function() {

        $(this).fadeTo(1000, .1);

    }).mouseleave( function () {
        $(this).fadeTo(2000,1);
    }).click( function () {
        $(this).next().fadeTo(1000,100);
    });


    //de footer
    $('footer').click(function () {
        $(this).animate({
            top:'-=100px',
            opacity: '-=.8'
        },1000).animate({
            top:'+=100px',
            opacity: '+=1'

        })
    });

});//einde ducument ready

