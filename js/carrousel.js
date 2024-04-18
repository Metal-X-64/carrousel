(function(){
    console.log("Vive Javascript");
    let carrousel = document.querySelector('.carrousel');
    console.log("conteneur carrousel = " + carrousel.tagName);
    let bouton = document.querySelector('.bouton__ouvrir');
    console.log("bouton = " + bouton.tagName);
    let carrousel__x = document.querySelector('.carrousel__x');
    console.log('carrousel__x' + carrousel__x.tagName);

/* écouteur pour ouvrir la boîte modale */
    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir'); // ouvrir le carrousel
    })

/* Écouteur pour fermer la boîte modale */
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir'); // fermer le carrousel
    })

})()