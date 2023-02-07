import DataSource from '../../data/data-source'
import UrlParser from '../../routes/url-parser'
import Template from '../templates/template'

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
  }
}

export default Detail
