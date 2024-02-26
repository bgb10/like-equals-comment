let like = document.querySelector('like-button-view-model.YtLikeButtonViewModelHost')

function runIfExists() {
  alert('run if exists')

  let submitButton = document.querySelector('#submit-button > yt-button-shape > button')

  if (submitButton && !submitButton.disabled) {
    submitButton.click()
  } else {
    let a = document.querySelector('ytd-app')
    let config = { childList: true, subtree: true }
    let cb = function (mutationsList, observer) {
      let submitButton = document.querySelector('#submit-button > yt-button-shape > button')

      if (submitButton && !submitButton.disabled) {
        submitButton.click()

        observer.disconnect()
      }
    }
    let observer = new MutationObserver(cb)
    observer.observe(a, config)
  }
}

function addComment(placeholder) {
  alert('addcomment')

  placeholder.click()
  let textArea = document.querySelector('#contenteditable-root')
  textArea.focus()

  const { comment } = { comment: 'test' }
  document.execCommand('insertText', false, comment)

  runIfExists()
}

function onLike() {
  alert('onlike')

  let placeholder = document.querySelector('#placeholder-area')
  if (placeholder) {
    addComment(placeholder)
  } else {
    let a = document.querySelector('ytd-app')
    let config = { childList: true, subtree: true }
    let cb = function (mutationsList, observer) {
      const placeholder = document.getElementById('placeholder-area')

      if (placeholder) {
        addComment(placeholder)

        observer.disconnect()
      }
    }
    let observer = new MutationObserver(cb)
    observer.observe(a, config)
  }
}

if (!like) {
  let a = document.querySelector('ytd-app')
  let config = { childList: true, subtree: true }
  let cb = function (mutationsList, observer) {
    like = document.querySelector('like-button-view-model.YtLikeButtonViewModelHost')

    if (like) {
      like.addEventListener('click', onLike)

      observer.disconnect()
    }
  }
  let observer = new MutationObserver(cb)
  observer.observe(a, config)
}
