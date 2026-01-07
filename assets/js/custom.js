$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Hiking Gallery Owl Carousel - Removed in favor of CSS Marquee
    // $('.hiking-gallery-slider').owlCarousel({ ... })


    // Count
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    if (btn) {
        btn.addEventListener("click", scrollToTop);

        window.onscroll = function () {
            if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
                btn.style.display = "flex";
            } else {
                btn.style.display = "none";
            }
        };
    }


    // Aos
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
        });
    }

    // Typewriter Effect
    const textElement = document.getElementById("typewriter-text");
    const textToType = `
  _                          
 | |                         
 | |     __ _ _ __   __ _    
 | |    / _\` | '_ \\ / _\` |   
 | |___| (_| | | | | (_| |   
 |______\\__,_|_| |_|\\__,_|   

> Initializing system...
> Loading user profile...
> User: Muhammad Maulana Firdaussyah
> Role: Fullstack Web Developer
> Location: Universitas Teknologi Digital Indonesia
> Skills: React, Next.js, Tailwind CSS, Node.js
> Hobbies: Hiking, Coding, Reading Comics
> Status: Online
> Ready to collaborate! _`;

    let userIndex = 0;
    const speed = 50; // Typing speed in ms

    function typeWriter() {
        if (!textElement) return;

        if (userIndex < textToType.length) {
            if (textToType.charAt(userIndex) === "\n") {
                textElement.innerHTML += "<br>";
            } else {
                textElement.innerHTML += textToType.charAt(userIndex);
            }
            userIndex++;
            setTimeout(typeWriter, speed);
        } else {
            // Add blinking cursor at the end
            textElement.innerHTML = textElement.innerHTML.slice(0, -1) + '<span class="cursor">&nbsp;</span>';
        }
    }

    // Start typing when the element is in view (using Intersection Observer) or just on load
    if (textElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (userIndex === 0) { // Only start if not already started
                        typeWriter();
                    }
                }
            });
        });
        observer.observe(textElement);
    }

});

