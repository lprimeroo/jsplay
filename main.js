var app = require('app') ;
var browserWindow = require('browser-window') ;

require('crash-reporter').start() ;

var mainWindow = null ;

app.on('window-all-closed', function () {
	if (process.platform != 'darwin') {
		app.quit() ;
	}
}) ;

app.on('ready', function () {
	mainWindow = new browserWindow({width: 800, height: 600}) ;

	mainWindow.loadUrl('index.html') ;
	mainWindow.openDevTools() ;

	mainWindow.on('closed', function () {
		mainWindow = null ;
	}) ;
}) ;
