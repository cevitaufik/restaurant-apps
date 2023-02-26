import DataSource from '../../data/data-source'
import UrlParser from '../../routes/url-parser'
import Template from '../templates/template'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import skipToContentInit from '../../utils/skip-to-content-helper'
import resetPosition from '../../utils/reset-position'

const Detail = {
  async render () {
    return `
    <section class="container py-10vh">
      <div id="content" class="detail">
        <div class="loading mt-40"></div>
      </div>
    </section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await DataSource.detail(url.id)
    const container = document.getElementById('content')

    container.innerHTML = Template.card(restaurant, false)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#favorite-container'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews
      }
    })

    resetPosition()

    skipToContentInit(document.querySelector('article h2'))
  }
}

export default Detail
