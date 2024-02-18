;(async () => {
  const like = document.querySelector('div[data-testid="like"]')

  if (like) {
    like.addEventListener('click', async (e) => {
      if (like.getAttribute('active') == 'true') return

      let textArea = document.querySelector(
        '#root > div.sc-dPiLbb.sc-bBHHxi.kTIDXm > div.sc-TBWPX.dXONqK.sc-brSvTw.cgYvDI > div > div.sc-evcjhq.BdYrx > textarea'
      )
      textArea.focus()

      // WARNING: non blocking function!
      const { comment } = await chrome.storage.local.get(['comment'])

      document.execCommand('insertText', false, comment)
      let submitButton = document.querySelector(
        '#root > div.sc-dPiLbb.sc-bBHHxi.kTIDXm > div.sc-TBWPX.dXONqK.sc-brSvTw.cgYvDI > div > div.sc-evcjhq.BdYrx > div > button'
      )
      submitButton.click()
    })
  }
})()
