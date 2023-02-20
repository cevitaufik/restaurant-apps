import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteIdb from '../src/scripts/data/favorite-idb'
import { buttonContainerInitiator } from './helpers/testFactories'

describe('Liking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the restaurant has not been liked before', async () => {
    await buttonContainerInitiator()

    expect(document.querySelector('.bi-heart'))
      .toBeTruthy()
  })

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('.bi-heart-fill'))
      .toBeFalsy()
  })

  it('should be able to like the restaurant', async () => {
    await buttonContainerInitiator()

    document.querySelector('button[id="favorite"]').dispatchEvent(new Event('click'))

    const restaurant = await FavoriteIdb.get(1)
    expect(restaurant).toEqual({ id: 1 })

    FavoriteIdb.delete(1)
  })

  it('should not add a restaurant again when its already liked', async () => {
    await buttonContainerInitiator()

    await FavoriteIdb.put({ id: 1 })
    document.querySelector('button[id="favorite"]').dispatchEvent(new Event('click'))

    expect(await FavoriteIdb.getAll()).toEqual([{ id: 1 }])
    FavoriteIdb.delete(1)
  })

  it('should not add a restaurant when it has no id', async () => {
    await buttonContainerInitiator(null)

    document.querySelector('button[id="favorite"]').dispatchEvent(new Event('click'))
    expect(await FavoriteIdb.getAll()).toEqual([])
  })
})
