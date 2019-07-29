$('.nine').click(function(){
	$('.nine').parent().find('.villager').find('p').remove()
	$('.nine').parent().find('.villager').append("<p>3</p>")
	$('.nine').parent().find('.werewolf').find('p').remove()
	$('.nine').parent().find('.werewolf').append("<p>3</p>")
	$('.nine').parent().find('.Prophet').append("<p>1</p>")
	$('.nine').parent().find('.witch').append("<p>1</p>")
	$('.nine').parent().find('.guard').append("<p>1</p>")
})


$('.ten').click(function(){
	$('.nine').parent().find('.villager').find('p').remove()
	$('.nine').parent().find('.villager').append("<p>4</p>")
	$('.nine').parent().find('.werewolf').find('p').remove()
	$('.nine').parent().find('.werewolf').append("<p>3</p>")
	$('.nine').parent().find('.Prophet').append("<p>1</p>")
	$('.nine').parent().find('.witch').append("<p>1</p>")
	$('.nine').parent().find('.guard').append("<p>1</p>")
})


$('.evelen').click(function(){
	$('.nine').parent().find('.villager').find('p').remove()
	$('.nine').parent().find('.villager').append("<p>4</p>")
	$('.nine').parent().find('.werewolf').find('p').remove()
	$('.nine').parent().find('.werewolf').append("<p>4</p>")
	$('.nine').parent().find('.Prophet').append("<p>1</p>")
	$('.nine').parent().find('.witch').append("<p>1</p>")
	$('.nine').parent().find('.guard').append("<p>1</p>")
})


$('.twelve').click(function(){
	$('.nine').parent().find('.villager').find('p').remove()
	$('.nine').parent().find('.villager').append("<p>5</p>")
	$('.nine').parent().find('.werewolf').find('p').remove()
	$('.nine').parent().find('.werewolf').append("<p>4</p>")
	$('.nine').parent().find('.Prophet').append("<p>1</p>")
	$('.nine').parent().find('.witch').append("<p>1</p>")
	$('.nine').parent().find('.guard').append("<p>1</p>")
})

$('#next').click(function() {
	$('.twelve').val("12")
	console.log($('.twelve'))
})


 function getRandom(lengths) {
    var arr = [];//存放随机数的数组
    var arrLen = lengths;//用来限制范围
	console.log(lengths)
	for(var i=0; i<lengths.length; i++){
		var radomNum = parseInt(Math.random() * arrLen);//生成范围内的数据数
        if(arr.indexOf(radomNum) == -1){
        //indexOf返回值为-1表示数组中没有和新随机数重复的值
			arr.push(radomNum);
        }else{
        //有重复值i--，不添加重复的值到数组中，并再循环一次
            i--;
			}
           }
                console.log(arr);
				return arr;
		}