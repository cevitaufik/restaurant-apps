import FavoriteIdb from '../../data/favorite-idb'
import skipToContentInit from '../../utils/skip-to-content-helper'
import Template from '../templates/template'

const Favorites = {
  async render () {
    return `
    <section class="container py-10vh">
      <div id="content" class="mt-40">
        <h2 class="mb-20" tabindex="0">Restoran favoritmu</h2>
        <p class="mb-20" tabindex="0">
          Restoran-restoran terbaik kami yang menjadi favorit kamu.
        </p>
        <div id="card-container">
          <div class="loading mt-40"></div>
        </div>
      </div>
    </section>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteIdb.getAll()
    const container = document.getElementById('card-container')
    container.classList.add('d-grid')
    container.innerHTML = ''

    if (restaurants.length) {
      restaurants.forEach(restaurant => {
        container.insertAdjacentHTML('beforeend', Template.card(restaurant, true))
      })
    } else {
      container.insertAdjacentHTML('beforeend', '<div class="mt-40">Tidak ada restaurant untuk ditampilkan</div>')
    }

    window.scroll(0, 0)

    skipToContentInit(document.getElementById('content'))
  }
}

export default Favorites
