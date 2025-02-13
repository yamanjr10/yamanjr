function loadgsap(){

    const tl = gsap.timeline();
    
    tl.from(".logo img", {
        y: -30,
        opacity: 0,
        duration: 0.7,
        delay: 0.5
    })
	 .from(".bx-menu", {
        y: 30,
        opacity: 0,
        duration: 0.5
    })
    .from(" .nlink", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2

    })
    .from(".fade-up", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });
console.log(document.querySelectorAll(".nav a, .bx-menu"))
typing();
}

