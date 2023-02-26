const skipToContentInit = (content) => {
  const skipLink = document.getElementById('skip-link')

  skipLink
    .addEventListener('click', e => {
      const navbar = document.querySelector('nav.navbar').getClientRects()

      if (content.getClientRects()[0]) {
        window.scroll(0, content.getClientRects()[0].y - navbar[0].height)
        skipLink.blur()
      }
    })
}

export default skipToContentInit
