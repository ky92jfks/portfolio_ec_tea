$(function () {
    // top mainvisual切り替え
    $(".slider").slick({
        dots: true, //スライドのドット
        // autoplay: true,
        // adaptiveHeight: true,
        prevArrow: '<img class="slide-arrow prev-arrow" src="./img/arrow_left.png">',
        nextArrow: '<img class="slide-arrow next-arrow" src="./img/arrow_right.png">',
    });

    // detail画像切り替え
    $('.thumbnail img').on('click', function(){
  
        let img_src = $(this).attr("src");
    
        if ($('.product_detail_img img').attr("src") != img_src) {
    
            $('.product_detail_img img').fadeOut(500, function() {
                $(".product_detail_img img").attr({src:img_src});
                $(".product_detail_img img").fadeIn(500);
            })
        }
    });
});