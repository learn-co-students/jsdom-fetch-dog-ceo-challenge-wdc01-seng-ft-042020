console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => json["message"].forEach(addImgToDom))
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => json["message"]) //we now have an object
        .then(msg => {
            for (const key in msg) {
                addBreedToDom(key, msg[key])
            }
        })
})

function addImgToDom(imageURL) {
    let imageContainer = document.querySelector("#dog-image-container")
    let pic = document.createElement("img")
    pic.src = imageURL
    imageContainer.appendChild(pic)
}

function addBreedToDom(breedKey, breedAry) {
    //console.log(breedKey)

    let ulBreed = document.querySelector("#dog-breeds")
    if (breedAry.length === 0) {
        let li = document.createElement("li")
        li.innerText = breedKey
        ulBreed.appendChild(li)
    }
    else {
        for (let ind = 0; ind < breedAry.length; ind++) {
            let li = document.createElement("li")
            li.innerText = `${breedAry[ind]} ${breedKey}`
            ulBreed.appendChild(li)
        }    
    }

}
