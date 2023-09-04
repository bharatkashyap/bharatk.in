const cacheName = 'bharatk.in/v1'

self.addEventListener('message', async (event) => {
  if (event.data === 'getFeed') {
    if (event.origin === 'http://127.0.0.1:5500') {
      const url = './static/rss.json'
      fetch(url)
        .then((response) => response.json())
        .then((rssData) => {
          event.source.postMessage(rssData)
        })
        .catch((error) => {
          console.error(error)
        })

      return
    }
    const today = new Date().toISOString().slice(0, 10)
    const cachedResponse = await caches.match(today)
    if (cachedResponse) {
      event.source.postMessage(await cachedResponse.text())
      return
    }

    const url = 'https://blog.bharatk.in/feed/json'
    try {
      const response = await fetch(url)
      const rssData = await response.json()
      const openedCache = await caches.open(cacheName)
      await openedCache.put(today, new Response(rssData))
      event.source.postMessage(rssData)
    } catch (error) {
      console.error(error)
    }
  }
})
