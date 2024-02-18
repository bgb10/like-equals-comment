;(async () => {
  setTimeout(async () => {
    let like = document.querySelector(
      '#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model'
    )

    console.log(like)

    if (like) {
      like.addEventListener('click', async (e) => {
        // if (like.getAttribute('active') == 'true') return

        document.querySelector('#placeholder-area').click()

        let textArea = document.querySelector('#contenteditable-root')
        textArea.focus()

        // WARNING: non blocking function!
        const { comment } = await chrome.storage.local.get(['comment'])
        document.execCommand('insertText', false, comment)

        setTimeout(() => {
          let submitButton = document.querySelector('#submit-button > yt-button-shape > button')
          submitButton.click()
        }, 200)
      })
    }
  }, 300)
})()
