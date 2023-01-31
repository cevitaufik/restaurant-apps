import API_ENDPOINT from '../../globals/api-endpoint'

class Template {
  static listCard (restaurant) {
    return `
    <article tabindex="0">
      <img src="${API_ENDPOINT.SMALL_IMAGES(restaurant.pictureId)}" alt="${restaurant.name}">
      <h3 class="mt-10 mb-5">${restaurant.name}</h3>

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
        <span id="city">${restaurant.city}</span>
      </p>

      <p id="description">${this.limitString(restaurant.description)}</p>
      <a href="#/detail/${restaurant.id}" class="link">Selengkapnya</a>
    </article>
    `
  }

  static limitString (string) {
    return `${string.substring(0, 150)}...`
  }
}

export default Template
