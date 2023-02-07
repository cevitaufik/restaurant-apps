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

      <p id="description">${this.description(restaurant.description, sumary)}</p>
      ${this.cta(restaurant.id, sumary)}
      ${this.menu(restaurant)}
      ${this.reviews(restaurant)}
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
    return (sumary) ? `<a href="#/detail/${id}" class="link">Selengkapnya</a>` : ''
  }

  static menu (restaurant) {
    if (restaurant.menus) {
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

  static reviews (restaurant) {
    if (restaurant.customerReviews) {
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

  static limitString (string) {
    return `${string.substring(0, 150)}...`
  }
}

export default Template
