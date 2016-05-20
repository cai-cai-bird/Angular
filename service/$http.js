myapp.service("shopCarService",["$http","$q",function($http,$q){
	return {
		query:function(method,url,params){
			var defer=$q.defer();//声明延后执行-为了标记任务是否执行成功-对象代表一个新实例的Defferred
			$http({
				method:method,
				url:url,
				data:params
			}).success(function(data,status,headers,config){
				defer.resolve(data);//声明执行成功
				console.log("请求数据-执行成功!");
			}).error(function(data,status,headers,config){
				defer.reject();//声明执行失败-创建一个指定拒绝原因的promise
				console.log("请求数据-执行失败!");
			});
			return defer.promise;//返回承诺,返回数据的api
		} 
	}
}]);