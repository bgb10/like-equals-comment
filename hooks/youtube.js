let like = document.querySelector('like-button-view-model.YtLikeButtonViewModelHost')
let placeholderArea = document.querySelector('#placeholder-area')

function runIfExists() {
  let submitButton = document.querySelector('#submit-button > yt-button-shape > button')

  if (submitButton && !submitButton.disabled) {
    submitButton.click()
  } else {
    let cb = function (mutationsList, observer) {
      let submitButton = document.querySelector('#submit-button > yt-button-shape > button')

      if (submitButton && !submitButton.disabled) {
        submitButton.click()

        observer.disconnect()
      }
    }
    let a = document.querySelector('ytd-app')
    let config = { childList: true, subtree: true }
    let observer = new MutationObserver(cb)
    observer.observe(a, config)
  }
}

function addComment(placeholder) {
  console.log('add comment')

  placeholder.click()
  let textArea = document.querySelector('#contenteditable-root')
  textArea.focus()

  const { comment } = { comment: 'test' }
  document.execCommand('insertText', false, comment)

  runIfExists()
}

function onLike() {
  let placeholder = document.querySelector('#placeholder-area')
  if (placeholder) {
    addComment(placeholder)
    return
  }

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

if (!like) {
  let a = document.querySelector('ytd-app')
  let config = { childList: true, subtree: true }
  let cb = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // Check if a <ytd-comments> element is added as a descendant
        if (mutation.addedNodes) {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeName.toLowerCase() === 'like-button-view-model' &&
              node.classList.contains('YtLikeButtonViewModelHost')
            ) {
              console.log('A <like-button-view-model> element was added:', node)
              like = node
              // add eventlistener
              like.addEventListener('click', onLike)
            }
          })
        }
      }
    }
  }
  let observer = new MutationObserver(cb)
  observer.observe(a, config)
}
