import FavoriteIdb from '../src/scripts/data/favorite-idb'
import { buttonContainerInitiator } from './helpers/testFactories'

describe('Unliking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteIdb.put({ id: 1 })

    await buttonContainerInitiator()
  })

  afterEach(async () => {
    await FavoriteIdb.delete(1)
  })

  it('should display liked widget when the restaurant has been liked', async () => {
    expect(document.querySelector('.bi-heart-fill'))
      .toBeTruthy()
  })

  it('should not display like widget when the restaurant has been liked', async () => {
    expect(document.querySelector('.bi-heart'))
      .toBeFalsy()
  })

  it('should be able to remove liked restaurant from the list', async () => {
    document.querySelector('button[id="favorite"]').dispatchEvent(new Event('click'))
    expect(await FavoriteIdb.getAll()).toEqual([])
  })

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await FavoriteIdb.delete(1)

    document.querySelector('button[id="favorite"]').dispatchEvent(new Event('click'))
    expect(await FavoriteIdb.getAll()).toEqual([])
  })
})
