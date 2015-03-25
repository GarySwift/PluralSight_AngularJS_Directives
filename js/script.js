// var app = angular.module('app', []);

// app.controller('mainCtrl', function mainCtrl($scope) {

// });
angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
	$scope.user = {
		name: 'Luke Skywalker',
		address: {
			street:'PO Box 123',
			city: 'Rebel Base',
			planet: 'Alderaan'
		},
		friends: [
			'Han',
			'Chewbaca',
			'Obi Wan'
		]
	}

});

angular.module('app').directive('userInfoCard', function () {
	return {
		templateUrl: 'userInfoCard.html',
		restrict: "A"
	}
});