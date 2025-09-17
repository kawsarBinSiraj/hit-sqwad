/**
 * DOM Ready Callback
 * -------------------
 * This function will execute after the HTML document
 * has been completely loaded and the DOM is ready to
 * be manipulated.
 *
 * Place all jQuery-related scripts inside this block
 * to avoid "undefined" errors caused by scripts
 * running before elements exist.
 */

/**
 * Jarallax Init for parallax effect
 * by :- Kawsar Bin Siraj
 * at :- 11/09/2025 14:34:40
 */
$(function () {
    $(".jarallax").jarallax({
        speed: 0.6,
    });
});

/**
 * Swiper Init for game slider
 * ----------------------------
 * This function initializes the Swiper slider for the game section.
 * It sets up various options such as autoplay, breakpoints, and custom
 * navigation. It also updates the current slide number and total slides
 * in the HTML.
 *
 * by :- Kawsar Bin Siraj
 * at :- 14/09/2025 11:32:51
 */
$(function () {
    if ($(".gameSwiper").length) {
        const swiper = new Swiper(".gameSwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            speed: 2000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                600: {
                    slidesPerView: 1.25,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 2.25,
                    spaceBetween: 30,
                },
            },
            on: {
                slideChange: function () {
                    const c = document.getElementById("currentSlide");
                    if (c) c.textContent = this.realIndex + 1;
                },
            },
        });
        // Custom navigation
        $(".swiper-button-prev-custom").on("click", () => {
            swiper.slidePrev();
        });
        $(".swiper-button-next-custom").on("click", () => {
            swiper.slideNext();
        });
        // Set total slides
        $("#totalSlides").textContent = swiper.slides.length;
    }
});

/**
 * Swiper Init for game slider
 * ----------------------------
 * This function initializes the Swiper slider for the game section.
 * It sets up various options such as autoplay, breakpoints, and custom
 * navigation. It also updates the current slide number and total slides
 * in the HTML.
 *
 * by :- Kawsar Bin Siraj
 * at :- 14/09/2025 11:32:51
 */
$(function () {
    if ($(".licenseSwiper").length) {
        const swiper = new Swiper(".licenseSwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            speed: 2000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                600: {
                    slidesPerView: 1.25,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 2.25,
                    spaceBetween: 0,
                },
            },
        });
    }
});

/**
 * Header scroll animation
 * ------------------------
 * This section handles the header animation when scrolling.
 * It adds or removes the "header-fixed" class based on the scroll position.
 * It also updates the "isFixed" variable to keep track of the header's state.
 *
 * Variables:
 * - header: jQuery object representing the header element
 * - scrollThreshold: The scroll position at which the header should become fixed
 * - isFixed: Boolean flag indicating whether the header is currently fixed
 *
 * Functions:
 * - None
 *
 * Events:
 * - $(window).scroll: Handles the scroll event and updates the header's state
 * by :- Kawsar Bin Siraj
 * at :- 15/09/2025 09:42:23
 */

$(function () {
    const header = $("#main-header");
    const innerHeight = header.innerHeight() * 3 || 100;
    const scrollThreshold = innerHeight;
    let isFixed = false;

    function checkHeader() {
        const scrollTop = $(window).scrollTop();
        if (scrollTop >= scrollThreshold && !isFixed) {
            // Make header fixed with slide down animation
            header.addClass("header-fixed");
            isFixed = true;
        } else if (scrollTop <= 1 && isFixed) {
            // Remove fixed class with slide up animation
            header.removeClass("header-fixed");
            isFixed = false;
        }
    }

    // Wheel scroll
    $(window).on("wheel", checkHeader);

    // Normal scroll (anchor links, keyboard, touch, etc.)
    $(window).on("scroll", checkHeader);
});

/**
 * !! hover effect
 * by :- Kawsar Bin Siraj
 * at :- 15/09/2025 15:27:20
 */
$(function () {
    const ww = $(window).width();
    if (ww > 768) {
        $("#nav li").hover(
            function () {
                let left = $(this).position().left;
                let w = $(this).width();
                $("#nav").css({
                    "--opacity": 1,
                    "--left": Math.round(left) + "px",
                    "--width": Math.round(w) + "px",
                });
            },
            function () {
                $("#nav").css({ "--opacity": 0 });
            }
        );
    }

    $("#menu-button").on("click", function () {
        $("nav#nav").slideToggle();
        $(this).toggleClass("active");
    });
});

/**
 * !! Dynamic Image Scroll Animation with GSAP
 * by :- Kawsar Bin Siraj
 * at :- 16/09/2025 15:15:51
 */
$(function () {
    // Ensure GSAP and ScrollTrigger are loaded
    gsap.registerPlugin(ScrollTrigger);

    /**
     * Dynamic Image Animation
     * ------------------------
     * This section creates a scroll-triggered animation for images
     * within the #dynamic-imgs container. As the user scrolls, the images
     * will scale and move in different directions to create a dynamic effect.
     */
    if ($("#dynamic-imgs").length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#dynamic-imgs",
                start: "top center+=100", // adjust to when you want it to animate
                end: "bottom center",
                scrub: true,
            },
        });
        tl.to("#bg-shade", { scale: 1, duration: .6, ease: "power2.out" }, 0);
        tl.to("#img-1", { scale: 1.1, y: "20%", duration: 1, ease: "power2.out" }, 0);
        tl.to("#img-2", { x: "25%", y: "-2%", rotate: 20, duration: 1.2, ease: "power2.out" }, 0);
        tl.to("#img-3", { x: "-25%", y: "-2%", rotate: -20, duration: 1.2, ease: "power2.out" }, 0);
    }

    /**
     * Banner Title Animation
     * ------------------------
     * This section creates a scroll-triggered animation for the banner title.
     * As the user scrolls, the title will move down slightly and the colors
     * of the spans within the title will swap between white and red.
     */
    $(function () {
        $("#banner-title span").each((i, item) => {
            const isRed = $(item).hasClass("red");
            $(item).css({ color: isRed ? "#f00" : "#fff" });
            gsap.to(item, {
                color: isRed ? "#fff" : "#f00",
                scrollTrigger: {
                    trigger: "#banner",
                    start: "center center",
                    end: "bottom center",
                    scrub: true, // smooth color change tied to scroll
                },
            });
        });
        gsap.to("#banner .content-group", {
            y: "40%", // move up 10%
            x: "0%", // optional: adjust if you want horizontal movement
            rotate: 0, // optional: add rotation if needed
            scrollTrigger: {
                trigger: "#banner",
                start: "center center",
                end: "bottom center",
                scrub: true, // smooth movement tied to scroll
            },
        });
    });
});

/**
 * !! Use requestAnimationFrame to continuously update the scroll
 * !! Modal Init
 * !! Initialize Lenis
 * by :- Kawsar Bin Siraj
 * at :- 15/09/2025 10:54:34
 */
$(function () {
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    $("#alert-modal").modal({
        fadeDuration: 250,
        escapeClose: false,
        clickClose: false,
        showClose: false,
    });

    $(document).on($.modal.OPEN, function (event, modal) {
        lenis.stop(); // stop scroll when modal opens
    });

    $(document).on($.modal.CLOSE, function (event, modal) {
        lenis.start(); // start scroll again when modal closes
    });
});
