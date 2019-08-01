$('.main .pics .pic li').click(function(){
	$('.main .pics .pic li img:nth-child(3)').last().remove()
	$(this).append('<img src="img/tp.png" >')
})


$('.back').click(function(){
	location.href = "game.html"
})