$('.main .pics .pic li').click(function(){
	$('.main .pics .pic li img:nth-child(3)').last().remove()
	$(this).append('<img src="img/zz.png" >')
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
    $(".main .pics .pic li [src^='img/lr']").prev().hide(); //非狼人 隐藏
	
	
});


$(document).ready(function () {
    $('.main .pics .pic li').on('click', function () {
        // alert(1)
        var index = $(this).index();
        // console.log(index);
    });

});

$('.main .pics .pic li').click(function(){
    // alert(1);
    var index = $('.main .pics .pic ul li').index();;
    console.log(index)
    var index1 = $('li').index();
    console.log(index1)

})





$(document).ready(function () {
    var arr = [];
    $('.sure').click(function () {
        var num = 0;
        var images = localStorage.getItem("images");
        var imgarr = images.split(',');
        console.log(imgarr)
        console.log(imgarr[1])
        console.log($('.sure').parent().siblings().find('ul').find('li'))
        // $('.sure').parent().parent().
    });
});

                  

$(document).ready(function () {
    $('.back').click(function () {
        // alert(1)
        location.href = "game.html"
    });
});
