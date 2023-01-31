import 'regenerator-runtime' /* for async await transpile */
import '../styles/css/main.css'
import swRegister from './utils/sw-register'
import data from '../DATA.json'

window.addEventListener('load', () => {
  swRegister()
})

document
  .getElementById('menu')
  .addEventListener('click', e => {
    const navbarContainer = document.querySelector('.navbar .navbar-container')
    navbarContainer.classList.toggle('open')
  })

const baseArticle = document.querySelector('.content article')

function cloneElement (data) {
  const newArticle = baseArticle.cloneNode(true)

  newArticle.setAttribute('id', data.id)
  newArticle.querySelector('img').setAttribute('src', data.pictureId)
  newArticle.querySelector('img').setAttribute('alt', data.name)
  newArticle.querySelector('h3').innerText = data.name
  newArticle.querySelector('.rating #number').innerText = data.rating
  newArticle.querySelector('.location #city').innerText = data.city
  newArticle.querySelector('#description').innerText = data.description

  baseArticle.parentElement.insertAdjacentElement('afterbegin', newArticle)
}

data.restaurants.forEach(data => cloneElement(data))

baseArticle.remove()
