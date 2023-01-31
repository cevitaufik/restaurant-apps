import API_ENDPOINT from '../globals/api-endpoint'

class DataSource {
  static async list () {
    const response = await fetch(API_ENDPOINT.LIST)
    const responseJson = await response.json()
    return responseJson.restaurants
  }
}

export default DataSource
