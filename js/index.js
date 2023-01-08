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

// 自己学習エリア
$(function(){
  $('.horizontalScroll > li').each(function(){
    $(this).hover(function(){
      $(this).find('.access-title').addClass('title-on');
    }, function(){
      $(this).find('.access-title').removeClass('title-on');
    });
  });
});

// 自己学習エリア横スクロール
$(function(){
  const horizontalScroll = $('.horizontalScroll');
  const horizontalScroll_get = $('.horizontalScroll').get(0);

  let clientWidth = horizontalScroll_get.clientWidth;
  let scrollWidth = horizontalScroll_get.scrollWidth;
  $('.left-arrow').removeClass('scroll_arrow-left');
  horizontalScroll.scroll(function(){
    let scrollLeft = horizontalScroll.scrollLeft();
    if(scrollLeft === 0){
      $('.left-arrow').removeClass('scroll_arrow-left');
    }else{
      $('.left-arrow').addClass('scroll_arrow-left');
    }
    if(Math.floor(scrollWidth - (clientWidth + scrollLeft)) == 0){
      $('.right-arrow').removeClass('scroll_arrow-right');
    }else{
      $('.right-arrow').addClass('scroll_arrow-right');
    }
  });
});

// スクロールのドラッグ有効化
$(function(){
  jQuery.prototype.mousedragscrollable = function () {
    let target;
    $(this).each(function (i, e) {
      $(e).mousedown(function (event) {
        event.preventDefault();
        target = $(e);
        $(e).data({
          down: true,
          move: false,
          x: event.clientX,
          y: event.clientY,
          scrollleft: $(e).scrollLeft(),
          scrolltop: $(e).scrollTop(),
        });
        return false;
      });
      $(e).click(function (event) {
        if ($(e).data("move")) {
          return false;
        }
      });
    });
    $(document)
      .mousemove(function (event) {
        if ($(target).data("down")) {
          event.preventDefault();
          let move_x = $(target).data("x") - event.clientX;
          let move_y = $(target).data("y") - event.clientY;
          if (move_x !== 0 || move_y !== 0) {
            $(target).data("move", true);
          } else {
            return;
          }
          $(target).scrollLeft($(target).data("scrollleft") + move_x);
          $(target).scrollTop($(target).data("scrolltop") + move_y);
          return false;
        }
      })
      .mouseup(function (event) {
        $(target).data("down", false);
        return false;
      });
  };
  $(".horizontalScroll").mousedragscrollable();
});