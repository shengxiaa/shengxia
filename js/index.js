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
		
				