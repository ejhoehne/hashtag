app.controller('chirpController', function($scope){
	$.getJSON('http://localhost:8900/trends', function(response){
		$scope.trends=response;
		$scope.$apply();
	});
});