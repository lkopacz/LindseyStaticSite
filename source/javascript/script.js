$(".toggle-nav").click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');
        $('.menu ul').toggleClass('mobile');
        $('main').toggleClass('push-down');
        e.preventDefault();
});

