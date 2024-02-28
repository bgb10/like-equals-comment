function like() {
  const like = document.querySelector('div[data-testid="like"]')

  like.click()
}

function submit() {
  let submitButton = document.querySelector(
    '#root > div.sc-dPiLbb.sc-bBHHxi.kTIDXm > div.sc-TBWPX.dXONqK.sc-brSvTw.cgYvDI > div > div.sc-evcjhq.BdYrx > div > button'
  )

  submitButton.click()
}

function comment() {
  let textArea = document.querySelector(
    '#root > div.sc-dPiLbb.sc-bBHHxi.kTIDXm > div.sc-TBWPX.dXONqK.sc-brSvTw.cgYvDI > div > div.sc-evcjhq.BdYrx > textarea'
  )
  textArea.focus()

  document.execCommand('insertText', false, 'test')
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  like()

  comment()

  submit()
})
