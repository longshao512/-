$(document).ready(function() {
	var user_id = localStorage.getItem("login_id")

	var food_id_1;
	var food_id_2;
	//用户退出
	$("#return").click(function() {
		$.ajax({
			type: "post",
			url: "http://39.105.232.109:3000/user/logout",
			async: true,
			dataType: "json",
			data: {},
			success: function(data) {
				window.location.href = "index.html";

			}
		})
	})

	$("#looker").click(function() {
		$.ajax({
			type: "post",
			url: "http://39.105.232.109:3000/user/getInfoById",
			async: true,
			dataType: "json",
			data: {
				_id: user_id,
			},
			success: function(data) {
				console.log(data.list[0].integral)
				console.log(data)
				if (data.list[0].sex == "0") {
					var sex = "男"
				} else {
					var sex = "女"
				}
				$("look").html("积分:" + data.list[0].integral + "<br />" +
					"姓名:" + data.list[0].name + "<br />" +
					"性别:" + sex + "<br />" +
					"电话:" + data.list[0].tel + "<br />" +
					"账号:" + data.list[0].us + "<br />"
				);
			}
		})
	})
	$("#update").click(function() {
		//声明list  
		var _list = [];  
		//创建两个user对象  
		var a= {};  
		a.integral=0; 
		a.name="张少龙";  
		a.age=23;  
		a.sex=0; 
		 	a.tel=15272568863; 
		var b = {};  
		b.integral=0;
		b.name="张少龙";  
		b.age=23;  
		b.sex=0; 
		 a.tel=15299896525;  
		//将user放入_list  
		_list.push(a);  
		_list.push(b);  
		  
		$.ajax({  
		    url : 'http://39.105.232.109:3000/user/updata',  
		    data :"list="+JSON.stringify(_list),//这里需要json化  
		    type : "POST",  
		    success : function(data) {  
		        alert(data);  
		    }  
		});  

		})
	
	
})
function addorder() {
		$.ajax({
			type: "post",
			url: "http://39.105.232.109:3000/order/add",
			async: true,
			dataType: "json",
			data: {
				"food": $("#food").val(),
				"receivables": $("#receivables").val(),
				"drawee": $("#drawee").val(),
			},
			success: function(data) {
				document.getElementById("box1").style.display='block';

			}
		})
	}