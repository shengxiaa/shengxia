var swiper = new Swiper('.swiper-container', {
	direction:'horizontal',

	//播放速度

	loop: true,

	// 自动播放时间

	autoplay:true,
		          pagination: {
		            el: '.swiper-pagination',
		          },
		        });


$('.main input').blur(function () {
			var a = null;
			var b = $(this).val()
			if($(this).attr('id') == 'username'){
				a = /[a-zA-Z][0-9a-zA-Z]{8,}$/;
				appendP(a,b,$(this),'用户名正确','用户名错误')
			}else {
				a = /(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
				appendP(a,b,$(this),'密码正确','密码错误')
			}
			
		})
		function appendP(a,b,_this,text1,text2){
			if (a.test(b)) {
				console.log(1)
				_this.next().remove()
				_this.parent().append('<p>'+text1+'</p>')
			}else {
				console.log(1)
				_this.next().remove()
				_this.parent().append('<p>'+text2+'</p>')
			}
		}
		
				
				
if(window.localStorage.userArr){//判断是否存在
		var array = JSON.parse(window.localStorage.userArr);
	}else{
		array = [];//创建一个新数组
	}

	
		$('#login').click( function(){
			// console.log(localStorage.key(1))
			// if($('#username').val() == localStorage.key(1) ){
			// 	
			// 	console.log(localStorage.key(1))
			// 	$('#password').val() == localStorage.getItem("a1aaaaaaa").password
			// 	alert("登陆成功")
			// 	location.href = "qishiye.html";
			// }else {
			// 	alert("登录失败")
			// }
			
			 var message = localStorage.getItem("message");
			var arr = message.split(',');
			var name = arr[0];
			var password = arr[1];
			var _thisname = $('#username').val();
			var _thispassword = $('#password').val();
			if (name == _thisname && password == _thispassword) {
			    alert('登录成功');
				location.href = "home page.html";
			    return true;
				
			}else {
				alert('密码错误')
			}
			// if (_thisname== '' || _thispassword == '') {
			//     $('.tishi').addClass('shows');
			//     $('.tishi3').addClass('shows');
			//     setTimeout(function () {
			//         $('.tishi3').removeClass('shows'); //找到对应的标签隐藏
			//     }, 2000);
			// }
			// return false;
	})
	// $('#login').click( function(){
	// 	console.log($('#username').val())
	// 	console.log(localStorage.getItem("a1111111"))
	// 	if($('#username').val() == localStorage.getItem("a1111111") ){
	// 		alert("登陆成功")
	// 	}else {
	// 		alert("登录失败")
	// 	}


