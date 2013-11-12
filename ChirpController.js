app.controller('chirpController', function($scope){
	$.getJSON('https://localhost:8900/trends', function(response){
		$scope.trends=response.results;
		$scope.$apply();
	});
});