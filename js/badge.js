$('.main .pics .pic li').click(function(){
	$('.main .pics .pic li img:nth-child(3)').last().remove()
	$(this).append('<img src="img/jh.png" >')
})

// $(document).ready(function () {
//     var num = 0;
//     var images = localStorage.getItem("images");
//     var imgarr = images.split(',');
//     // console.log(imgarr);
//     if (num < 12) {
//         for (var i = 0; i < 12; i++) {
//             image = "<img src='img/" + imgarr[i] + "'>";
//             // console.log(image);
//             $('.pic li').eq(i).append(image);
//         }
		
//     }
//     // console.log($('.main .pics .pic li'));
//     // $(".killSelect li img").prev().hide();  
//     $(".main .pics .pic li [src^='img/sw']").prev().hide(); //非狼人 隐藏
	
//     // var a = $(".killSelect li [src^='img/r2']");
//     // if (a == false) {
//     //     b = "<img src='/img/bg0.jpg'>";
//     //     $('.killSelect li').append(b);
//     // }
//     // $(".killSelect li [src^='img/r2']");//取得狼人的身份
	
// });










$(document).ready(function () {
    $('.back').click(function () {
        // alert(1)
        location.href = "game.html"
    });
});