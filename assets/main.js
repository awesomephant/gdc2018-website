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
const getPersonByID = function (id) {
    id = parseInt(id);
    for (let i = 0; i < people.length; i++) {
        if (people[i].id === id) {
            return people[i]
        }
    }
}

const showStream = {
    online: null
}

var credentials = {};

let peopleList = document.querySelector('.people-list')

const shuffleImages = function () {
    let containers = document.querySelectorAll('.home-image');
    let imagesRandom = shuffle(images)
    if (containers.length > images.length) {
        console.error('Not enough images to fill all containers. See https://github.com/awesomephant/gdc2018-website/blob/master/README.md for instructions to add more images.')
    }
    for (let i = 0; i < containers.length; i++) {
        let container = containers[i]
        let image = images[i];
        if (image) {
            let creditElement = container.querySelector('.credit')
            creditElement.classList.add('color-' + image.color)
            container.style.backgroundImage = 'url(/assets/images/' + image.filename + ')';
            let person = getPersonByID(image.person)
            creditElement.innerHTML = person.first_name + ' ' + person.last_name;
            creditElement.setAttribute('href', person.url);
        }
    }
}
var httpRequest;

const handleTwitch = function (){
    let streamEl = document.querySelector('.stream-container');
    let indicatorEl = document.querySelector('.live-indicator');
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            console.log('Stream is online')
            indicatorEl.innerHTML = 'Online'
        } else {
            console.log('Stream is offline')
            //streamEl.classList.add('offline')
        }
    }
}

const checkIfStreamIsOnline = function () {
    // If this request is succesful, we're online (we don't even need to look at the response)
    makeRequest('https://api.twitch.tv/helix/streams?user_id=228850719', 'tofinjw4d6aeeg7yzb5vd8qv96b4xh', handleTwitch)
}

// Source: https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
function makeRequest(url, id, cb) {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
    httpRequest.onreadystatechange = cb;
    httpRequest.open('GET', url);
    httpRequest.setRequestHeader('Client-ID', id);
    httpRequest.responseType = 'json'
    httpRequest.send();
}
checkIfStreamIsOnline();
shuffleImages();