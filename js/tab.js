$(function(){
  $('.tab-list-item').on('click', function(){
    let index = $('.tab-list-item').index(this);

    $('.tab-list-item').removeClass('is-tab-active');
    $(this).addClass('is-tab-active');
    $('.tab-contents').removeClass('is-contents-active');
    $('.tab-contents').eq(index).addClass('is-contents-active');
  });
});