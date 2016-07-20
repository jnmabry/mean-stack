angular.module('adoptCtrl', []).controller('adoptController', function($scope) {

	$(document).ready(function() {

		var jqxhr = $.getJSON("http://api.petfinder.com/shelter.getPets?key=a86e7c607977efb4defb7da363c0a657&id=KY314&format=json&callback=?",

			function displayDogs (data) {
				var dogHTML = '<div class="row section>';
				$.each(data.petfinder.pets.pet, function (i, dog){
					dogHTML += '<div class="col-sm-3 col-md-3">';
					dogHTML += '<div class="thumbnail">';
					dogHTML += '<img src=" ' + dog.media.photos.photo + ' " alt="...">';
					dogHTML += '<div class="caption">';
					dogHTML += '<h2>' + dog.name.$t + '</h2>';
					dogHTML += '<h4>' + dog.breeds.breed + '</h4>';
					dogHTML += '<h4>'+ dog.age.$t +''+ dog.sex.$t +''+ dog.size.$t +'</h4>';
					dogHTML += '<p>' + dog.description.$t + '</p>'
					dogHTML += '<a href="#" class="btn btn-primary" role="button">More About Larry</a>';
					dogHTML += '</div>';
					dogHTML += '</div>';					
					dogHTML += '</div>';
				});	
					dogHTML += '</div>';
					$('#dogs').html(dogHTML);

/*			  console.log( "success" );
			  })
			  .done(function() {
			    console.log( "second success" );
			  })
			  .fail(function() {
			    console.log( "error" );
			  })
			  .always(function() {
			    console.log( "complete" );
			  });

			jqxhr.complete(function() {
			  console.log( "second complete" );*/
			});

/*	$.getJSON( 'http://api.petfinder.com/shelter.getPets?key=a86e7c607977efb4defb7da363c0a657&id=KY314&format=json&callback=?', 'logAPI' );
*/		
		});
});