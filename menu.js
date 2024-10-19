window.addEventListener("scroll", function(){ 
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})



    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute('href'); // Obtém o ID do alvo
            const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

            targetElement.scrollIntoView({
                behavior: 'smooth' // Adiciona uma rolagem suave
            });
        });
    });
