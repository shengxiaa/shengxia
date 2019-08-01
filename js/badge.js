$('.main .pics .pic li').click(function(){
	$('.main .pics .pic li img:nth-child(3)').last().remove()
	$(this).append('<img src="img/jh.png" >')
})










$(document).ready(function () {
    $('.back').click(function () {
        // alert(1)
        location.href = "game.html"
    });
});