
$(".navbar a").on("click", function(){
    $(".nav-item.active").removeClass("active");
    $(this).parent().addClass("active");
 });

 $(document).on("click", ".open-AddImgDialog", function () {
    var imgsrc = $(this).data('id');
    $('#my_image').attr('src',imgsrc);
   });