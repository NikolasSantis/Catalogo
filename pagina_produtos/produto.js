

// Bloco carrossel de recomendados 

// Botões de girar no carrossel 
const recommended_left_arrow = document.getElementById('recommended_left_arrow');
const recommended_right_arrow = document.getElementById('recommended_right_arrow');

let recommended_carousel_side = 1;

// Função para girar o carrossel de recomendados 

function leftRecommendedCarousel() {

    // Variável para girar o carrossel para a esquerda
    let left_move_recommended_carousel = document.getElementById('recommended_items_carousel');

    // Bloco de condições para giro esquerdo
    if (recommended_carousel_side === 2) {
        recommended_carousel_side = 1;
        left_move_recommended_carousel.classList.remove('medium_carousel_side_2');
        left_move_recommended_carousel.classList.add('medium_carousel_side_1');
    }

    else if (recommended_carousel_side === 3) {
        recommended_carousel_side = 2;
        left_move_recommended_carousel.classList.remove('medium_carousel_side_3');
        left_move_recommended_carousel.classList.add('medium_carousel_side_2');
    }

    else if (recommended_carousel_side === 4) {
        recommended_carousel_side = 3;
        left_move_recommended_carousel.classList.remove('medium_carousel_side_4');
        left_move_recommended_carousel.classList.add('medium_carousel_side_3');
    }

    // Para mudar as setas quando a ação for realizada
    changeOpacityNavigationRecommendedCarousel();
}

function rightRecommendedCarousel() {

    // Variável para girar o carrossel para a esquerda
    let right_move_recommended_carousel = document.getElementById('recommended_items_carousel');

    // Bloco de condições para giro direito 
    if (recommended_carousel_side === 1) {
        recommended_carousel_side = 2;
        right_move_recommended_carousel.classList.remove('medium_carousel_side_1');
        right_move_recommended_carousel.classList.add('medium_carousel_side_2');
    }

    else if (recommended_carousel_side === 2) {
        recommended_carousel_side = 3;
        right_move_recommended_carousel.classList.remove('medium_carousel_side_2');
        right_move_recommended_carousel.classList.add('medium_carousel_side_3');
    }

    else if (recommended_carousel_side === 3) {
        recommended_carousel_side = 4;
        right_move_recommended_carousel.classList.remove('medium_carousel_side_3');
        right_move_recommended_carousel.classList.add('medium_carousel_side_4');
    }

    // Para mudar as setas quando a ação for realizada
    changeOpacityNavigationRecommendedCarousel();
}

function changeOpacityNavigationRecommendedCarousel () {

   // Se o carrossel estiver em um lado sem pontes a mais, 
    // a seta irá ficar mais transparente para que o usuário
    // saiba que não a mais itens disponiveis

    // Se estiver no quarto lado do carrossel a seta direita irá ficar mais transpaarente 
    if (recommended_carousel_side === 4) {
        recommended_right_arrow.removeAttribute('style', 'cursor: pointer');
        recommended_right_arrow.setAttribute('style', 'opacity: 0.5');
    }

    // Se estiver no primeiro lado do carrossel a seta esquerda irá ficar mais transparente
    else if (recommended_carousel_side === 1) {
        recommended_left_arrow.removeAttribute('style', 'cursor: pointer');
        recommended_left_arrow.setAttribute('style', 'opacity: 0.5');
    }

    // Se estiver em algum dos lados no meio do carrossel, as setas ficarão normal 
    else {
        recommended_right_arrow.setAttribute('style', 'cursor: pointer');
        recommended_right_arrow.removeAttribute('style', 'opacity: 0.5');

        recommended_left_arrow.setAttribute('style', 'cursor: pointer');
        recommended_left_arrow.removeAttribute('style', 'opacity: 0.5');
    }
}

// Execuções das funções acima 
changeOpacityNavigationRecommendedCarousel();

recommended_left_arrow.addEventListener('click', leftRecommendedCarousel);
recommended_right_arrow.addEventListener('click', rightRecommendedCarousel);



// Bloco carrossel de Semelhantes

const similar_left_arrow = document.getElementById('similar_left_arrow');
const similar_right_arrow = document.getElementById('similar_right_arrow');

let similar_carousel_side = 1;


// Funções para girar carrossel de itens semelhantes

function leftSimilarCarousel() {

    // Variábel para girar o carrossel para a esquerda 
    let left_move_similar_carousel = document.getElementById('similar_items_carousel');

    // Bloco de condições para giro esquerdo 
    if (similar_carousel_side === 2) {
        similar_carousel_side = 1;
        left_move_similar_carousel.classList.remove('medium_carousel_side_2');
        left_move_similar_carousel.classList.add('medium_carousel_side_1');
    }

    else if (similar_carousel_side === 3) {
        similar_carousel_side = 2;
        left_move_similar_carousel.classList.remove('medium_carousel_side_3');
        left_move_similar_carousel.classList.add('medium_carousel_side_2');
    }

    else if (similar_carousel_side === 4) {
        similar_carousel_side = 3;
        left_move_similar_carousel.classList.remove('medium_carousel_side_4');
        left_move_similar_carousel.classList.add('medium_carousel_side_3');
    }

    // Para mudar as setas quando a ação for realizada
    changeOpacityNavigationsSimilarCarousel();
}

function rightSimilarCarousel() {

    // Variável para girar o carrossel para a direita
    let right_move_similar_carousel = document.getElementById('similar_items_carousel');

    // Bloco de condições para giro direito
    if (similar_carousel_side === 1) {
        similar_carousel_side = 2;
        right_move_similar_carousel.classList.remove('medium_carousel_side_1');
        right_move_similar_carousel.classList.add('medium_carousel_side_2');
    }

    else if (similar_carousel_side === 2) {
        similar_carousel_side = 3;
        right_move_similar_carousel.classList.remove('medium_carousel_side_2');
        right_move_similar_carousel.classList.add('medium_carousel_side_3');
    }

    else if (similar_carousel_side === 3) {
        similar_carousel_side = 4;
        right_move_similar_carousel.classList.remove('medium_carousel_side_3');
        right_move_similar_carousel.classList.add('medium_carousel_side_4');
    }

    // Para mudar as setas quando a ação for realizada
    changeOpacityNavigationsSimilarCarousel();
}

function changeOpacityNavigationsSimilarCarousel() {

    // Se o carrossel estiver em um lado sem pontes a mais, 
    // a seta irá ficar mais transparente para que o usuário
    // saiba que não a mais itens disponiveis

    // Se estiver no quarto lado do carrossel a seta direita irá ficar mais transparente
    if (similar_carousel_side === 4) {
        similar_right_arrow.removeAttribute('style', 'cursor: pointer');
        similar_right_arrow.setAttribute('style', 'opacity: 0.5');
    }

    // Se estiver no primeiro lado do carrossel a seta esquerda irá ficar mais transparente
    else if (similar_carousel_side === 1) {
        similar_left_arrow.removeAttribute('style', 'cursor: pointer');
        similar_left_arrow.setAttribute('style', 'opacity: 0.5');
    }

    // Se estiver em algum dos lados do meio do carrossel, as setas ficaram normal 
    else {
        similar_right_arrow.setAttribute('style', 'cursor: pointer');
        similar_right_arrow.removeAttribute('style', 'opacity: 0.5');

        similar_left_arrow.setAttribute('style', 'cursor: pointer');
        similar_left_arrow.removeAttribute('style', 'opacity: 0.5');
    }
}

// Execução das funções
changeOpacityNavigationsSimilarCarousel();

similar_left_arrow.addEventListener('click', leftSimilarCarousel);
similar_right_arrow.addEventListener('click', rightSimilarCarousel);


// Bloco para dar zoom na main image 

const box_main_image = document.getElementById('box_main_image');
const main_image = document.getElementById('main_image');

box_main_image.addEventListener('mousemove', (e) => {

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    main_image.style.transformOrigin = `${x}px ${y}px`;
    main_image.style.transform = "scale(1.5)";
});

box_main_image.addEventListener('mouseleave', () => {

    main_image.style.transformOrigin = 'center center';
    main_image.style.transform = 'scale(1)';
});

