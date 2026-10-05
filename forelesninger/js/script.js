// Henter HTML-elementet med id="ham"
const ham = document.getElementById("ham")

const ham = document.getElementById('close-ham')

const ham = document.getElementById('menu')

ham.addEventListener('click', ()=> {
menubar.style.display = 'flex'

    console.log("knappen er trykket på") 
})

closeHam.addEventListener('click', () => ){
    menubar.style.display = 'none'

    console.log('menyen er lukket')
}