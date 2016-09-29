$(".toggle-nav").click(function(e) {
	//the mobile menu items to appear
	//the keep the three lines so that I can toggle back and forth
	//click on the three lines and change the class back to the display I had before
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');
        $('.menu ul').toggleClass('mobile');
 
        e.preventDefault();
});

//chnaging the classes back if the menu is left open in small widths
//and then expanded.
/*$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 767) {
            $(".menu ul").removeClass("mobile").addClass("active");
    }
});*/
