$('.main .pics .pic li').click(function(){
	$('.main .pics .pic li img:nth-child(3)').last().remove()
	$(this).append('<img src="img/xy.png" >')
})

$(document).ready(function () {
    var num = 0;
    var images = localStorage.getItem("images");
    var imgarr = images.split(',');
    // console.log(imgarr);
    if (num < 12) {
        for (var i = 0; i < 12; i++) {
            image = "<img src='img/" + imgarr[i] + "'>";
            // console.log(image);
            $('.pic li').eq(i).append(image);
        }
		
    }
    $(".main .pics .pic li [src^='img/yyj']").prev().hide(); //非狼人 隐藏
});



$(document).ready(function () { //选择查看谁
    var arr = [];
    
    $('.main .pics .pic li').on('click', function () {
        var index = $(this).index(); //鼠标点击的li的下标值
        // $(this).eq(index).children().eq(0).addClass('hides');
        $('.main .pics .pic li').eq(index).children().eq(0).hide(); //鼠标选中哪个 显示哪个的身份
        
        arr.push(index); //添加选中人的下标

        
        $('.main .pics .pic').css({ //只能查看一次
            'pointer-events': 'none'

        });
    });

});




console.log(window.localStorage.imgaes)


$(document).ready(function () {
    $('.back').click(function () {
        // alert(1)
        location.href = "game.html"
    });
});