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
})

$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img1,#img1-1").show();
    $("#img2,#img1-2").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img1,#img1-1").click(function(){
        $("#img1,#img1-1").hide();
        $("#img2,#img1-2").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img2,#img1-2").click(function(){
        $("#img1,#img1-1").show();
        $("#img2,#img1-2").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img3,#img1-3").show();
    $("#img4,#img1-4").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img3,#img1-3").click(function(){
        $("#img3,#img1-3").hide();
        $("#img4,#img1-4").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img4,#img1-4").click(function(){
        $("#img3,#img1-3").show();
        $("#img4,#img1-4").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img5,#img1-5").show();
    $("#img6,#img1-6").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img5,#img1-5").click(function(){
        $("#img5,#img1-5").hide();
        $("#img6,#img1-6").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img6,#img1-6").click(function(){
        $("#img5,#img1-5").show();
        $("#img6,#img1-6").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img7,#img1-7").show();
    $("#img8,#img1-8").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img7,#img1-7").click(function(){
        $("#img7,#img1-7").hide();
        $("#img8,#img1-8").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img8,#img1-8").click(function(){
        $("#img7,#img1-7").show();
        $("#img8,#img1-8").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img9,#img1-9").show();
    $("#img10,#img1-10").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img9,#img1-9").click(function(){
        $("#img9,#img1-9").hide();
        $("#img10,#img1-10").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img10,#img1-10").click(function(){
        $("#img9,#img1-9").show();
        $("#img10,#img1-10").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img11").show();
    $("#img12").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img11").click(function(){
        $("#img11").hide();
        $("#img12").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img12").click(function(){
        $("#img11").show();
        $("#img12").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img13").show();
    $("#img14").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img13").click(function(){
        $("#img13").hide();
        $("#img14").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img14").click(function(){
        $("#img13").show();
        $("#img14").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img15").show();
    $("#img16").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img15").click(function(){
        $("#img15").hide();
        $("#img16").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img16").click(function(){
        $("#img15").show();
        $("#img16").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img17").show();
    $("#img18").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img17").click(function(){
        $("#img17").hide();
        $("#img18").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img18").click(function(){
        $("#img17").show();
        $("#img18").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img19").show();
    $("#img20").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img19").click(function(){
        $("#img19").hide();
        $("#img20").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img20").click(function(){
        $("#img19").show();
        $("#img20").hide();
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