function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const showStream = {
  online: null,
}

var credentials = {}

let peopleList = document.querySelector(".people-list")

const shuffleImages = function () {
  let containers = document.querySelectorAll(".home-image")
  console.log(people)
  console.log(images)
  shuffle(images)
  if (containers.length > images.length) {
    console.error("Not enough images to fill all containers. See https://github.com/awesomephant/gdc2018-website/blob/master/README.md for instructions to add more images.")
  }
  for (let i = 0; i < containers.length; i++) {
    let container = containers[i]
    let image = images[i]
    if (image) {
      let creditElement = container.querySelector(".credit")
      creditElement.classList.add("color-" + image.color)
      container.style.backgroundImage = "url(/assets/images/" + image.filename + ")"
      let person = people.find((p) => p.id === image.person)
      creditElement.innerHTML = person.first_name + " " + person.last_name
      creditElement.setAttribute("href", person.website)
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  shuffleImages()
})
