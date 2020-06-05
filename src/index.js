console.log('%c HI', 'color: firebrick')

addEventListener("DOMContentLoaded", openFunction) 

function getDogImage (){
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json() )
    .then(data => {
        data.message.forEach( pictureURL => {
            renderImage(pictureURL)
        }) 
        console.log(data.message)
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



function openFunction(){
    getDogImage()
}

