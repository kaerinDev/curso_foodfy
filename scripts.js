const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function(){
        const imgRecipe = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `${imgRecipe}.png`
        modalOverlay.querySelector('.title').innerHTML = card.querySelector('.title').innerHTML
        modalOverlay.querySelector('.by').innerHTML=card.querySelector('.by').innerHTML
    })
}

document.querySelector('.close').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})


