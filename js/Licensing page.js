$(document).ready(function () {
    var n = 0;
    var lengths = $('.fapai ul li').length; //得知有几个li
    // console.log(lengths);
    $('.next').click(function () {
        n += 1;
        $('.fapai ul li').eq(n).show().siblings('li').hide();
        if (n == lengths - 1) {
            $('.gamebtn button').eq(1).attr('id', 'hides');
            $('.gamebtn button').eq(2).removeAttr('id', 'hides');
        }
        $('.gamebtn button:first-child').text('显示身份');
        $('.fapaipic img:first-child').removeClass('hides');
        // location.reload(a());
    });
});



$(document).ready(function () {
    var num = 0;

    var image = ['pm.jpg', 'pm -1.jpg', 'pm -2.jpg', 'pm -3.jpg', 'pm -4.jpg', 'lr.jpg', 'lr-1.jpg', 'lr-2.jpg', 'lr-3.jpg', 'nw.jpg', 'sw.jpg', 'yyj.jpg'];

    function getArrRandomly(arr) {
        var len = arr.length;
        //首先从最大的数开始遍历，之后递减
        for (var i = len - 1; i >= 0; i--) {
            //随机索引值randomIndex是从0-arr.length中随机抽取的
            var randomIndex = Math.floor(Math.random() * (i + 1));
            //下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置
            var itemIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemIndex;
        }
        //每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面（索引顺序为：len-1,len-2,len-3......0）
        return arr;
    }
    getArrRandomly(image);


 $('.gamebtn button').eq(0).on("click", function () { //生成唯一随机图


        // console.log(getArrRandomly(image));
        // console.log(image);随机以后的image
        localStorage.setItem("images", image);

        // number = Math.floor(Math.random() * image.length);
        images = "<img src='img/" + image[num] + "'>";
        // console.log(image[num]);

        // console.log($('#a').children().length);
        // $('.imgBox').eq(0).append(images);
        if (num < 12) {
            if ($('.fapaipic').eq(num).children().length <= 2) {
                $('.fapaipic').eq(num).append(images);
            }
        }


        // setTimeout(function () {
        //     location.reload();
        // }, 3000);
        num += 1;
    });

   $('.gamebtn button').eq(0).click(function () { //按钮显示
        var texts = $('.gamebtn button:first-child').text();
        if (texts == "显示身份") {
            $('.fapaipic img:first-child').addClass('hides');
            $('.gamebtn button:first-child').text('隐藏身份');
            return true;
        }
        if (texts == "隐藏身份") {
            $('.fapaipic img:first-child').removeClass('hides');
            $('.gamebtn button:first-child').text('显示身份');
            return true;
        }
        // setTimeout(function () {
        //     location.reload();
        // }, 3000);
    });


});


$(document).ready(function () {
    $('.begin').click(function () {
        location.href = "game.html";
    });
});