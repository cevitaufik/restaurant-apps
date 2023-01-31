import DataSource from '../../data/data-source'
import Template from '../templates/template'

const Home = {
  async render () {
    return `
    <h2 class="mb-20" tabindex="0">Restoran kami</h2>
    <p class="mb-20" tabindex="0">
      Kami memiliki restoran yang tersebar diberbagai daerah dan kota-kota besar di Indonesia yang bisa Anda kunjungi kapan saja. Setiap restoran kami memiliki ciri khas tersendiri disetiap daerahnya lengkap dengan menu khas daerahnya masing-masing.
    </p>
    <div class="d-grid" id="card-container"></div>
    `
  },

  async afterRender () {
    // const movies = await TheMovieDbSource.nowPlayingMovies();
    // const moviesContainer = document.querySelector('#movies');
    // movies.forEach((movie) => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });

    const restaurants = await DataSource.list()
    const container = document.getElementById('card-container')

    restaurants.forEach(restaurant => {
      container.insertAdjacentHTML('beforeend', Template.listCard(restaurant))
    })
  }
}

export default Home
