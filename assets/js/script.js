const navLinkEls = document.querySelectorAll(".navbar__link");
const sectionEls = document.querySelectorAll(".section");

let currentSection = "home";
window.addEventListener("scroll", () => {
    sectionEls.forEach((sectionEl) => {
        if (window.scrollY >= sectionEl.offsetTop - 100) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach((navLinkEl) => {
        if (navLinkEl.href.includes(currentSection)) {
            document
                .querySelector(".navbar__link-active")
                .classList.remove("navbar__link-active");
            navLinkEl.classList.add("navbar__link-active");
        }
    });
});

$(function () {
    $(".feature__link").click(function () {
        $(".feature__link").removeClass("feature__link-active");
        $(this).addClass("feature__link-active");
    });
});

$(document).ready(function () {
    $(".feature__media").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
});

// $(function () {
//     $(".navbar__link").click(function () {
//         $(".navbar__link").removeClass('navbar__link-active');
//         $(this).addClass("navbar__link-active");
//     });
// });

// jQuery(function ($) {
//     var $navbar = $(".fixed");
//     $(window).scroll(function (event) {
//         var $current = $(this).scrollTop();
//         if ($current > 0) {
//             $navbar.addClass(".navbar-color");
//         } else {
//             $navbar.removeClass(".navbar-color");
//         }
//     });
// });
