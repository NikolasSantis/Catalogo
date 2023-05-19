// Trocar cor do botão do carrossel


// ADICIONAR UM ESPAÇO PARA DECORAÇÕES


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

let popular_carousel_side = 1;


// Funções para girar carrossel de itens populares

function leftPopularCarousel() {
    let left_move_popular_carousel = document.getElementById('popular_items_carousel');

    if (popular_carousel_side === 2) { 
        popular_carousel_side = 1
        left_move_popular_carousel.classList.remove('popular_items_carousel_side_2');
        left_move_popular_carousel.classList.add('popular_items_carousel_side_1'); 
    }
    else if (popular_carousel_side === 3) {
        popular_carousel_side = 2;
        left_move_popular_carousel.classList.remove('popular_items_carousel_side_3');
        left_move_popular_carousel.classList.add('popular_items_carousel_side_2'); 
    }
    else if (popular_carousel_side === 4) {
        popular_carousel_side = 3;
        left_move_popular_carousel.classList.remove('popular_items_carousel_side_4');
        left_move_popular_carousel.classList.add('popular_items_carousel_side_3');
    }
    
    changeOpacityNavigationPopularItemsButton();
    
}

function rightPopularCarousel() {
    let right_move_popular_carousel = document.getElementById('popular_items_carousel');

    if (popular_carousel_side === 1) {
        popular_carousel_side = 2;
        right_move_popular_carousel.classList.remove('popular_items_carousel_side_1');
        right_move_popular_carousel.classList.add('popular_items_carousel_side_2');
    }
    else if (popular_carousel_side === 2) { 
        popular_carousel_side = 3;
        right_move_popular_carousel.classList.remove('popular_items_carousel_side_2');
        right_move_popular_carousel.classList.add('popular_items_carousel_side_3');
    }
    else if (popular_carousel_side === 3) {
        popular_carousel_side = 4;
        right_move_popular_carousel.classList.remove('popular_items_carousel_side_3');
        right_move_popular_carousel.classList.add('popular_items_carousel_side_4');
    }

    changeOpacityNavigationPopularItemsButton();

}

function changeOpacityNavigationPopularItemsButton() {
    
    // Se estiver no quarto lado do carrossel a seta irá ficar mais transparente

    if (popular_carousel_side === 4) {
        popular_right_arrow.removeAttribute('style', 'cursor: pointer');
        popular_right_arrow.setAttribute('style', 'opacity: 0.5');
    }

    // Se estiver no primeiro lado do carrossel a seta irá ficar mais transparente

    else if (popular_carousel_side === 1) {
        popular_left_arrow.removeAttribute('sytle','cursor: pointer');
        popular_left_arrow.setAttribute('style', 'opacity: 0.5');
    }

    // Se estiver em algum dos lados do meio do carrossel, as setas ficaram normal

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

const categories_left_arrow = document.getElementById('categories_left_arrow');
const categoires_right_arrow = document.getElementById('categoires_rigt_arrow');

let categories_carousel_side = 1;


function leftCategoriesCarousel() {
    let left_move_categories_carousel = document.getElementById('categories_carousel_items');

    if (categories_carousel_side === 2) {   
        categories_carousel_side = 1;
        left_move_categories_carousel.classList.remove('categories_carousel_side_2');
        left_move_categories_carousel.classList.add('categories_carousel_side_1');
    }
    else if (categories_carousel_side === 3) {
        categories_carousel_side = 2;
        left_move_categories_carousel.classList.remove('categories_carousel_side_3');
        left_move_categories_carousel.classList.add('categories_carousel_side_2');
    }
    changeOpacityNavigationCategoriesCarouselButton();

}

function rightCategoriesCarousel() {
    let right_move_categories_carousel = document.getElementById('categories_carousel_items');

    if (categories_carousel_side === 1) {
        categories_carousel_side = 2;
        right_move_categories_carousel.classList.remove('categories_carousel_side_1');
        right_move_categories_carousel.classList.add('categories_carousel_side_2');
    }
    else if (categories_carousel_side === 2) {
        categories_carousel_side = 3;
        right_move_categories_carousel.classList.remove('categories_carousel_side_2');
        right_move_categories_carousel.classList.add('categories_carousel_side_3');
    }

    changeOpacityNavigationCategoriesCarouselButton();
}

function changeOpacityNavigationCategoriesCarouselButton() {

    // Se estiver no primeiro lado do carrossel a seta irá ficar mais transparente

    if (categories_carousel_side === 1) {
        categories_left_arrow.removeAttribute('style', 'cursor: pointer');
        categories_left_arrow.setAttribute('style','opacity: 0.5');
    }

    // Se estiver no terceiro lado do carrossel a seta irá ficar mais transparente

    else if (categories_carousel_side === 3) {
        categories_right_arrow.removeAttribute('style', 'cursor: pointer');
        categories_right_arrow.setAttribute('style','opacity: 0.5');
    }

    // Se estiver em algum dos lados do meio do carrossel, as setas ficaram normal

    else {
        categories_left_arrow.removeAttribute('style','opacity: 0.5');
        categories_left_arrow.setAttribute('style', 'cursor: pointer');

        categories_right_arrow.removeAttribute('style','opacity: 0.5');
        categories_right_arrow.setAttribute('style','cursor: pointer');
    }
    console.log(categories_carousel_side);
}



changeOpacityNavigationCategoriesCarouselButton();

categories_left_arrow.addEventListener('click', leftCategoriesCarousel);
categories_right_arrow.addEventListener('click', rightCategoriesCarousel);
