var peerflix = require('peerflix') ;
var wjs = require("wcjs-player") ;
var player = new wjs("#player").addPlayer({ autoplay: true }) ;

$(document).ready(function() {

	$('.button').click(function () {
		var magnetLink = $('input[type=search]').val() ;
		$('#magnetBox').addClass('animated fadeOutUp');
		setTimeout(function() {
			$('#magnetBox').hide() ;
		},1000) ;

		var engine = peerflix(magnetLink) ;
		engine.server.on('listening', function() {
    		var myLink = 'http://localhost:' + engine.server.address().port + '/';
    		player.addPlaylist(myLink);
		});
	}) ;
}) ;