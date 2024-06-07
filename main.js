AOS.init({
    offset: 100,
    duration: 900,
    delay: 100,
    once: false,
    mirror: true,

});

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $('header').removeClass("fixed");


            $('#header-nav > a').each(function () {
                if ($(this).hasClass("text-gray-900")) {
                    // $(this).removeClass("text-gray-900");
                    $(this).addClass("green-line");
                } else {
                    $(this).addClass("text-gray-900");
                    $(this).removeClass("text-white");
                }
            })
            

            $('.py-3 > a').each(function () {
                if ($(this).hasClass("text-gray-900")) {
                    // $(this).removeClass("text-gray-900");
                    // $(this).addClass("text-white");
                } else {
                    $(this).addClass("text-gray-900");
                    $(this).removeClass("text-white");
                }
            })
            
            $('.flex-shrink-0 > a').each(function () {
                if ($(this).hasClass("text-green")) {
                    // $(this).removeClass("text-gray-900");
                    // $(this).addClass("text-white");
                } else {
                    $(this).addClass("text-green");
                    $(this).removeClass("text-white");
                }
            })

            $('#header').removeClass("py-5");
            $('#header').removeClass("lg\:top-8");

        } else {
            $('header').addClass("fixed");

            $('#header').addClass("fixed lg\:top-8");
            $('#header').addClass("lg\:top-8");
            $('#header-nav > a').each(function () {
                if ($(this).hasClass("text-gray-900")) {
                    $(this).removeClass("text-gray-900");
                    
                    $(this).addClass("text-white");
                    
                } else {
                    
                    $(this).removeClass("green-line:hover");
                    // $(this).removeClass("text-white");
                }
            })
            $('.py-3 > a').each(function () {
                if ($(this).hasClass("text-gray-900")) {
                    $(this).removeClass("text-gray-900");
                    $(this).addClass("text-white");
                } else {
                    // $(this).addClass("text-gray-900");
                    // $(this).removeClass("text-white");
                }
            })
            $('.flex-shrink-0 > a').each(function () {
                if ($(this).hasClass("text-green")) {
                    $(this).removeClass("text-green");
                    $(this).addClass("text-white");
                } else {
                    // $(this).addClass("text-gray-900");
                    // $(this).removeClass("text-white");
                }
            })
        }


        if ($(this).scrollTop() > 50) {
            $('#header').addClass('hime');
            $('#header-nav > a').each(function () {
                if ($(this).hasClass("text-gray-900")) {
                    // $(this).removeClass("text-gray-900");
                    // $(this).addClass("text-white");
                } else {
                    $(this).addClass("text-gray-900");
                    $(this).removeClass("text-white");
                }
            })

        } else {
            $('#header').removeClass('hime');
            $('#header').addClass("lg\:top-8");

            $('#header-nav > a').each(function () {
                if ($(this).hasClass("text-gray-900")) {
                    $(this).removeClass("text-gray-900");
                    $(this).addClass("text-white");
                } else {
                    $(this).removeClass("green-line");
                    // $(this).removeClass("border-white ");
                }
            })
            
        }
    });

    $(window).on('unload', function () {
        $(window).scrollTop(0);
    });

    
    document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}


});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    alert("Email copied");
    $temp.remove();
  }