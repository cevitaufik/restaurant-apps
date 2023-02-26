Feature('favorite restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorites')
})

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see('Restoran favoritmu')
  I.see('Tidak ada restaurant untuk ditampilkan')
})

Scenario('favorite restaurant', async ({ I }) => {
  I.amOnPage('/')
  I.see('Restoran kami')

  I.waitForElement('article h3', 2)

  const firstRestaurant = locate('article h3').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)

  I.seeElement('article a.link')
  I.click(locate('article a.link').first())

  I.waitForText(firstRestaurantName, 2)
  I.seeElement('button#favorite')
  I.click(locate('button#favorite'))
  I.seeElement('.bi-heart-fill')

  I.amOnPage('/#/favorites')
  I.waitForText(firstRestaurantName, 2)
  I.waitNumberOfVisibleElements('article', 1, 3)

  I.click(locate('article a.link').first())
  I.waitForElement('button#favorite', 2)
  I.click(locate('button#favorite'))
  I.seeElement('.bi-heart')

  I.amOnPage('/#/favorites')
  I.see('Tidak ada restaurant untuk ditampilkan')
})
