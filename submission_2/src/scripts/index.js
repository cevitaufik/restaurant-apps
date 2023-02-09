import 'regenerator-runtime' /* for async await transpile */
import '../styles/css/main.css'
import swRegister from './utils/sw-register'
import App from './views/app'

document
  .getElementById('menu')
  .addEventListener('click', e => {
    const navbarContainer = document.querySelector('.navbar .navbar-container')
    navbarContainer.classList.toggle('open')
  })

const app = new App(document.getElementById('main'))

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})

document
  .getElementById('skip-link')
  .addEventListener('click', e => {
    const target = document.getElementById('content').getClientRects()
    const navbar = document.querySelector('nav.navbar').getClientRects()

    window.scroll(0, target[0].y - navbar[0].height)
  })
