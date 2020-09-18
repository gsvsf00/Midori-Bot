
<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Midori" src="https://cdn.discordapp.com/avatars/719733315090907176/fa9bc0b53a0274f70311449be07a8f92.png?size=256">  

# Atlanta
[![](https://img.shields.io/discord/706916588250726400.svg?logo=discord&colorB=7289DA)](https://discord.gg/maERGBd)
[![](https://discordbots.org/api/widget/status/557445719892688897.svg)](https://discordbots.org/bot/557445719892688897)
[![](https://img.shields.io/badge/discord.js-v12.0.0--dev-blue.svg?logo=npm)](https://github.com/discordjs)

# Discord Music bot

Midori-Bot is a open source Discord bot coded in JavaScript with [Discord.js](https://discord.js.org) by [gsv99](https://github.com/gsv99).  
Feel free to add a star ⭐ to the repository to promote the project!

A simple discord bot that helps you manage your server by providing useful commands like playing music or deleting text messages.

You can find the tutorial about building a discord music bot [here](https://www.youtube.com/playlist?list=PLVzaElkTvlQae8XJ0ujnEgz1GviufNx8h). 

## Table of content

* [Features](#features)
* [Requirements](#requirements)
* [Getting started](#getting-started)
* [Common errors](#common-errors)
* [Author](#author)
* [License](#license)

## Features

- Ban
- Userinfo
- Play music
- Skip songs
- Stop music
- Purge text messages

## Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [FFMPEG](https://www.ffmpeg.org/)

## Getting started

First, make sure you have all the required tools installed on your local machine then continue with these steps.

### Installation

```bash
# Clone the repository
git clone https://github.com/gsv99/Midori-Bot.git

# Enter into the directory
cd discord-bot/

# Install the dependencies
npm install
```

### Configuration

After cloning the project and installing all dependencies, you need to add your Discord API token in the config.json file.

### Starting the application

```bash
node index.js

## Common errors

Here is a list of common errors and how you can fix them.

### Dependencies aren't up to date

The packages used in this repository get updated often, especially the ytdl-core package. That is why it is always worth a try updating those if you get an error like `invalid URL: undefined` or when the bot crashes when running the play command.

```bash
npm install ytdl-core@latest
```

## Author

Gabriel da Silva Vasconcelos

## Support me

<a href="" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/500px-PayPal_logo.svg.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details