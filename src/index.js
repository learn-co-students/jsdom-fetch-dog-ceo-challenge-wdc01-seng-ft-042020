console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(jAry => jAry["message"].forEach(addImgToDom))
})

function addImgToDom(imageURL) {
    let imageContainer = document.querySelector("#dog-image-container")
    let pic = document.createElement("img")
    pic.src = imageURL
    imageContainer.appendChild(pic)
}
