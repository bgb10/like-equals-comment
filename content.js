const like = document.querySelector('div[data-testid="like"]')

if (like) {
  like.addEventListener('click', (e) => {
    if (like.getAttribute('active') == 'true') return

    let textArea = document.querySelector(
      '#root > div.sc-dPiLbb.sc-bBHHxi.kTIDXm > div.sc-TBWPX.dXONqK.sc-brSvTw.cgYvDI > div > div.sc-evcjhq.BdYrx > textarea'
    )
    textArea.focus()
    document.execCommand('insertText', false, 'textArea')
    let submitButton = document.querySelector(
      '#root > div.sc-dPiLbb.sc-bBHHxi.kTIDXm > div.sc-TBWPX.dXONqK.sc-brSvTw.cgYvDI > div > div.sc-evcjhq.BdYrx > div > button'
    )
    submitButton.click()
  })
}
