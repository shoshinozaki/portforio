$(function(){
  $('.item1').click(function(){
    $('.item1_modalArea').addClass('modalArea_is-active');
    $('body').css('overflow-y', 'hidden');
  });
  $('.item1_modalArea').click(function(){
    $('.item1_modalArea').removeClass('modalArea_is-active');
    $('body').css('overflow-y','auto'); 
  });
});