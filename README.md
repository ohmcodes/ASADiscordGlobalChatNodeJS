# ASA Discord Global Chat NodeJS
Ark Ascended In game Global chat relay to Discord channel back and fort made in NodeJS and can be deployed on Docker


# Install Node.js
1. Download [Latest LTS](https://nodejs.org/dist/v20.9.0/node-v20.9.0-x64.msi)
2. Install

# Create .env file
#### Env file is being ignored on repository for security purposes you have to make your own
1. create a file name it .env
2. change all the required field with your own credentials
```
CLIENT_ID=
GUILD_ID=
CHANNEL_ID=
TOKEN=
HOST=
PORT=
RCONPWD=
```
3. Descriptions
```
CLIENT_ID Bot client id 
GUILD_ID ----------------- Discord Server (Right click to your server and Copy Server ID) make sure developer mode is on
CHANNEL_ID --------------- Channel to send and receive global chats (Right click to your channel and Copy Channel ID) make sure developer mode is on
TOKEN -------------------- Token Bot (Visit and create bot on Discord develoports link below)
HOST --------------------- IP or Host
PORT --------------------- Server game RCON port
RCONPWD ------------------ Server Admin/Cheat password
```
4. Discord [Dev link](https://discord.com/developers/docs/intro)
5. Open Discord (Profile) Settings then go to Advanced Section Click or Turn on Developer Mode

# Deploy
- Ubuntu/Linux
```
sudo docker-compose up -d --build
```
- Windows [Docs](https://docs.docker.com/compose/install/)

# Deploy on NPM
1. go to directory
2. run (it will generate files like dependencies)
```
npm i
``` 
3. start the app
```
npm start
```

# NOTES
1. npm start (if the app throws an error you need to restart the app manually so it is recommended to deploy it on docker for automation)
2. This app is only support 1 server/map and it will be updated as soon as ASA released more maps


