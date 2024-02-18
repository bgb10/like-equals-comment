const textInput = document.getElementById('textInput')
const storedText = localStorage.getItem('savedText')
if (storedText) {
  textInput.value = storedText
}

const saveBtn = document.getElementById('saveBtn')

saveBtn.addEventListener('click', function () {
  // Getting the value of the input field
  const textValue = textInput.value

  // Checking if textValue is not empty
  if (textValue.trim() !== '') {
    // Storing the value in localStorage with a key 'savedText'
    localStorage.setItem('savedText', textValue)
    alert('Text saved successfully!')
  } else {
    alert('Please enter some text to save.')
  }
})
