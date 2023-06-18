document.addEventListener('DOMContentLoaded', function() {
    var carouselItems = document.querySelectorAll('.gallery .item');
    var indicators = document.querySelectorAll('.carousel-indicators .indicator');
    var prevButton = document.querySelector('.arrow-left');
    var nextButton = document.querySelector('.arrow-right');
    
    var currentIndex = 0;
    
    function nextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }
    
    function prevItem() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }
    
    function updateCarousel() {
        for (var i = 0; i < carouselItems.length; i++) {
            carouselItems[i].classList.remove('current-item');
            indicators[i].classList.remove('active');
        }
        carouselItems[currentIndex].classList.add('current-item');
        indicators[currentIndex].classList.add('active');
        var translateX = -currentIndex * 100 + '%';
        document.querySelector('.gallery').style.transform = 'translateX(' + translateX + ')';
    }
    
    prevButton.addEventListener('click', prevItem);
    nextButton.addEventListener('click', nextItem);
    
    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener('click', function() {
            var index = parseInt(this.getAttribute('data-index'));
            currentIndex = index;
            updateCarousel();
        });
    }
});