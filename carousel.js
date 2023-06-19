// Aguarda o carregamento completo do documento antes de executar o código
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona todos os itens do carrossel
    var carouselItems = document.querySelectorAll('.gallery .item');

    // Seleciona todos os indicadores do carrossel
    var indicators = document.querySelectorAll('.carousel-indicators .indicator');

    // Seleciona o botão de navegação anterior
    var prevButton = document.querySelector('.arrow-left');

    // Seleciona o botão de navegação seguinte
    var nextButton = document.querySelector('.arrow-right');
    
    // Variável para armazenar o índice atual do item no carrossel
    var currentIndex = 0;

    // Função para exibir o próximo item no carrossel
    function nextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    // Função para exibir o item anterior no carrossel
    function prevItem() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    // Função para atualizar o estado do carrossel
    function updateCarousel() {
        // Remove a classe 'current-item' de todos os itens e a classe 'active' de todos os indicadores
        for (var i = 0; i < carouselItems.length; i++) {
            carouselItems[i].classList.remove('current-item');
            indicators[i].classList.remove('active');
        }
        
        // Adiciona a classe 'current-item' ao item atual e a classe 'active' ao indicador correspondente
        carouselItems[currentIndex].classList.add('current-item');
        indicators[currentIndex].classList.add('active');
        
        // Calcula a posição de deslocamento horizontal (translateX) para exibir o item atual no carrossel
        var translateX = -currentIndex * 100 + '%';
        document.querySelector('.gallery').style.transform = 'translateX(' + translateX + ')';
    }

    // Adiciona os gatilhos de evento para os botões de navegação
    prevButton.addEventListener('click', prevItem);
    nextButton.addEventListener('click', nextItem);
    
    // Adiciona os gatilhos de evento para os indicadores
    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener('click', function() {
            // Obtém o índice do indicador clicado
            var index = parseInt(this.getAttribute('data-index'));
            
            // Define o índice atual como o índice do indicador clicado e atualiza o carrossel
            currentIndex = index;
            updateCarousel();
        });
    }
});
