console.log('%c HI', 'color: firebrick')


addEventListener("DOMContentLoaded", openFunction) 

// Image Logic

function getDogImage (){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json() )
    .then(data => {
        data.message.forEach( pictureURL => {
            renderImage(pictureURL)
        }) 
    })  
}


function renderImage (pickURL) {
    let imageContainer = document.getElementById("dog-image-container")
    let imageList = document.createElement("li")
    imageContainer.appendChild(imageList)
    let image = document.createElement("img")
    image.src = pickURL
    image.alt = "image of dog"
    image.style.width = "50%"
    imageList.appendChild(image)
}

// Breed Logic

function getDogBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then( res => res.json() )
    .then( data => {
        //got an object, how do we iterate?
        const breedsArray = Object.keys(data.message)
        breedsArray.forEach((breed) => { renderBreed(breed)})
       // console.log(data.message)
     
    })
}

function renderBreed(breed) {
    let ulContainer = document.getElementById("dog-breeds");
    let liElement= document.createElement('li');
    liElement.innerText = breed;
    
    ulContainer.appendChild(liElement);
    liElement.addEventListener('click', handleClick)
}

function handleClick(e) {
   let liBreed = e.target
   let r = Math.ceil(Math.random()*255)
   let g = Math.ceil(Math.random()*255)
   let b = Math.ceil(Math.random()*255)
   liBreed.style.color =  `rgb(${r}, ${g}, ${b})`
}

// Main Function

function openFunction(){
    getDogImage()
    getDogBreed()
    
}

