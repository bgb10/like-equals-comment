function comment() {}

function like() {
  const like = document.querySelector(
    '#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button-view-model > button'
  )
  console.log(like)
  like.click()
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')
  if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' })

  like()

  window.scrollTo(0, 9999)

  setTimeout(comment, 1000)
})

function submit() {
  let submitButton = document.querySelector('#submit-button > yt-button-shape > button')

  if (submitButton && !submitButton.disabled) {
    submitButton.click()
  }
}

function comment() {
  let placeholder = document.querySelector('#placeholder-area')

  if (placeholder) {
    placeholder.click()
    let textArea = document.querySelector('#contenteditable-root')
    textArea.focus()

    const { comment } = { comment: 'thank you for good video!' }
    document.execCommand('insertText', false, comment)

    setTimeout(submit, 200)
  } else {
    alert('no exists!')
  }
}
