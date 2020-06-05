console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", () => {
    let allDogBreeds;
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
        .then( () => {
            let ulBreed = document.querySelector("#dog-breeds")
            allDogBreeds = [...ulBreed.children]
        })
    let ulBreed = document.querySelector("#dog-breeds")
    ulBreed.addEventListener("click", handleColorClick)

    let dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener("change", (e) => {handleChange(e, allDogBreeds)})
})

function handleChange(e, breedAry) {
    console.log(breedAry)
    let ulBreed = document.querySelector("#dog-breeds")
    let selected = breedAry.filter(breed => breed.innerText.startsWith(e.target.value))
    ulBreed.innerHTML = ''
    selected.forEach( goodBoy => ulBreed.appendChild(goodBoy))
}

function handleColorClick(e) {
    // debugger
    if (e.target.nodeName === "LI") {
        console.log("HELLO")
        e.target.style.color = "blue"
    }
}

function addImgToDom(imageURL) {
    let imageContainer = document.querySelector("#dog-image-container")
    let pic = document.createElement("img")
    pic.src = imageURL
    imageContainer.appendChild(pic)
}

function addBreedToDom(breedKey, breedAry) {
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
