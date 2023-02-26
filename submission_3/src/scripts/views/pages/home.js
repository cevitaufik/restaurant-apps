import DataSource from '../../data/data-source'
import resetPosition from '../../utils/reset-position'
import skipToContentInit from '../../utils/skip-to-content-helper'
import Template from '../templates/template'

const Home = {
  async render () {
    return `
    <section>
      <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
          <img src='./images/heros/hero-image_4-large.jpg' alt="selerakita">
        </picture>
        <div class="hero-text">
          <h1>Selerakita</h1>
          <div>Citarasa istimewa</div>
        </div>
      </div>
    </section>
    <section class="container py-10vh">
      <div id="content" tabindex="0">
        <h2 class="mb-20" tabindex="0">Restoran kami</h2>
        <p class="mb-20" tabindex="0">
          Kami memiliki restoran yang tersebar diberbagai daerah dan kota-kota besar di Indonesia yang bisa Anda kunjungi kapan saja. Setiap restoran kami memiliki ciri khas tersendiri disetiap daerahnya lengkap dengan menu khas daerahnya masing-masing.
        </p>
        <div class="d-grid" id="card-container"></div>
      </div>
    </section>
    `
  },

  async afterRender () {
    const restaurants = await DataSource.list()
    const container = document.getElementById('card-container')

    restaurants.forEach(restaurant => {
      container.insertAdjacentHTML('beforeend', Template.card(restaurant))
    })

    resetPosition()

    skipToContentInit(document.getElementById('content'))
  }
}

export default Home
