var gui = require('nw.gui') ;

var win = gui.Window.get(),
    nativeMenuBar = new gui.Menu({
        type: "menubar"
    });

if (process.platform === "darwin") {
    nativeMenuBar.createMacBuiltin("JSplay");
}

win.menu = nativeMenuBar;