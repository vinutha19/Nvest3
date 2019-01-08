$(document).ready(function() {
    $(".tab1").click(function () {
        $(".tab1").removeClass("active1");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active1");   
    });
});