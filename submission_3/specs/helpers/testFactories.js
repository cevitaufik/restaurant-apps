import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'

const buttonContainerInitiator = async (restaurantId = 1) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.getElementById('likeButtonContainer'),
    restaurant: {
      id: restaurantId
    }
  })
}

export { buttonContainerInitiator }
