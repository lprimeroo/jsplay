var peerflix = require('peerflix') ;
var wjs = require("wcjs-player") ;
var player = new wjs("#player").addPlayer({ autoplay: true }) ;
var magnetLink ;

var engine = peerflix('magnet:?xt=urn:btih:6f93e6e336f9ace47dd3b4d9fbd86e3bd0180f97&dn=Fall+Out+Boy+-+My+Songs+Know+What+You+Did+In+The+Dark+2013+M4A%2BM&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969') ;
console.log(engine) ;
engine.server.on('listening', function() {
  var myLink = 'http://localhost:' + engine.server.address().port + '/';
  console.log(myLink) ;
   //player.addPlaylist('http://archive.org/download/CartoonClassics/Krazy_Kat_-_Keeping_Up_With_Krazy.mp4');
   player.addPlaylist(myLink) ;
	});
/*
$(document).ready(function() {

	$('.button').click(function () {
		magnetLink = $('input[type=search]').val() ;
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
*/