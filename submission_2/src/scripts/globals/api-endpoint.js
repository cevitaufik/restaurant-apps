import CONFIG from './config'

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: id => `${CONFIG.BASE_URL}detail/${id}`,
  SMALL_IMAGES: id => `${CONFIG.BASE_URL}images/small/${id}`
}

export default API_ENDPOINT
