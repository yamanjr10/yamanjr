// Existing navigation code
let sections = ["projects", "home", "contact", "skills", "about"];
let navs = ["nav2", "nav1", "nav3", "nav4", "nav5"];

sections.forEach((section, index) => {
    let sectionElement = document.getElementById(section);
    let navElement = document.querySelector(`.${navs[index]}`);

    sectionElement.addEventListener("mouseenter", () => {
        navs.forEach(nav => document.querySelector(`.${nav}`).classList.remove("active"));
        navElement.classList.add("active");
    });
});

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Scroll Progress Indicator
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalScroll) * 100;
    scrollProgress.style.width = `${progress}%`;
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-overlay');
    loader.classList.add('hidden');
    setTimeout(() => {
        loader.style.display = 'none';
        animationContainer.style.display = 'flex';
    }, 500);



    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-per');
    skillBars.forEach(skillBar => {
        const targetWidth = skillBar.getAttribute('data-width');

        gsap.fromTo(skillBar,
            {
                width: "0%"
            },
            {
                width: targetWidth + "%",
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".skills-content",
                    start: "top center",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Hover effects
        skillBar.addEventListener('mouseover', () => {
            skillBar.style.background = 'linear-gradient(45deg, #00abf4, #365fa0)';
        });

        skillBar.addEventListener('mouseout', () => {
            skillBar.style.background = 'linear-gradient(45deg, #00abf4, #0097da)';
        });
    });
});