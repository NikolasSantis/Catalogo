// Trocar cor do botão do carrossel

// Ajustar nome da variavel carousel_side para popular_carousel_side


// Arrumar o class, para classe apenas de movimento de seus respectivos
// carrosseis, pois nem todo carrossel é do mesmo tamanho, quando arrumar
// os nomes das classes já estarão no arquivo script.js


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


// Bloco Carrossel de produtos populares

const popular_left_arrow = document.getElementById('popular_left_arrow');
const popular_right_arrow = document.getElementById('popular_right_arrow');

let carousel_side = 1;


// Funções para girar carrossel de itens populares

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
    else if (carousel_side === 4) {
        carousel_side = 3;
        left_move_popular_carousel.classList.remove('carousel_side_4');
        left_move_popular_carousel.classList.add('carousel_side_3')
    }
    
    changeOpacityNavigationPopularItemsButton();
    
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
        right_move_popular_carousel.classList.remove('carousel_side_2');
        right_move_popular_carousel.classList.add('carousel_side_3');
    }
    else if (carousel_side === 3) {
        carousel_side = 4;
        right_move_popular_carousel.classList.remove('carousel_side_3');
        right_move_popular_carousel.classList.add('carousel_side_4');
    }

    changeOpacityNavigationPopularItemsButton();

}

function changeOpacityNavigationPopularItemsButton() {
    
    // Se estiver no quarto lado do carrossel a seta irá ficar mais transparente

    if (carousel_side === 4) {
        popular_right_arrow.removeAttribute('style', 'cursor: pointer');
        popular_right_arrow.setAttribute('style', 'opacity: 0.5');
    }

    else if (carousel_side === 1) {
        popular_left_arrow.removeAttribute('sytle','cursor: pointer');
        popular_left_arrow.setAttribute('style', 'opacity: 0.5');
    }

    else {
        popular_right_arrow.setAttribute('style', 'cursor: pointer');
        popular_right_arrow.removeAttribute('style', 'opacity: 0.5');

        popular_left_arrow.setAttribute('style', 'cursor: pointer');
        popular_left_arrow.removeAttribute('style', 'opacity: 0.5');
    }
}    

changeOpacityNavigationPopularItemsButton();
popular_left_arrow.addEventListener('click', leftPopularCarousel);
popular_right_arrow.addEventListener('click', rightPopularCarousel);

// Fim Bloco Carrossel de produtos populares


// Bloco Carrossel Categorias 

const categories_left_arrow = documet.getElementById('categories_left_arrow');
const categoires_right_arrow = document.getElementById('categoires_rigt_arrow');

let categories_carousel_side = 1;


function leftCategoriesCarousel() {
    let left_move_categories_carousel = document.getElementById('categories_carousel');

    if (categories_carousel_side === 2) {   
        left_move_categories_carousel.classList.remove('categories_carousel_side_2');
        left_move_categories_carousel.classList.add('categories_carousel_side_1');
    }
    else if (categories_carousel_side === 3) {
        left_move_categories_carousel.classList.remove('categories_carousel_side_3');
        left_move_categories_carousel.classList.add('categories_carousel_side_2');
    }

}

function rightSideOfCarousel() {
    let right_move_categories_carousel = document.getElementById('categories_carousel');

    if (categories_carousel_side === 1) {
        right_move_categories_carousel.classList.remove('categories_carousel_side_1');
        right_move_categories_carousel.classList.add('categories_carousel_side_2');
    }
    else if (categories_carousel_side === 2) {
        right_move_categories_carousel.classList.remove('categories_carousel_side_2');
        right_move_categories_carousel.classList.add('categories_carousel_side_3');
    }
}



// Adicionar função mudança de opacidade do categories_carousel


// Chamar mudança de opacidade do categories_carousel 
// Adicionar evento de click seta esquerda
// Adicionar evento de click seta direita