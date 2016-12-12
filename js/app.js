(function () {
	'use strict';

	var data = [
		{
			"id": 0,
			"name": "Building Map",
			"category": "graphic",
			"location": "./img/portfolio/graphics/building_map",
			"desc": "",
			"url": "#portfolio/:id"
		},{
			"id": 0,
			"name": "Iconography",
			"category": "graphic",
			"location": "./img/portfolio/graphics/cisco_icons",
			"desc": "Updated the icons used for some of my companies internal business applications. Using" +
			" Fontawesome.",
			"url": "#portfolio/:id"
		},{
			"id": 0,
			"name": "Ligature",
			"category": "graphic",
			"location": "./img/portfolio/graphics/ligature",
			"desc": "A Ligature Design combining the letters 'Q and t'",
			"url": "#portfolio/:id"
		},{
			"id": 0,
			"name": "Calendar Icon",
			"category": "graphic",
			"location": "./img/portfolio/graphics/icon_calendar",
			"desc": "A calendar icon made for the SJSU Career Center Website",
			"url": "#portfolio/:id"
		},{
			"id": 0,
			"name": "Job Market Icon",
			"category": "graphic",
			"location": "./img/portfolio/graphics/icon_job_market",
			"desc": "A Job Market icon made for the SJSU Career Center Website",
			"url": "#portfolio/:id"
		},{
			"id": 0,
			"name": "Resume Blast Icon",
			"category": "graphic",
			"location": "./img/portfolio/graphics/icon_resume_blast",
			"desc": "A Resume Blast Event icon made for the SJSU Career Center Website",
			"url": "#portfolio/:id"
		},{
			"id": 0,
			"name": "Upcoming Events Icon",
			"category": "graphic",
			"location": "./img/portfolio/graphics/icon_upcoming_events",
			"desc": "An Upcoming Events icon made for the SJSU Career Center Website",
			"url": "#portfolio/:id"
		},{
			"id": 0,
			"name": "Line Chart Icon",
			"category": "graphic",
			"location": "./img/portfolio/graphics/line_chart_256",
			"desc": "An Line Chart icon made for one of Cisco's reporting applications",
			"url": "#portfolio/:id"
		},
		// {
		// 	"id": 100,
		// 	"name": "Logo Tea",
		// 	"category": "graphic",
		// 	"location": "./img/portfolio/graphics/logo_tea_kyang",
		// 	"desc": "A class exercise making a fictional product logo. ",
		// 	"url": "#portfolio/:id"
		// },
		{
			"id": 100,
			"name": "Logo Recognition",
			"category": "graphic",
			"location": "./img/portfolio/graphics/logo_recognition",
			"desc": "A class exercise mimicking a known company. ",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Poster Apply",
			"category": "graphic",
			"location": "./img/portfolio/graphics/poster_vote",
			"desc": "A poster to encourage students to apply for Student Government positions.",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Event Poster",
			"category": "graphic",
			"location": "./img/portfolio/graphics/poster_marchofdimes",
			"desc": "A poster designed for my companies donation event. ",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Resume",
			"category": "graphic",
			"location": "./img/portfolio/graphics/resume_design",
			"desc": "A class project to design a resume. ",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Stationary",
			"category": "graphic",
			"location": "./img/portfolio/graphics/stationary_design",
			"desc": "A class project to create a stationary design based on a logo. ",
			"url": "#portfolio/:id"
		},{
			"id": 0,
			"name": "Business Card",
			"category": "graphic",
			"location": "./img/portfolio/graphics/business_card",
			"desc": "A Business Card for my freelance company KOYdesigns.",
			"url": "#portfolio/:id"
		},{
			"id": 0,
			"name": "Vertical Card",
			"category": "graphic",
			"location": "./img/portfolio/graphics/business_card_vertical",
			"desc": "A Vertical Business Card for my freelance company KOYdesigns",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Tea string",
			"category": "graphic",
			"location": "./img/portfolio/graphics/tea_bag",
			"desc": "A class project to design a fictitious product",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Tea Box",
			"category": "graphic",
			"location": "./img/portfolio/graphics/tea_box_a",
			"desc": "A class project to design a fictitious product",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Tea Box",
			"category": "graphic",
			"location": "./img/portfolio/graphics/tea_box_b",
			"desc": "A class project to design a fictitious product",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Logo Bibliobridge",
			"category": "graphic",
			"location": "./img/portfolio/graphics/bibliobridge_logo",
			"desc": "A logo designed for a Hackathon idea which we placed first in. The MVP was to ...",
			"url": "#portfolio/:id"
		}, {
			"id": 0,
			"name": "Bauhuas Booklet",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_booklet",
			"desc": "A Booklet designed with inspiration from the Bauhuas movement. <a" +
			" href='http://koydesigns.com/resume/'>Resume</a>",
			"url": "#portfolio/:id"
		},{
			"id": 1,
			"name": "Custom Designed Cake Poster",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_cake_poster",
			"desc": "A Poster designed for a Cake Artist.",
			"url": "#portfolio/:id"
		},{
			"id": 2,
			"name": "Documentary DVD Cover",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_documentary_cover",
			"desc": "A Documentary DVD Cover made for my Grandmother's Centennial.",
			"url": "#portfolio/:id"
		},{
			"id": 3,
			"name": "Abstract Representation - Energy",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_energy",
			"desc": "An Abstract Representation of Energy.",
			"url": "#portfolio/:id"
		},{
			"id": 4,
			"name": "Film Series Spread - Grunge",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_film_series_spread_grunge",
			"desc": "A Film Series Spread made for a local event.",
			"url": "#portfolio/:id"
		},{
			"id": 5,
			"name": "Film Series Spread - Mono",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_film_series_spread_mono",
			"desc": "A Film Series Spread made for a local event. (Monochromatic)",
			"url": "#portfolio/:id"
		},{
			"id": 6,
			"name": "Logo Design - KOYdesigns",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_KOYlogos",
			"desc": "A Logo Design for my Freelance Work.",
			"url": "#portfolio/:id"
		},{
			"id": 7,
			"name": "Abstract - Luminescence",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_luminescence",
			"desc": "An Abstract Representation of Luminescence.",
			"url": "#portfolio/:id"
		},{
			"id": 8,
			"name": "Movie Night Poster",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_movienight_poster",
			"desc": "A Poster created for a College Movie Night",
			"url": "#portfolio/:id"
		},{
			"id": 9,
			"name": "Event Poster Card",
			"category": "graphic",
			"location": "./img/portfolio/graphics/graphics_prospect_flier",
			"desc": "An Event Poster Card.",
			"url": "#portfolio/:id"
		},{
			"id": 10,
			"name": "Flash Animation",
			"category": "video",
			"location": "./img/portfolio/video/video_koy_intro",
			"desc": "A Flash intro animation for my Freelance Website",
			"url": "#portfolio/:id"
		},{
			"id": 11,
			"name": "Video Montage",
			"category": "video",
			"location": "./img/portfolio/video/video_Picture_Montage",
			"desc": "An Video Montage using the Kan Burns Effect for a documentary.",
			"url": "#portfolio/:id"
		},{
			"id": 12,
			"name": "PhotoShop Website ",
			"category": "web",
			"location": "./img/portfolio/web/web_exercises",
			"desc": "A class project on building a website using PhotoShop slices.",
			"url": "#portfolio/:id"
		},{
			"id": 130,
			"name": "Logo Design Gilleys",
			"category": "graphic",
			"location": "./img/portfolio/graphics/logo_gilleys",
			"desc": "A logo redesign for a local roofer",
			"url": "#portfolio/:id"
		},{
			"id": 13,
			"name": "Gilley's Roofing ",
			"category": "web",
			"location": "./img/portfolio/web/web_gilleys",
			"desc": "A website made for a San Diego roofer.",
			"url": "#portfolio/:id"
		},{
			"id": 14,
			"name": "iPoint Advisors ",
			"category": "web",
			"location": "./img/portfolio/web/web_ipoint",
			"desc": "A class project website made for a San Diego company.",
			"url": "#portfolio/:id"
		},{
			"id": 15,
			"name": "iPoint Advisors - Bio",
			"category": "web",
			"location": "./img/portfolio/web/web_ipoint_bio",
			"desc": "A class project website made for a San Diego company.",
			"url": "#portfolio/:id"
		},{
			"id": 17,
			"name": "Learning Site",
			"category": "web",
			"location": "./img/portfolio/web/continuous_learning",
			"desc": "A Learning Program where Partners are able to track their points to qualify for rewards.Gamification.   ",
			"url": "#portfolio/:id"
		},{
			"id": 18,
			"name": "Learning Site cont.",
			"category": "web",
			"location": "./img/portfolio/web/continuous_learning_b",
			"desc": "A Learning Program where Partners are able to track their points to qualify for rewards.Gamification.   ",
			"url": "#portfolio/:id"
		},{
			"id": 20,
			"name": "Program Management Application",
			"category": "web",
			"location": "./img/portfolio/web/program_mgmt",
			"desc": "A summary screen from the PEGA Platform. ",
			"url": "#portfolio/:id"
		},{
			"id": 21,
			"name": "Dashboard Mockup",
			"category": "web",
			"location": "./img/portfolio/web/tpv_mockup",
			"desc": "A dashboard mockup for Total Program View, where they have access to .",
			"url": "#portfolio/:id"
		},{
			"id": 19,
			"name": "Website - PEGA",
			"category": "web",
			"location": "./img/portfolio/web/pega_mockup",
			"desc": "An updated ",
			"url": "#portfolio/:id"
		},{
			"id": 16,
			"name": "About Us Site",
			"category": "web",
			"location": "./img/portfolio/web/career_center_about_us",
			"desc": "San Jose State University - Career Center About Us Webpage. <a" +
			" href='http://klarence.net/career_center/about_us'>SJSU Career Center - About Us</a>",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Pamphlet",
			"category": "graphic",
			"location": "./img/portfolio/graphics/pamphlet",
			"desc": "A pamphlet designed for a Chiropractic company. ",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Rack Car ",
			"category": "graphic",
			"location": "./img/portfolio/graphics/rack_card_front",
			"desc": "A Rack Card (front) designed for a Chiropractic company. ",
			"url": "#portfolio/:id"
		},{
			"id": 100,
			"name": "Rack Card - Back",
			"category": "graphic",
			"location": "./img/portfolio/graphics/rack_card_back",
			"desc": "A Rack Card (back) designed for a Chiropractic company. ",
			"url": "#portfolio/:id"
		}
	];

	angular
		.module('portfolioApp', ['ngRoute'])
		.controller('PortfolioCtrl', [PortfolioCtrl])
		.controller('PortfolioDetailCtrl', ['$scope', '$routeParams', PortfolioDetailCtrl])
		// .controller('PortfolioItemController', ['dataService', 'notifier', '$routeParams', PortfolioItemController])
		// .factory('dataService', ['$http', '$q', '$log', '$timeout', dataService])
		// .filter('capitalizeFirst', capitalizeFirstFilter)
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/about.tpl.html'
				})
				.when('/about', {
					templateUrl: 'partials/about.tpl.html'
				})
				.when('/portfolio', {
					templateUrl: 'partials/portfolio.tpl.html',
					controller: PortfolioCtrl
				})
				// .when('/portfolio/:id', {
				// 	templateUrl: 'partials/portfolio-detail.tpl.html',
				// 	controller: PortfolioDetailCtrl
				// })
				.when('/services', {
					templateUrl: 'partials/services.tpl.html'
				})
				.when('/contact', {
					templateUrl: 'partials/contact.tpl.html'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);

	// // Functions - Definitions
	// function capitalizeFirstFilter() {
	// 	return function _doFilter(str) {
	// 		return str && (str.charAt(0).toUpperCase() + str.substring(1));
	// 	};
	// }
	// function dataService($http, $q, $log, $timeout) {
	//
	// 	return {
	// 		getPortfolioItems: getPortfolioItems
	// 	};
	//
	// 	function getPortfolioItems(data) {
	// 		return data = 'api/items'
	// 		// return $http.get('api/schools')
	// 		// 	.then(function(response) {
	// 		// 		return response.data;
	// 		// 	})
	// 		// 	.catch(function(response) {
	// 		// 		$log.error('Error retrieving schools: ' + response.statusText);
	// 		// 		return $q.reject('Error retrieving schools.');
	// 		// 	})
	// 	}
	// }
	// function PortfolioItemController(dataService, notifier, $routeParams) {
	// 	var vm = this;
	//
	// 	dataService.getPortfolioItems($routeParams.id)
	// 		.then(function (portfolioItem) {
	// 			vm.currentPortfolioItem = portfolioItem;
	// 		})
	// 		.catch(showError);
	//
	// 	function showError(message) {
	// 		notifier.error(message);
	// 	}
	// }


	function PortfolioDetailCtrl($scope, $http, $routeParams, dataService) {
		var self = this;
		// var id = 0;
		self.items = data;
		// $scope.item = items[id];
		$scope.id = $routeParams;

		self.item = self.items[$scope.id];
		// $http.get('data/portfolio.json').success(function(data) {
		// 	$scope.items = data;
		// });
		// $http.get('phones/' + $routeParams.id + '.json').then(function(response) {
		// 	self.phone = response.data;
		// });
		// self.getItems = getItems;
		// function getItems() {
		// 	return (self.items || []).map(function (item) {
		// 		return item.id;
		// 	}).filter(function (cat, idx, arr) {
		// 		return arr.indexOf(cat) === idx;
		// 	});
		// }
		self.getCategories = getCategories;
		function getCategories() {
			return (self.items || []).map(function (item) {
				return item.category;
			}).filter(function (cat, idx, arr) {
				return arr.indexOf(cat) === idx;
			});
		}
		dataService.getCategories($routeParams.id)
			.then(function (category) {
				self.currentPortfolio = portfolio;
			})
			.catch(showError);

		function showError(message) {
			notifier.error(message);
		}
	}
	function PortfolioCtrl() {

		// Variables - Private
		var self = this;


		// Variables - Public
		self.filter = {};
		self.items = data;


		// Functions - Public
		self.filterByCategory = filterByCategory;
		self.getCategories = getCategories;

		// Functions - Definitions
		function filterByCategory(item) {
			return self.filter[item.category] || noFilter(self.filter);
		}

		function getCategories() {
			return (self.items || []).map(function (item) {
				return item.category;
			}).filter(function (cat, idx, arr) {
				return arr.indexOf(cat) === idx;
			});
		}

		function noFilter(filterObj) {
			return Object.keys(filterObj).every(function (key) {
				return !filterObj[key];
			});
		}


		// self.getRows = function () {
		// 	var arr = [];
		// 	for (var i = 0; i < self.items.length / 3; i++) {
		// 		arr.push(i);
		// 	}
		// 	console.log(arr);
		// 	return arr;
		// };

		// // Functions - Public
		// self.filterByProperties = filterByProperties;
		// self.getValuesFor = getValuesFor;
		//
		// // Functions - Definitions
		// function filterByProperties(item) {
		// 	var activeFilterProps = Object.keys(self.filter).filter(function (prop) {
		// 		return !noFilter(self.filter[prop]);
		// 	});
		//
		// 	// Use this snippet for matching with AND
		// 	return activeFilterProps.every(function (prop) {
		// 		return self.filter[prop][item[prop]];
		// 	});
		// 	// Use this snippet for matching with OR
		// 	//return !activeFilterProps.length || activeFilterProps.
		// 	//  some(function (prop) { return self.filter[prop][item[prop]]; });
		// }
		//
		// function getValuesFor(prop) {
		// 	return (self.items || []).map(function (item) {
		// 		return item[prop];
		// 	}).filter(function (value, idx, arr) {
		// 		return arr.indexOf(value) === idx;
		// 	});
		// }
		//
		// function noFilter(filterObj) {
		// 	return Object.keys(filterObj).every(function (key) {
		// 		return !filterObj[key];
		// 	});
		// }
	}

}());


//http://stackoverflow.com/questions/23983322/angularjs-checkbox-filter