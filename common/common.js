	// 判断对象是否有空属性
	const if_obj_is_null = function(obj) {
		var obj_is_null = false
		var arrcheck = Object.values(obj)
		for (var a = 0; a<arrcheck.length; a++) {
		      if (arrcheck[a] === null || arrcheck[a] === '') {
		        obj_is_null = true
		      }
		  }
		return obj_is_null
	};
	
	//薪资表检验
	const if_obj_hasnot_arr = function(obj) {
		var if_obj_hasnot_arr = false
		var arrcheck = Object.values(obj)
		for (var a = 0; a<2; a++) {
		      if (arrcheck[a] === null || arrcheck[a] === '') {
		        if_obj_hasnot_arr = true
		      }else if(!isNumber(arrcheck[2]) || !isNumber(arrcheck[3])){
				if_obj_hasnot_arr = true 
			  }
		}
		return if_obj_hasnot_arr
	};
	
	//判断一串字符串是否是数字
	function isNumber(val) {
	    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
	    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
	    if(regPos.test(val) || regNeg.test(val)) {
	        return true;
	        } else {
	        return false;
	        }
	    }
		
	// 手机号检查
	const isnotphone = function (phone) {
	    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	    if (!myreg.test(phone)) {
	      return true;
	    } else {
	      return false;
	    }
	  };
	  
	// 中文姓名检查
	const isnotusername = function (username) {
	    var myreg = /^[\u4e00-\u9fa5]+$/i;
	    if (!myreg.test(username)) {
	      return true;
	    } else {
	      return false;
	    }
	  };

	// 检查是否为邮箱格式
	const emailCheck = function (emailAddr)
	{
	if((emailAddr == null) || (emailAddr.length < 2)) return false ;
	// 需出现'@',且不在首字符.
	var aPos = emailAddr.indexOf("@" ,1) ;
	
	if(aPos < 0)
	{
	return false ;
	}
	
	// '@'后出现'.',且不紧跟其后.
	if(emailAddr.indexOf("." ,aPos+2) < 0)
	{
	return false ;
	}
	
	return true ;
	};
	
	export default {
		if_obj_is_null,isnotphone,isnotusername,emailCheck,if_obj_hasnot_arr
	}
