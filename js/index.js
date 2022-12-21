$(function(){
  let windowWidth = $(window).width();
  if(windowWidth <= 800){
    $('.works_list').find('img').attr("width","300") 
    $('.works_list').find('img').attr("height","200") 
  }else{
    $('.works_list').find('img').attr("width","500") 
    $('.works_list').find('img').attr("height","250") 
  }
});