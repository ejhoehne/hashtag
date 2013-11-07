app.controller('chirpController', function($scope){
	$.getJSON('https://api.twitter.com/1.1/trends/current.json', function(response){
		$scope.trends=response.results;
		$scope.$apply();
	});
});