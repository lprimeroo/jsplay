
var NwBuilder = require('node-webkit-builder') ;

var nw = new NwBuilder({
    files: 'location',
    platforms: ['osx32', 'osx64', 'win32', 'win64']
});
  
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});