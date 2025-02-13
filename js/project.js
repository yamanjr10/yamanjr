const container = document.getElementById('container');
    
    const projects = [
    {
        id: '1',
        title: 'Calculator',
        description: 'A simple calculator using HTML, CSS &JS.',
        coverImage: 'images/cal.jpg',
        demoUrl: '**',
        technologies: ['HTML', 'CSS', 'JS']
    },
    
];

projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'display';
    projectCard.innerHTML = `
        <a href="${project.demoUrl}" target="_blank">
            <img src="${project.coverImage}" alt="${project.title}">
                 
            <h2>${project.title}</h2>
                 <div class="technologies">
                ${project.technologies.map(tech => 
                    `<span class="tech-badge">${tech}</span>`
                ).join('')}
            </div>
            <p>${project.description}</p>
            
        </a>
    `;

    // Animate card entry
    gsap.from(projectCard, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: 0.2 * index,
        ease: 'power2.out'
    });

    container.appendChild(projectCard);
});
