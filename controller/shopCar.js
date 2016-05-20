myapp.controller("shopCar",['$scope','shopCarService',function($scope,shopCarService){
	var promise=shopCarService.query("get","data/shopCar.json","{'id':'1205'}");//同步调用，获取承诺接口
	promise.then(function(data){
		$scope.items = data;//调用承诺接口resolove()
	},function(data){
		$scope.error={error:"数据不存在"};
	});
    $scope.remove = function(index){
        $scope.items.data.splice(index,1)
    };
    $scope.addDataOne = function(){
    	var obj={
	        "title": "dog",
	        "quantity": 1,
	        "price": "1000"
    	};
    	console.log($scope.items.data)
       	$scope.items.data.push(obj);
    }
    $scope.addData = function(){
        $scope.items.status=0;
    }
    $scope.removeData = function(){
        $scope.items.status=1;
    }
}]);
