angular.module('adoptCtrl', []).controller('adoptController', function($scope) {

	$(document).ready(function() {
		
		var jqxhr = $.getJSON("http://api.petfinder.com/shelter.getPets?key=a86e7c607977efb4defb7da363c0a657&id=KY314&format=json&callback=?",

			function displayDogs (data) {
				var dogHTML = '<div class="row section">';
				$.each(data.petfinder.pets.pet, function (i, dog){
					dogHTML += '<div class="col-sm-4 col-md-3">';
					dogHTML += '<div class="thumbnail">';
					dogHTML += '<img src=" ' + dog.media.photos.photo[3].$t + ' " alt="..." class="center-cropped">';
					dogHTML += '<div class="caption">';
					dogHTML += '<h2 class="adopt-heading">' + dog.name.$t + '</h2>';

				if (dog.breeds.breed.$t) {
					    dogHTML += '<h4>' + dog.breeds.breed.$t + '</h4>';
					} else { 
					    dogHTML += '<h4>' + dog.breeds.breed[0].$t + ' & ' + dog.breeds.breed[1].$t + '</h4>';
					}		

					dogHTML += '<h5>'+ dog.age.$t +' '+ dog.sex.$t +'</h4>';
					// dogHTML += '<p class="comment">' + dog.description.$t + '</p>';
					dogHTML += '<a href="#" class="btn btn-primary" role="button">More About ' + dog.name.$t + '</a>';
					dogHTML += '</div>';
					dogHTML += '</div>';					
					dogHTML += '</div>';
				});	
					dogHTML += '</div>';
					$('#dogs').html(dogHTML);
					$(".comment").shorten();
			});
	
		});
});