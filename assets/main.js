let peopleToggle = document.querySelector('.togglePeople')
let peopleList = document.querySelector('.people-list')

peopleToggle.addEventListener('click', function(){
    peopleToggle.classList.toggle('active')
    peopleList.classList.toggle('active')
})

