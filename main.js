const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('sw.js')
    } catch (error) {
      console.error('Service worker registration failed:', error)
    }
  } else {
    console.log('Service workers are not supported.')
  }
}

registerServiceWorker()

const updateBlogList = (posts) => {
  const blogList = document.getElementById('blog-list')
  posts.forEach((post) => {
    const listItem = document.createElement('li')
    listItem.classList.add('d-flex', 'blog-list-item')
    const link = document.createElement('a')
    link.href = post.link
    link.textContent = post.title
    link.classList.add('blog-link', 'text-decoration-none')
    const date = document.createElement('time')
    date.textContent = post.pubDate.slice(0, 16)
    listItem.appendChild(link)
    listItem.appendChild(date)
    blogList.appendChild(listItem)
  })
}

const fetchFeed = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.active.postMessage('getFeed')
      })
      .catch((error) => {
        console.error(error)
      })
    navigator.serviceWorker.addEventListener('message', (event) => {
      const rssData = event.data

      const json = JSON.parse(rssData)
      const items = json.items
      const feed = {
        items: [],
      }
      for (let i = 0; i < 5; i++) {
        const item = items[i]
        const itemObj = {
          title: item.title,
          link: item.url,
          pubDate: new Date(item.date_published).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }),
        }
        feed.items.push(itemObj)
      }
      updateBlogList(feed.items)
      return feed
    })
  } else {
    console.log('Service workers are not supported.')
  }
}

fetchFeed()

const expandButtonClick = (e) => {
  // Get the id from the clicked button, and get the word after
  const id = e.target.id
  // Get all the hidden elements which are children of the section with the id and toggle the "hidden" class
  const section = document.getElementById(id)
  let selector
  let translucentSelector

  if (e.target.textContent === 'More') {
    e.target.textContent = 'Less'

    selector = '.hidden'
    translucentSelector = '.translucent'
  } else {
    e.target.textContent = 'More'

    selector = '.to-hide'
    translucentSelector = '.to-hide-translucent'
  }

  const elements = section.querySelectorAll(selector)
  elements.forEach((element) => {
    element.classList.toggle('hidden')
    element.classList.toggle('to-hide')
  })

  const translucentElements = section.querySelectorAll(translucentSelector)
  translucentElements.forEach((element) => {
    element.classList.toggle('translucent')
    element.classList.toggle('to-hide-translucent')
  })
}

const expandButtons = document.querySelectorAll('.overflow-button')
expandButtons.forEach((button) => {
  button.addEventListener('click', expandButtonClick)
})

const darkModeToggle = document.getElementById('darkModeToggle')

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    document.body.classList.add('latex-dark')
  } else {
    document.body.classList.remove('latex-dark')
  }
})
