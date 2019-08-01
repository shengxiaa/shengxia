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


$('#kill').click(function(){
    location.href = "kill.html"
})

$('#god-eye').click(function(){
    location.href = "Prophet.html"
})

$('#witch-choose').click(function(){
    location.href = "witch.html"
})

$('#defend').click(function(){
    location.href = "guard.html"
})

$('#Sheriff').click(function(){
    alert("竞选警长发言")
})

$('#Badge').click(function(){
    location.href = "badge.html"
})

$('#Sheriffspeak').click(function(){
    alert("警长发言")
})

$('#everyspeak').click(function(){
    alert("所有人发言")
})


$('#vote').click(function(){
    location.href = "vote.html"
})