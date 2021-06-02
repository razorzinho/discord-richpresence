const rpc = require('discord-rpc');

const config = {
	discordId: "XXXXXXXX", //Discord Id
	appId: "XXXXXXXX", //Id of your application

	details: "XXXXXXXX", //Your descriptions
	largeImageKeyName: "large-key-name", // Key to the large image (https://discord.com/developers/applications -> Rich Presence -> Art Assets)
	largeImageText: "XXXXXXXX", //Text when you put your mouse on the large image
	smallImageKeyName: "small-key-name", // Key to the small image (https://discord.com/developers/applications -> Rich Presence -> Art Assets)
	smallImageText: "XXXXXXXX", //Text when you put your mouse on the small image

	buttonOneName: "Button 1", //Name of the button
	buttonOneUrl: "https://chilledbot.xyz", //URL of the button
	buttonTwoName: "Button 2", //Name of the button
	buttonTwoUrl: "https://chilledbot.xyz/freenitro" //URL of the button
};

const client = new rpc.Client({transport: 'ipc'});

rpc.register(bot.user.id);

client.on('ready', () => {
	console.log('RPC Started');
	client.request('SET_ACTIVITY', {
		pid: 9999,
		activity: {
			details: config.details,
			assets: {
				large_image: config.largeImageKeyName,
				large_text: config.largeImageText,
				small_image: config.smallImageKeyName,
				small_text: config.smallImageText,
			},
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
		}
	});
});

client.login(config.discordId);