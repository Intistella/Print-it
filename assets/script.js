const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//* Déclaration des variables /arrowLeft et /arrowRight *//
//* Cela permet au code d'intéragir avec les éléments HTML, qui possédent les classes arrow_left et arrow_right *//

const previous = document.querySelector(".arrow_left")
const next = document.querySelector(".arrow_right")

const dots = document.querySelectorAll(".dot")
//* Séléction de tous les bullets points *//

let currentSlide = 0
//* Ainsi la première diapositive sera affichée par défaut *// 


//** Étape 2/5 : Ajouter des Event Listeners sur les flèches et mise en place du défilement infini **//

previous.addEventListener("click", function() {
    console.log("Clique sur la flèche gauche !")

	currentSlide--
	if (currentSlide < 0) {
		currentSlide = dots.length - 1
	}

	updateBulletPoint()
	updateSlideContent()
});

next.addEventListener("click", function() {
    console.log("Clique sur la flèche droite !")

	currentSlide++;
	if (currentSlide >= dots.length) {
		currentSlide = 0
	}

	updateBulletPoint()
	updateSlideContent()
});


//** Étape 3 : Ajouter des bullets points au slider **//

function updateBulletPoint() {
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("dot_selected")
        } else {
            dot.classList.remove("dot_selected")
        }
    });
}


//** Étape 4 : Modifier le slide au clic sur le bouton **//

function updateSlideContent() {
    const image = document.querySelector(".banner-img")
    const text = document.querySelector("#banner p")
    const currentSlideData = slides[currentSlide]
    text.innerHTML = currentSlideData.tagLine
	image.src = currentSlideData.image
}