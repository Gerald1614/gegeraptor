
$(".navbar a").on("click", function(){
    $(".nav-item.active").removeClass("active");
    $(this).parent().addClass("active");
 });