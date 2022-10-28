$(function(){
    $('img').mouseenter(function(){
        let x =  $(this).attr('src');
        $('#one').attr('src',x);

    })
    $('#one').click(function(){
        $('#two').css('display','none');
        $(this).css('height','600px',);
    })
})