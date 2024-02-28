chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'like-equals-comment') {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    const response = await chrome.tabs.sendMessage(tab.id, 'message')
  }
})
