import FavoriteIdb from '../../data/favorite-idb'
import Template from '../templates/template'

const Favorites = {
  async render () {
    return `
    <section class="container py-10vh">
      <div id="content" class="mt-40">
        <h2 class="mb-20" tabindex="0">Restoran favoritmu</h2>
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
  }
}

export default Favorites
