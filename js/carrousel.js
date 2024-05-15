(function(){
    console.log("Vive Javascript");
    let carrousel = document.querySelector('.carrousel');
    console.log("conteneur carrousel = " + carrousel.tagName);
    let bouton = document.querySelector('.bouton__ouvrir');
    console.log("bouton = " + bouton.tagName);
    let carrousel__x = document.querySelector('.carrousel__x');
    console.log('carrousel__x' + carrousel__x.tagName);
    let galerie = document.querySelector('.galerie');
    console.log('galerie = ' + galerie.tagName);

    let carrousel__figure = document.querySelector('.carrousel__figure');
    let carrousel__form = document.querySelector('.carrousel__form');

    /* récupère la première image de la galerie */
    //let galerie__img = galerie.querySelector('img');
    /* pour créer une collection d'images de la galerie */
    let galerie__img = galerie.querySelectorAll('img');
    console.log(galerie__img);
    let index = 0;
    for (const elm of galerie__img)
    {
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);
        index = index + 1;
    }

    /**
     * Création d'un radio bouton du carrousel
     * @param {*} index le numéro du radio
     */
    function creer_radio_carrousel(index) {
        let carrousel__radio = document.createElement('input');
        // class
        carrousel__radio.classList.add('carrousel__radio');
        // index
        carrousel__radio.dataset.index = index;
        // type
        carrousel__radio.type = "radio";
        // name
        carrousel__radio.name = "radio_carrousel";
        // ajouter dans carrousel__form
        carrousel__form.appendChild(carrousel__radio);
        // ajouter un écouteur qui permettra de changer l'opacité de l'image " index "
        carrousel__radio.addEventListener('mousedown', function(){
            //carrousel__figure.children.each((elm) => {elm.style.opacity = 0} );
            
            console.log("Nombre d'images dans le carrousel : " + carrousel__figure.children.length);
            for (const elm of carrousel__figure.children) {
                elm.style.opacity = 0;
            }
            
            carrousel__figure.children[index].style.opacity = 1;
        })

        //carrousel__img.children[index].style.opacity = 1;
    }

    /**
     * Créer l'image du carrousel à partir de la galerie
     * @param {*} index le numéro de l'image
     * @param elm l'élément image de la galerie
     */

    function creer_image_carrousel(index, elm) {
        console.log(elm.src)
        /* Création dynamique d'une image du carrousel */
        let carrousel__img = document.createElement('img');
        carrousel__img.src = elm.src;
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.dataset.index = index;
        carrousel__figure.appendChild(carrousel__img);
    }



/* écouteur pour ouvrir la boîte modale */
    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir'); // ouvrir le carrousel
    })
/* Écouteur pour fermer la boîte modale */
    carrousel__x.addEventListener('mousedown', function(){
        console.log('fermer carrousel')
        carrousel.classList.remove('carrousel--ouvrir'); // fermer le carrousel
    })



})()