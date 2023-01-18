import 'regenerator-runtime' /* for async await transpile */
import '../styles/css/main.css'
import restaurants from '../DATA.json'

console.log(restaurants)

document
  .getElementById('menu')
  .addEventListener('click', e => {
    const navbarContainer = document.querySelector('.navbar .navbar-container')
    navbarContainer.classList.toggle('show')
    navbarContainer.classList.toggle('hide')
  })
