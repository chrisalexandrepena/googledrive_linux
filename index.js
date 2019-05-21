const { app, BrowserWindow, Menu, Tray } = require('electron'),
	url = require('url'),
	path = require('path');

let mainWindow, mainTray;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		height: 400,
		width: 250,
		frame: false,
		resizable: false,
		show: false
	});
	mainWindow.loadURL(`file://${path.join(__dirname, 'templates/main.html')}`);
	mainTray = new Tray(path.join(__dirname, 'static/icons/drive.png'));

	const mainMenu = Menu.buildFromTemplate([
		{
			label: 'Settings',
			type: 'normal',
			click: (menuItem, window, event) => {
				mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
				console.log('click!');
			}
		}
	]);

	mainTray.setToolTip('Google Drive');
	mainTray.setContextMenu(mainMenu);
	mainTray.on('click', () => {
		mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
		console.log('click!');
	});
	// console.log(process.platform);
});
