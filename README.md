# JSplay

A torrent streaming media player built in NW.js with peerflix built in 3 hours .

https://www.youtube.com/watch?v=5mYozc_HC9E

## Install
  Download : `appc.nw` and make sure you have `node` and `nw` installed in the same directory or just run the app using [node-webkit CLI](https://github.com/nwjs/nw.js/wiki/How-to-run-apps) . 

  I'm too lazy to build it into an OS-specific binary. Do that with `build.js` .

## Issues

1. Incase, video doesn't buffer ; thats probably because of a new `peerflix` upgrade . Then you can re-install peerflix or do a simple `npm update` and you should be good to go . Peerflix has some stability issues .

2. I am using the WebChimera player currently and working on a custom HTML5 player with a libvlc wrapper .

3.  Please check for other running torrent clients and close them. Ports collision may occur while the app runs .

![](http://imgh.us/icon_4.svg)
