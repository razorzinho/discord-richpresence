const rpc = require('discord-rpc');

const config = {
	appId: "XXXXXXXX", //Id of your application

	details: "XXXXXXXX", //Your descriptions
	largeImageKeyName: "large-image-key", // Key to the large image (https://discord.com/developers/applications -> Rich Presence -> Art Assets)
	largeImageText: "XXXXXXXX", //Text when you put your mouse on the large image
	smallImageKeyName: "small-image-key", // Key to the small image (https://discord.com/developers/applications -> Rich Presence -> Art Assets)
	smallImageText: "XXXXXXXX", //Text when you put your mouse on the small image

	buttonOneName: "Button 1", //Name of the button
	buttonOneUrl: "https://chilledbot.xyz", //URL of the button
	buttonTwoName: "Button 2", //Name of the button
	buttonTwoUrl: "https://chilledbot.xyz/freenitro" //URL of the button
};

rpc.register(config.appId);
const client = new rpc.Client({transport: 'ipc'});

client.on('ready', () => {
	console.log('RPC Started');
	client.setActivity({
		details: config.details,
		largeImageKey: config.largeImageKeyName,
		largeImageText: config.largeImageText,
		smallImageKey: config.smallImageKeyName,
		smallImageText: config.smallImageText,
		buttons: [
			{
				label: config.buttonOneName,
				url: config.buttonOneUrl
			},
			{
				label: config.buttonTwoName,
				url: config.buttonTwoUrl
			}
		]
	});
});

const clientId = config.appId
client.login({ clientId });