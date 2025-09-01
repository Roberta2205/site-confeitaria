document.addEventListener('DOMContentLoaded', function () {
    const botaoInicio = document.getElementById('botão-inicio');
    const quemSomosSection = document.getElementById('quem-somos');
    const botaoConfeitaria = document.getElementById('botao-confeitaria');
    const bolinhosSection = document.getElementById('bolinhos');
    const botaoGaleria = document.getElementById('botao-galeria');
    const galeria = document.getElementById('galeria');
    const botaoDelivery = document.getElementById('botao-delivery')
    const finalDaPagina = document.getElementById('final-da-pagina')
    
    quemSomosSection.style.display = 'none';
    bolinhosSection.style.display = 'none'; 

    botaoInicio.addEventListener('click', function() {
        
        if (quemSomosSection.style.display === 'none' || quemSomosSection.style.display === '') {
            quemSomosSection.style.display = 'block';
        } else {
            quemSomosSection.style.display = 'none';
        }
    });

    botaoConfeitaria.addEventListener('click', function() {
        
        if (bolinhosSection.style.display === 'none' || bolinhosSection.style.display === '') {
            bolinhosSection.style.display = 'flex'; 
            bolinhosSection.style.opacity = 0; 
            let opacity = 0;

            
            const fadeIn = setInterval(function() {
                if (opacity >= 1) {
                    clearInterval(fadeIn);
                }
                bolinhosSection.style.opacity = opacity; 
                opacity += 0.1; 
            }, 50); 
        } else {
            bolinhosSection.style.display = 'none'; 
        }
    });
    
    botaoGaleria.addEventListener('click', function() {
                galeria.style.display = 'flex'; // Exibe a galeria
                galeria.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a galeria
            });
    
    botaoDelivery.addEventListener('click', function() {
                finalDaPagina.style.display = 'flex';
                finalDaPagina.scrollIntoView({ behavior: 'smooth' })
    })
});