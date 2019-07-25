var swiper = new Swiper('.swiper-container', {
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

		
		
	$('#login').onclick = function(){
	$('#username').val();
	$('#password').val();
	
	if(localStorage.getItem(username)) {
		username.password = localStorage.getItem(username.password);
		alert("登陆成功!")
	}else {
		alert("账号不存在或输入错误")
	}
		
		
		
		
		
		
		
		
		
		
		
		
		
// 		var isHad = false;//定义一个开关变量
// 		var index = 0 ; //定义一个下标确定用户
// 		//遍历数组进行匹配
// 		for(var i =0;i<array.length;i++){
// 			if(username==array[i].username){//有这个账号
// 				isHad=true;
// 				index=i;
//  
// 			}
// 		}
// 		
// 		if(isHad){//如果存在
// 			if(password==array[index].password){
// 				alert("登录成功");
// 			}else{
// 				alert("密码错误");
// 			}
// 		}else{//账号不存在或输入错误
// 			alert('账号不存在或输入错误');
// 		}
// 	}
