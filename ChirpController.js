app.controller('chirpController', function($scope){
	$.getJSON('https://localhost:8900/trends/place.json?id=1', function(response){
		$scope.trends=response.results;
		$scope.$apply();
	});
});