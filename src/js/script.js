const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close-big'),
    closeElement = document.querySelector('.menu__close-small'),
    closeElementbody = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElementbody.addEventListener('click', () => {
    menu.classList.remove('active');
});

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    $('#forma').submit(function(e) {
        e.preventDefault();
        // if (!$(this).valid()) {
        //     return;
        // }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#forma').trigger('reset');
        });
        return false;
    });
});
$(window).resize(function() {
    if ($(window).width() >= 768) {
        $('.portfolio').removeClass('hop');
    }
});