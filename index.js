const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const { Discord } = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const { prefix, token, discord_owner_id } = require('./config.json');

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: discord_owner_id // value comes from config.json
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
    ['music', 'Music Command Group'],
    ['gifs', 'Gif Command Group'],
    ['other', 'random types of commands group'],
    ['guild', 'guild related commands']
	])
  .registerDefaultCommands({
    eval: false,
    prefix: false,
    commandState: false
  })
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity(`${prefix}help`, {
    type: 'WATCHING',
    url: 'https://github.com/gsv/Midori-Bot'
  });
});

client.on('error', console.error);

/*client.on('message', async message => {
  if(message.author.bot) return
  if(!message.content.startsWith(prefix)) return

  const args = message.content.substring(prefix.length).split(" ")

  if(message.content.startsWith('${prefix}play')){
  }
});*/

client.login(token)