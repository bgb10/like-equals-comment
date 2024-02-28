function like() {
  const like = document.querySelector(
    'body > div.service_header.article.\\#post_toolbar.new > div.wrap_inner > div.f_r > div > div.default_action_wrap.f_r > a.default_action.headerLikeBtn.img_ico_wrap.\\#likeit'
  )

  like.click()
}

function submit() {
  let submitButton = document.querySelector(
    '#comments > div.info_comment > div.comment_write_wrap > div > div.box_area > div.editor_footer > div.wrap_btn > button'
  )

  if (submitButton && !submitButton.disabled) {
    submitButton.click()
  }
}

function expandComment() {
  let commentExpender = document.querySelector(
    'body > div.service_header.article.\\#post_toolbar.beyond_content.new > div.wrap_inner > div.f_r > div > div.default_action_wrap.f_r > a.default_action.img_ico_wrap.comment.\\#comment'
  )

  commentExpender.click()
}

function comment() {
  let placeholder = document.querySelector(
    '#comments > div.info_comment > div.comment_write_wrap > div > div.box_area > div.editor_wrap > div.editor_placeholder'
  )

  placeholder.click()
  //   let textArea = document.querySelector('#contenteditable-root')
  //   textArea.focus()

  const { comment } = { comment: '감사합니다!' }
  document.execCommand('insertText', false, comment)
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  like()

  expandComment()

  comment()

  submit()
})
