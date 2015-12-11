$('nav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(document).ready(function(){

    $(".SubMenu").hide();
    $(".TopMenu h2").click(function(){
        $(this).closest(".TopMenu").find(".SubMenu").toggle();
    });
    $(".close").click(function(){
    	$(this).closest("ul").hide();
    });

});

