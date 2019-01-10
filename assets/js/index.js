$(document).ready(function() {
    $(".tab1").click(function () {
        $(".tab1").removeClass("active1");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active1");   
    });

    $(".tab2").click(function () {
        $(".tab2").removeClass("active2");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active2");   
    });

    $(".tab3").click(function () {
        $(".tab3").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");   
    });
});