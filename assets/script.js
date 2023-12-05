const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Longueur du Carrousel
const carousel = slides.length

//Slide actuel
let currentSlide = 0

//Initialisation de la bannière 
let img = document.querySelector('.banner-img')
img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"])

//Initialisation du texte
let tagText = document.getElementById('tagtext')
tagText.innerHTML = slides[currentSlide]["tagLine"]

//Initialisation des bullet points
for(let i=0; i< carousel; i++){
	if (i==0){
		let dot = document.createElement("div")
		dot.setAttribute("class","dot", "dot_selected")
		dot.setAttribute ("id", i)
		let parentElement = document.getElementById('dots')
		parentElement.appendChild(dot)
	}else{
		let dot = document.createElement("div")
		dot.setAttribute("class", "dot")
		dot.setAttribute("id", i)
		let parentElement = document.getElementById('dots')
		parentElement.appendChild(dot)
	}
}

//Event listener Previous
const arrowLeft = document.querySelector('.arrow_left')

function clickPrevious(){
	if(currentSlide == 0){
		currentSlide = carousel - 1
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"])
		tagText.innerHTML = slides[currentSlide]["tagLine"]
		dot = document.getElementById(currentSlide)
		dot.classlist.add("dot_selected")
		let normalDot = document.getElementById(0)
		normalDot.classlist.remove("dot_selected")
	}else{
		currentSlide--
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"])
		tagText.innerHTML = slides[currentSlide]["tagLine"]
		dot = document.getElementById(currentSlide)
		dot.classlist.add("dot_selected")
		let normalDot = document.getElementById(currentSlide + 1)
		normalDot.classlist.remove("dot_selected")
	}
}
arrowLeft.addEventListener('click', clickPrevious)

//Event listener Next
const arrowRight= document.querySelector('.arrow_right')

function clickNext(){
	if(currentSlide == carousel - 1){
		currentSlide = 0
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"])
		tagText.innerHTML = slides[currentSlide]["tagLine"]
		dot = document.getElementById(currentSlide)
		dot.classlist.add("dot_selected")
		let normalDot = document.getElementById(carousel - 1)
		normalDot.classlist.remove("dot_selected")
	}else{
		currentSlide++
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"])
		tagText.innerHTML = slides[currentSlide]["tagLine"]
		dot = document.getElementById(currentSlide)
		dot.classlist.add("dot_selected")
		let normalDot = document.getElementById(currentSlide - 1)
		normalDot.classlist.remove("dot_selected")
	}
}	
arrowRight.addEventListener('click', clickNext)
