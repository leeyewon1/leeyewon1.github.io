$(function () {
    // new fullpage('#content', {
    //     autoScrolling: true,
    //     scrollOverflow: false,
    //     navigation: false,
    //     navigationPosition: 'right',
    // });
    const cubeSlide = new Swiper('.cube_slide', {
        effect: "cube",
        grabCursor: true,
        speed: 1000,
        cubeEffect: {
            shadow: true,
            slideShadows: false,
            shadowOffset: 100,
            shadowScale: 0.6,
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
    })

    $('#content').fullpage({
        scrollOverflow: false,
        afterRender: function () {
            mainVisualTimeline();
        },
        onLeave: function (origin, destination, direction, trigger) {
        destination.index === 0 && mainVisualTimeline();
           destination.index === 1 && portfolioTimelineLeft(destination.index);
           destination.index === 2 && portfolioTimelineRight(destination.index);
           destination.index === 3 && portfolioTimelineLeft(destination.index);
           destination.index === 4 && portfolioTimelineRight(destination.index);
           destination.index === 5 && portfolioTimelineLeft(destination.index);
           destination.index === 6 && portfolioTimelineRight(destination.index);
        },
    });

    $(".gnb_btn").on("click", function (e) {
        //각각의 li에 다른 위치값주기
        $(".gnb").toggleClass("on");
    });



    function mainVisualTimeline() {
        const tl = gsap.timeline({});

        tl.from('.mainVisual h2', { x: 500, autoAlpha: 0, delay: 1 })
        tl.from('.mainVisual p', { x: 500, autoAlpha: 0 })
        tl.from('.mainVisual .con_m', { x: 200, autoAlpha: 0, ease: "expoScale(0.5,7,none)" })
        tl.from('.line li:nth-child(1)', { width: 0, autoAlpha: 0, ease: "expoScale(0.5,7,none)" })
        tl.from('.line li:nth-child(2)', { height: 0, autoAlpha: 0, ease: "expoScale(0.5,7,none)" })
        tl.from('.line li:nth-child(3)', { height: 0, autoAlpha: 0, ease: "expoScale(0.5,7,none)" })
        tl.from('.line li:nth-child(4)', { width: 0, autoAlpha: 0, ease: "expoScale(0.5,7,none)" })
        tl.from('.line li:nth-child(5)', { rotate: 360, scale: 0, autoAlpha: 0, ease: "expoScale(0.5,7,none)", duration: 0.5 })

        tl.from('.mainVisual .cube_box', { x: 500, autoAlpha: 0, ease: "expoScale(0.5,7,none)", delay: 1 })
        tl.from('.mainVisual .inner h2 span ', { width: 0, height: 0, scale: 1, autoAlpha: 0, ease: "baunce" })
    }

    function portfolioTimelineLeft(num) {
        const itm = document.querySelectorAll('.portfolio')[num - 1];
        const tl = gsap.timeline();

        tl.from(itm.querySelector('.desc'), {
            x: -300,
            autoAlpha: 0,
            delay : 1,
        }).from(itm.querySelector('.mockup'), {
            y: -300,
            autoAlpha: 0,
        })
    }

    $('.tab_link li').on('click', function (event) {
        event.preventDefault();
        let idx = ($(this).index()) //0,1,2

        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.tab_content').eq(idx).addClass('on')
            .siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index())

    });



    function portfolioTimelineRight(num) {
        const itm = document.querySelectorAll('.portfolio')[num - 1];
        const tl = gsap.timeline();

        tl.from(itm.querySelector('.desc'), {
            x: -300,
            autoAlpha: 0,
            delay : 1,
        }).from(itm.querySelector('.mockup'), {
            y: -300,
            autoAlpha: 0,
        })
    }





});




