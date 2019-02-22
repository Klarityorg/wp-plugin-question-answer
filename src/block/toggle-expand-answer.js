function toggleExpandAwnser(elem) {
  var answer = jQuery(elem).parent().find('.answer-container')
  if(answer.hasClass('collapsed')) { // if collapse all before toggle answer
    jQuery('.answer-container').removeClass('expanded')
    jQuery('.answer-container').addClass('collapsed')
  }
  answer.toggleClass('collapsed expanded')

  var chevron = jQuery(elem).find('.chevron-container')
  if(chevron.hasClass('chevron-down')) {
    jQuery('.chevron-container').removeClass('chevron-up')
    jQuery('.chevron-container').addClass('chevron-down')
  }
  chevron.toggleClass('chevron-up chevron-down')
}
