gsap.utils.toArray(".reveal-element").forEach(element => {
    gsap.fromTo(element,
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%", // Adjust as needed
                end: "bottom 20%",   // Adjust as needed
                scrub: 1, // Smoothly link animation to scroll position
                toggleActions: "play none none reverse",
                // markers: true // Optional: add visual markers for debugging
            }
        }
    );
});