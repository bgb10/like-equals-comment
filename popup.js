const textInput = document.getElementById('textInput')

if (textInput) {
  chrome.storage.local.get(['comment'], ({ comment }) => {
    textInput.value = comment
  })
}

const saveBtn = document.getElementById('saveBtn')

saveBtn.addEventListener('click', function () {
  // Getting the value of the input field
  const comment = textInput.value

  // Checking if input is not empty
  if (comment.trim() !== '') {
    chrome.storage.local.set({ comment })
    console.log('saved')
  } else {
    console.log('empty')
  }
})
