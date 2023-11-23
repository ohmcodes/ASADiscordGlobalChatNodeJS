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
CLIENT_ID="your_bot_clientid"
GUILD_ID="your_discord_server_id"
CHANNEL_ID="your_bot_channelid"
TOKEN="your_bot_token"
HOST="your_ark_host_or_ip_address"
PORT="your_ark_rcon_port"
RCONPWD="your_ark_rconpassword"
VIP="name1,name2,name3"
VIPCOLOR="1,0,1,1"
PREFIX="[Discord] "
SUFFIX=""
MAP="[TheIsland] "
CLUSTER="Vanilla"
FILTERS="AdminCmd,Tribe Tamed a,Tamed a,was killed!,added to the Tribe,RichColor,RCON: Not connected,SERVER:,Tribe,Day"
```

5. Descriptions
```
CLIENT_ID ---------------- Bot client id 
GUILD_ID ----------------- Discord Server (Right click to your server and Copy Server ID) make sure developer mode is on
CHANNEL_ID --------------- Channel to send and receive global chats (Right click to your channel and Copy Channel ID) make sure developer mode is on
TOKEN -------------------- Token Bot (Visit and create bot on Discord develoports link below)
HOST --------------------- IP or Host
PORT --------------------- Server game RCON port
RCONPWD ------------------ Server Admin/Cheat password
VIP ---------------------- Each name should separate by quoma (,) Node: exact name on discord
VIPCOLORPRE -------------- Color <RichColor Color=\"1,0,1,0\">
VIPCOLORSUF -------------- Closing </> 
PREFIX ------------------- Start of the message
SUFFIX ------------------- End of the message
MAP ---------------------- Current MAP
CLUSTER ------------------ To know where cluster to save if running multiple cluster
FILTERS ------------------ All known text buffer that should be remove
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
3. Adding double quotes will prevent any errors when deploying
4. env MAP should add space at the end eg: MAP="[TheIsland] " also same as PREFIX and SUFFIX


