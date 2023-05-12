// Trocar cor do botão do carrossel


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
