var peerflix = require('peerflix') ;
var wjs = require("wcjs-player") ;
var player = new wjs("#player").addPlayer({ autoplay: true }) ;
var magnetLink ;

$(document).ready(function() {

	$('.button').click(function () {
		magnetLink = $('input[type=search]').val() ;
		$('#magnetBox').addClass('animated fadeOutUp');
		setTimeout(function() {
			$('#magnetBox').hide() ;
		},800) ;

		var engine = peerflix(magnetLink) ;
		console.log(engine) ;
		engine.server.on('listening', function() {
  			var myLink = 'http://localhost:' + engine.server.address().port + '/';
  			console.log(myLink) ;
   			player.addPlaylist(myLink) ;
		});
	}) ;
}) ;
