
//本地储存
$("#next").click(function(e) {
	var username = $("#username").val();
    if(localStorage.getItem(username)){
       alert("成功");
	   location.href = "changepassword2.html";
	   var obj = JSON.parse(localStorage.getItem(username))
	   
	}else {
		alert("用户名错误")
	}
	
});
