﻿(function () {
	'use strict';

	var module = angular.module('mainApp');

	module.controller('LineChartController',
		[
			'$scope',
			'$log',
            'barChartData',
			LineChartController
		]
	);

	function LineChartController($scope, $log, barChartData) {
	    $log.info("LineChartController called");
	    $scope.message = "LineChartController";

	    $scope.barChartData = barChartData;
	    

	    $scope.machineName = $scope.barChartData.MachineName;

	    $scope.layout = {
	        title: $scope.barChartData.MachineName + ": " + $scope.barChartData.Datapoint,
	        height: 500,
	        width: 1200
	    };

	   
	    function getYDatafromDatPoint() {
	        if ($scope.barChartData.Datapoint === 'quality') {
	            return $scope.barChartData.QualityData.Y;
	        } else if ($scope.barChartData.Datapoint === 'performance') {
	            return $scope.barChartData.PerformanceData.Y;
	        } else if ($scope.barChartData.Datapoint === 'availability') {
	            return $scope.barChartData.AvailabilityData.Y;
	        } else {
	            return $scope.barChartData.OeeTracesData.Y;
	        }
	    }

	    $scope.data = [
          {
              x: $scope.barChartData.X,
              y: getYDatafromDatPoint(),
              name: $scope.barChartData.Datapoint,
              type: 'bar',
              orientation :'v'
          }
	    ];

	    $log.info($scope.data);

	}


})();