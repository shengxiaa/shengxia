
$('.main input').blur(function () {
			var a = null;
			var b = $(this).val()
			if($(this).attr('id') == 'username'){
				a = /[a-zA-Z][0-9a-zA-Z]{8,}$/;
				appendP(a,b,$(this),'用户名正确','用户名错误')
			}if($(this).attr('id') == 'password'){
				a = /(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
				appendP(a,b,$(this),'密码正确','密码错误')
			}if($(this).attr('id') == 'email') {
				a = /\w{5,20}@(163|qq|sina).com/;
				appendP(a,b,$(this),'邮箱正确','邮箱错误')
			}if($(this).attr('id') == 'phone') {
				a = /^[1][3,4,5,7,8][0-9]{9}$/;
				appendP(a,b,$(this),'手机号正确','手机号错误')
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
		
		
$('#qrpassword').blur(function(){
			var a = $('#password').val();
			var b = $('#qrpassword').val();
			if(a == b){
					$(this).next().remove()
					$(this).parent().append('<p>确认密码正确</p>')
				}else {
					$(this).next().remove()
					$(this).parent().append('<p>确认密码错误</p>')
						}
		})
		
		
if(window.localStorage.userArr){//判断是否存在
			var array = JSON.parse(window.localStorage.userArr);
				}else{
			array = [];//创建一个新数组
			}
		
		
		
		document.getElementById('regist').onclick = function(){
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		//遍历数组进行匹配
		for(var i =0;i<array.length;i++){
			//判断是否有相同账号
			console.log(('username'))
			if(username==array[i].username){
				alert("该账号已存在");
				return;
			}
		}
		//创建对象
		var obj = {password:password}
		array.push(obj);
		localStorage.setItem(username,JSON.stringify(array))
		alert("用户创建成功");
		location.href = "index.html";
	}