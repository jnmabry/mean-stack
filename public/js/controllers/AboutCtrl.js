angular.module('aboutCtrl', []).controller('aboutController', function($scope) {

	$scope.tagline = 'About AARF';


	$scope.volunteers = [
  
	  { name: "Donations made directly to AARF’s veterinary costs and boarding fees.", image: "./img/test.jpg", description:"Tri-County Animal Clinic, 11 Rhurbens Branch Road , Louisa , KY 41230 . Phone is 606-673-1144."},
	  { name: "Monetary Donation to AARF", image: "./img/test.jpg", description:"There is a DONATE button located in the right sidebar of this website’s pages. Simply click on the link, and enter your preferred donation amount. Any amount is appreciated — and is tax deductible!" },
	  { name: "Become a Volunteer", image: "./img/test.jpg", description:"Want to help feed and walk our furry friends? Email us or visit us on facebook for more information about volunteering. We are always looking for volunteers! Also visit our Events page to check out the fun fundraising events."},
	  { name: "Support AARF by collecting cans", image: "./img/test.jpg", description:"AARF recycles aluminum cans and uses the funds raised to spay and neuter their rescues. You can drop off your cans on the side of our facility on Route 5. If possible, we love crushed cans."},	  
	  { name: "Support AARF by collecting ink cartridges", image: "./img/test.jpg", description:"We collect used ink cartridges in exchange for funds to help provide for our rescues. Please drop off your cartridges to us at our Route 5 facility, or contact us at: ashlandanimalrescuefund@gmail.com to arrange pick up." },
	  { name: "Donate much needed supplies", image: "./img/test.jpg", description:"Purina Dog/Puppy Chow, Purina Cat/Kitten Chow, Gently used blankets/towels, Collars/leashes, Paper towels, Cleaning supplies (dishwashing liquid, detergent, fabric softener, bleach), Toys (Durable-Kongs, Nylabone, etc.), Crates, Frontline flea and tick treatment"},
	  { name: "Adopt a dog or cat", image: "./img/test.jpg", description:"Do some research on the size, breed, and type of dog that would best suit your home and family. If you would like to adopt an animal, you may submit an application. We will call you for a phone interview, check references ,and if approved, schedule a home visit/meet and greet. If all goes well, you sign our contract and pay the $125 adoption fee (for dogs) and $35 (for cats) in the form of a check or cash. All finalized adoption fees are considered a NON REFUNDABLE DONATION."},	  
	  { name: "Become a Foster Family", image: "./img/test.jpg", description:" One of the most important and rewarding duties in rescue is fostering. We provide food, supplies, support, and vetting and you provide the love! On average, a dog is in foster care for 2-4 weeks, sometimes a little longer or less. This provides the dog socialization and they can learn how to be a family pet. Foster homes make all the difference! Fostering a dog isn’t a lifetime commitment, but it IS a commitment to saving a life! If you’d like to learn more about AARF’s foster care program, please email us!"}

];

});


