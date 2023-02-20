import FavoriteIdb from '../data/favorite-idb'
import Template from '../views/templates/template'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (id && await this._isRestaurantExist(id)) {
      return this._renderLiked()
    }

    return this._renderLike()
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteIdb.get(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = Template.favorite()

    const likeButton = document.querySelector('#favorite')
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.put(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = Template.favorited()

    const likeButton = document.querySelector('#favorite')
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.delete(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
