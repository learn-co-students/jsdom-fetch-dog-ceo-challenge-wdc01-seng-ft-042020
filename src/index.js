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
    image.style.width = "40vw"
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

// Render Options

function renderOptions(){
    let dropDownMenu = document.querySelector("#breed-dropdown")
    for(let i = 97; i <= 122; i++) {
        let option = document.createElement("option")
        option.value = String.fromCharCode(i)
        option.innerText = String.fromCharCode(i)
        dropDownMenu.appendChild(option)
    }
}

function selectMenu(){
    let getGetMenu = document.querySelector("select")
    getGetMenu.addEventListener("change", handleMenuClick)
}

function handleMenuClick(e){
   const selectedLetter = e.target.value
   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
   fetch(breedUrl)
   .then( res => res.json() ) 
   .then( data => {
    const breedsArray = Object.keys(data.message)
    let filteredBreed = breedsArray.filter((breed) => {return breed[0] === selectedLetter })
    reRenderBreeds(filteredBreed)
    }   
    )  
}

function reRenderBreeds(arr) {
   let dogBreeds = document.getElementById("dog-breeds")
   dogBreeds.innerHTML = ""
   arr.forEach(breedName => { 
    let listEl = document.createElement("li")
    listEl.innerText = breedName
    dogBreeds.appendChild(listEl)
   })
}


// Main Function

function openFunction(){
    getDogImage()
    getDogBreed()
    renderOptions()
    selectMenu()
}

