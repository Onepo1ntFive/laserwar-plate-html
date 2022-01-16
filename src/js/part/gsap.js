(function () {
    gsap.registerPlugin(ScrollTrigger);

    const tl0 = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play pause resume reverse",
            trigger: ".promo",
            start: "-100 center",
            end: "bottom top",
            scrub: false,
            pin: false,
            markers: false,
        },
    })

    tl0.fromTo(".promo__content > *", {
        y: -20,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
    })

    const tl1 = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play pause resume reverse",
            trigger: ".benefits",
            start: "-50% center",
            end: "bottom top",
            scrub: false,
            pin: false,
            markers: false,
        },
    })

    tl1.fromTo(".benefits h2", {
        y: -100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
    })
        .fromTo(".benefits__item", {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
        })

    const tl2 = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play pause resume reverse",
            trigger: ".green-panel--1",
            start: "-100 center",
            end: "bottom top",
            scrub: false,
            pin: false,
            markers: false,
        },
    })

    tl2.fromTo(".green-panel--1", {
        y: -100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
    }, 'tl2')
        .fromTo(".green-panel--1 h2", {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        })
        .fromTo(".green-panel--1 li", {
            y: -20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
        }, 'tl2')
        .fromTo(".green-panel--1 .green-panel__pic", {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }, 'tl2')

    const tl3 = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play pause resume reverse",
            trigger: ".green-panel--2",
            start: "-100 center",
            end: "bottom top",
            scrub: false,
            pin: false,
            markers: false,
        },
    })

    tl3.fromTo(".green-panel--2", {
        y: -100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
    }, 'tl3')
        .fromTo(".green-panel--2 h2", {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        })
        .fromTo(".green-panel--2 li", {
            y: -20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
        }, 'tl3')
        .fromTo(".green-panel--2 .green-panel__pic", {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }, 'tl3')

    const tl4 = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play pause resume reverse",
            trigger: ".green-panel--3",
            start: "-100 center",
            end: "bottom top",
            scrub: false,
            pin: false,
            markers: false,
        },
    })

    tl4.fromTo(".green-panel--3", {
        y: -100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
    }, 'tl4')
        .fromTo(".green-panel--3 h2", {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        })
        .fromTo(".green-panel--3 li", {
            y: -20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
        }, 'tl4')
        .fromTo(".green-panel--3 .green-panel__pic", {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }, 'tl4')

    const tl5 = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play pause resume reverse",
            trigger: ".gallery",
            start: "-100 center",
            end: "bottom top",
            scrub: false,
            pin: false,
            markers: false,
        },
    })

    tl5.fromTo(".gallery h2", {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
    }, 'tl5')
        .fromTo(".gallery .swiper-slide img", {
            y: -50,
            opacity: 0,
        }, {
            delay: 0.1,
            y: 0,
            opacity: 1,
            stagger: 0.2,
        }, 'tl5')

    const tl6 = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play pause resume reverse",
            trigger: ".reviews",
            start: "-100 center",
            end: "bottom top",
            scrub: false,
            pin: false,
            markers: false,
        },
    })

    tl6.fromTo(".reviews h2", {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
    }, 'tl6')
        .fromTo(".reviews .swiper", {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }, 'tl6')
        .fromTo(".reviews .reviews__contact > *", {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
        }, 'tl6')
        .fromTo(".reviews .swiper-slide > *", {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
        }, 'tl6')

    const tl7 = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play pause resume reverse",
            trigger: ".form",
            start: "-100 center",
            end: "bottom top",
            scrub: false,
            pin: false,
            markers: false,
        },
    })

    tl7.fromTo(".form__inner", {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
    }, 'tl7')
        .fromTo(".form__inner h2", {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }, 'tl7')
        .fromTo(".form__inner .form__item", {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
        }, 'tl7')
})();