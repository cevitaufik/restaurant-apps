import API_ENDPOINT from '../../globals/api-endpoint'

class Template {
  static card (restaurant, sumary = true) {
    return `
    <article tabindex="0">
      <img src="${API_ENDPOINT.SMALL_IMAGES(restaurant.pictureId)}" alt="${restaurant.name}">
      ${this.heading(restaurant.name, sumary)}

      <span class="rating mt-5 my-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <span id="number">${restaurant.rating}</span>
      </span>

      <p class="location">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <span id="city">${this.address(restaurant, sumary)}</span>
      </p>

      <div class="my-10" id="favorite-container"></div>

      <p id="description">${this.description(restaurant.description, sumary)}</p>
      ${this.cta(restaurant.id, sumary)}
      ${this.menu(restaurant, sumary)}
      ${this.reviews(restaurant, sumary)}
      </article>
    `
  }

  static heading (name, sumary) {
    return (sumary) ? `<h3 class="mt-10 mb-5">${name}</h3>` : `<h2 class="mt-10 mb-5">${name}</h2>`
  }

  static address (restaurant, sumary) {
    return (sumary) ? restaurant.city : `${restaurant.address}. ${restaurant.city}`
  }

  static description (string, limit) {
    return (limit) ? this.limitString(string) : string
  }

  static cta (id, sumary) {
    return (sumary) ? `<a href="#/detail/${id}" class="link"><span>Selengkapnya</span></a>` : ''
  }

  static menu (restaurant, sumary) {
    if (restaurant.menus && !sumary) {
      return `
      <h3 class="mt-10">Menu makanan:</h3>
      <ul class="ms-20">
        ${this.menuItem(restaurant.menus.foods)}
      </ul>
      <h3 class="mt-10">Menu minuman:</h3>
      <ul class="ms-20">
      ${this.menuItem(restaurant.menus.drinks)}
      </ul>
      `
    }

    return ''
  }

  static reviews (restaurant, sumary) {
    if (restaurant.customerReviews && !sumary) {
      return `
      <h3 class="mt-10">Reviews:</h3>
      ${this.reviewElement(restaurant.customerReviews)}
      `
    }

    return ''
  }

  static menuItem (menus) {
    let item = ''

    menus.forEach(menu => {
      item += `<li>${menu.name}</li>`
    })

    return item
  }

  static reviewElement (reviews) {
    let element = ''

    reviews.forEach(review => {
      element += `
      <h4 class="mt-10">${review.name}</h4>
      <small>${review.date}</small>
      <p class="mt-5">${review.review}</p>
      `
    })

    return element
  }

  static favorite () {
    return `
    <div class="my-10">
      <button id="favorite">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
      </button>
    </div>
    `
  }

  static favorited () {
    return `
    <div class="my-10">
      <button class="fill" id="favorite">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      </button>
    </div>
    `
  }

  static limitString (string) {
    return `${string.substring(0, 150)}...`
  }
}

export default Template
