# ASA Discord Global Chat NodeJS
Ark Ascended In game Global chat relay to Discord channel back and fort made in NodeJS and can be deployed on Docker


# Install Node.js
1. Download [Latest LTS](https://nodejs.org/dist/v20.9.0/node-v20.9.0-x64.msi)
2. Install

# Download and Setup the repo
1. Extract zip file
2. Go to directory
3. create a file name it .env (Env file is being ignored on repository for security purposes you have to make your own)
4. change all the required field with your own credentials
```
CLIENT_ID=
GUILD_ID=
CHANNEL_ID=
TOKEN=
HOST=
PORT=
RCONPWD=
PREFIX=
SUFFIX=
FILTERS=AdminCmd,Tribe Tamed a,Tamed a,was killed\!,added to the Tribe,RichColor,RCON: Not connected
```

5. Descriptions
```
CLIENT_ID Bot client id 
GUILD_ID ----------------- Discord Server (Right click to your server and Copy Server ID) make sure developer mode is on
CHANNEL_ID --------------- Channel to send and receive global chats (Right click to your channel and Copy Channel ID) make sure developer mode is on
TOKEN -------------------- Token Bot (Visit and create bot on Discord develoports link below)
HOST --------------------- IP or Host
PORT --------------------- Server game RCON port
RCONPWD ------------------ Server Admin/Cheat password
PREFIX ------------------- Start of the message
SUFFIX ------------------- End of the message
FILTERS ------------------- All known text buffer that should be remove
```
6. Discord [Dev link](https://discord.com/developers/docs/intro)
7. Open Discord (Profile) Settings then go to Advanced Section Click or Turn on Developer Mode

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

# Deploy without cache
```
sudo docker-compose build --no-cache
sudo docker-compose up -d
```

# Changing config .env
```
sudo docker-compose down
change .env
sudo docker-compose up -d
```

# Redeploy command on Docker
```
sudo docker-compose down && git pull && sudo docker image rm asadiscordglobalchatnodejs_app && sudo docker-compose up -d --build
```

# NOTES
1. npm start (if the app throws an error you need to restart the app manually so it is recommended to deploy it on docker for automation)
2. This app is only support 1 server/map and it will be updated as soon as ASA released more maps
3. Notice the changes on Filter add backslash to escape the exclamation point ```\!``` also adding double quotes will prevent any errors when deploying
4. env MAP should add space at the end eg: MAP="TheIsland "


