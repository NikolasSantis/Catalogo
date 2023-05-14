// Trocar cor do botão do carrossel

// Adicionar uma classe com margem left para as primeras imagens do carrossel dos
// itens populares, para que quando virar o carrossel, o quarto produto do lado 
// anterior não ficar aparecendo  

// Adicionar ação para os próximos dois lados do carrossel, pois ele trava no
// segundo lado e não anda mais pra frente


// Bloco para o primeiro slider da pagina 

const slides = document.getElementById('slide');
let count_slider = 1

setInterval(function() {
    nextImage()
}, 6000);

function nextImage() {
    count_slider++;

    if (count_slider > 4) {
        count_slider = 1
    }
    
    if (count_slider === 1) { slides.setAttribute('style', 'margin-left: 0'); }
    else if (count_slider === 2) { slides.setAttribute('style', 'margin-left: -25%'); }
    else if (count_slider === 3) { slides.setAttribute('style', 'margin-left: -50%'); }
    else if (count_slider === 4) { slides.setAttribute('style', 'margin-left: -75%'); }
}

// Fim primeiro slider 


// Carrossel de produtos populares

const popular_left_arrow = document.getElementById('popular_left_arrow');
const popular_right_arrow = document.getElementById('popular_right_arrow');

let carousel_side = 1;


// Funções para girar carrossel 

function leftPopularCarousel() {
    let left_move_popular_carousel = document.getElementById('popular_items_carousel');

    if (carousel_side === 2) { 
        carousel_side = 1
        left_move_popular_carousel.classList.remove('carousel_side_2');
        left_move_popular_carousel.classList.add('carousel_side_1'); 
    }
    else if (carousel_side === 3) {
        carousel_side = 2;
        left_move_popular_carousel.classList.remove('carousel_side_3');
        left_move_popular_carousel.classList.add('carousel_side_2'); 
    }
}

function rightPopularCarousel() {
    let right_move_popular_carousel = document.getElementById('popular_items_carousel');

    if (carousel_side === 1) {
        carousel_side = 2;
        right_move_popular_carousel.classList.remove('carousel_side_1')
        right_move_popular_carousel.classList.add('carousel_side_2');
    }
    else if (carousel_side === 2) { 
        carousel_side = 3;
        right_move_popular_carousel.classList('carousel_side_2');
        right_move_popular_carousel.classList('carousel_side_3');
    }
}





popular_left_arrow.addEventListener('click', leftPopularCarousel);
popular_right_arrow.addEventListener('click', rightPopularCarousel);
