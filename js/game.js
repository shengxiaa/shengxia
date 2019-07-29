$(document).ready(function () {
    function show(day) {
        $(day).click(function () {
            // alert(1)
            $(this).nextAll().slideToggle();

            if ($(this).children().eq(0).hasClass("rotate")) {
                // console.log($(this).children().eq(0));
                $(this).children().eq(0).removeClass("rotate").addClass("rotate1");
            } else {
                $(this).children().eq(0).removeClass("rotate1").addClass("rotate");
            }
        });
    }
    show('.day');
    show('.night');
    show('.daytime');
});