var peerflix = require('peerflix') ;
    var engine = peerflix(magnetLink) ;
    var wjs = require("wcjs-player") ;
    var player = new wjs("#player").addPlayer({ autoplay: true }) ;

engine.server.on('listening', function() {
    var myLink = 'http://localhost:' + engine.server.address().port + '/';
    player.addPlaylist(myLink);
	});