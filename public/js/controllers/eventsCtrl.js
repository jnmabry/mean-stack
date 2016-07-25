angular.module('eventsCtrl', []).controller('eventsController', function($scope) {

	$scope.events = [
  
	  { date: "March 9th", description: "Suppy Drive  WalMart, River Hill Dr. Ashland - 11:00-5:00"},
	  { date: "April 16th", description: "Annual Rummage Sale (Time & Location TBA) & Vendor Extravaganza Donations are greatly appreciated prior to our sale.  All donations are tax deductible.  Please email ashlandanimalresucefund@gmail.com if you would like to assist with donating items to our sale."},
	  { date: "April 29th", description: "Annual Spaghetti Dinner & Silent Auction Ashland Transportation Center, 6:00-9:00pm, Tickets - $10"},
	  { date: "May 21", description: "Supply Drive, WalMart, River Hill Dr., Ashland 11:00-5:00"},
	  { date: "October 8th", description: "(Details to follow. An event YOU won’t want to miss!!)"},
	  { date: "November 19th", description: "Annual Howliday Auction – KY Highlands Museum 6:00-10:00 pm (details to follow)"}

];

});