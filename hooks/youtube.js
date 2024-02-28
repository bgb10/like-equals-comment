function like() {
  const like = document.querySelector(
    '#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button-view-model > button'
  )

  like.click()
}

function submit() {
  let submitButton = document.querySelector('#submit-button > yt-button-shape > button')

  if (submitButton && !submitButton.disabled) {
    submitButton.click()
  }
}

function comment() {
  let placeholder = document.querySelector('#placeholder-area')

  placeholder.click()
  let textArea = document.querySelector('#contenteditable-root')
  textArea.focus()

  const { comment } = { comment: 'thank you for good video!' }
  document.execCommand('insertText', false, comment)
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  like()

  window.scrollTo(0, 9999)

  setTimeout(comment, 1000)

  setTimeout(submit, 200)
})
