$(function() {
    let tab = $('.tab li');

    tab.on('click', function() {
        let idx = $(this).index();
        let tab_cont = $(this).parents('.tab').siblings('.tab_content').eq(idx);

        //console.log(idx)
        //console.log(tab_cont)
        //1. 클릭한 li에 on 클래스 추가
        $(this).addClass('on');
        
        //현재 클릭된 li의 형제요소들은 클래스 제거
        $(this).siblings().removeClass('on')


        //tab_content에도 add/remove클래스 적용
        tab_cont.addClass('on');
        tab_cont.siblings().removeClass('on')
    });

    /* searchSwiper */
    var swiper = new Swiper(".searchSwiper", {
        slidesPerView: "1",
          spaceBetween: 20,
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });


    $( document ).ready( function() {
        $( '.music_search' ).click( function() {
          $( '.music_search_area' ).slideDown();
        });
    });

    $( document ).ready( function() {
        $( '.back_icon' ).click( function() {
          $( '.music_search_area' ).slideUp();
        } );
      });
});

$(document).ready(function(){
  /*웹페이지 열었을 때*/
  $("#pause").show();
  $("#pause_btn").hide();

  /*img1을 클릭했을 때 img2를 보여줌*/
  $("#pause").click(function(){
      $("#pause").hide();
      $("#pause_btn").show();
  });

  /*img2를 클릭했을 때 img1을 보여줌*/
  $("#pause_btn").click(function(){
      $("#pause").show();
      $("#pause_btn").hide();
  });
});
$(document).ready(function(){
  /*웹페이지 열었을 때*/
  $("#heart").show();
  $("#heart_btn").hide();

  /*img1을 클릭했을 때 img2를 보여줌*/
  $("#heart").click(function(){
      $("#heart").hide();
      $("#heart_btn").show();
  });

  /*img2를 클릭했을 때 img1을 보여줌*/
  $("#heart_btn").click(function(){
      $("#heart").show();
      $("#heart_btn").hide();
  });
});
