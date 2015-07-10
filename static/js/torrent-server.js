var peerflix = require('peerflix'),
    engine = peerflix('magnet:?xt=urn:btih:120ad76789b11bce2d6005d1c22ccf1507c3021a&dn=Pink+-+Just+Give+Me+A+Reason+%28Ft.+Nate+Ruess%29+M4A%2BMP4+%281080p%29+x2&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'),
    wjs = require("wcjs-player"),
    player = new wjs("#player").addPlayer({ autoplay: true });

//engine.server.on('listening', function() {
  //  var myLink = 'http://localhost:' + engine.server.address().port + '/';
    player.addPlaylist('http://archive.org/download/CartoonClassics/Krazy_Kat_-_Keeping_Up_With_Krazy.mp4');
//});