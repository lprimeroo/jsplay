$(document).ready(function() {

	$('.button').click(function () {
		$('#magnetBox').addClass('animated fadeOutUp');
		setTimeout(function() {
			$('#magnetBox').hide() ;
		},1000) ;

	}) ;
}) ;