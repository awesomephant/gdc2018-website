/**
 * Shuffles array in place. Source: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/**
 * Returns a person with the given ID
 * @param {number} id Integer ID
 * @returns {object} Person object.
 */
const getPersonByID = function(id){
    id = parseInt(id);
    for (let i = 0; i < people.length; i++){
        if (people[i].id === id){
            return people[i]
        }
    }
}
let peopleList = document.querySelector('.people-list')

const shuffleImages = function(){
    let containers = document.querySelectorAll('.home-image');
    let imagesRandom = shuffle(images)
    if (containers.length > images.length){
        console.error('Not enough images to fill all containers. See https://github.com/awesomephant/gdc2018-website/blob/master/README.md for instructions to add more images.')
    }
    for (let i = 0; i < containers.length; i++){
        let container = containers[i]
        let image = images[i];
        if(image){
            let creditElement = container.querySelector('.credit')
            creditElement.classList.add('color-' + image.color)
            container.style.backgroundImage = 'url(/assets/images/' + image.filename + ')';
            let person = getPersonByID(image.person)
            creditElement.innerHTML = person.first_name + ' ' + person.last_name;
            creditElement.setAttribute('href', person.url);
        }        
    }
}

shuffleImages();