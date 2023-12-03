require('dotenv').config()
const { Rcon } = require('rcon-client');
const { Client, Events, GatewayIntentBits} = require('discord.js');

var rcon;

// Create a new client instance
const client = new Client({ intents: [
  GatewayIntentBits.Guilds, 
  GatewayIntentBits.GuildMessages, 
  GatewayIntentBits.MessageContent
]});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    if(message.channel.id != process.env.CHANNEL_ID) return;

    var msg = ""
    var vip = `${process.env.VIP}`.split(',')
    var vipBool = vip.includes(message.member.displayName)

    msg += `${process.env.COMMAND} `
    msg += `${(process.env.PREFIX !="")? `${process.env.PREFIX}`: ""}`
    msg += `${(vipBool)? `<RichColor Color=\"${process.env.VIPCOLOR}">`:""}`
    msg += `${message.member.displayName}`
    msg += `${(vipBool)? "</> ":""}`
    msg += ": "
    msg += `${message.content}`
    msg += `${(process.env.SUFFIX !="")? `${process.env.SUFFIX}`: ""}`
    logger(msg)
    sendRconCommand(msg);
})

async function rConnect(){
  try {
    // Connect to the RCON server
    rcon = new Rcon({
      host: process.env.HOST,
      port: process.env.PORT,
      password: process.env.RCONPWD,
    });
    
    await rcon.connect().then(()=>{
      logger(`RCON is connected ${process.env.HOST}`)
    })
  } catch (error) {
    logger(`Error RCON connection on ${process.env.HOST} Error: ${error}`)
  }
}

// Function to send an RCON command
async function sendRconCommand(command) {
  try {
    // Send the command
    await rcon.send(command).then((res)=>{
      parseMessage(res)
    })
  } catch (error) {
    logger(`Error sending command: ${error}`)
  }
}

async function parseMessage(res){
  var msgFilter = `${process.env.FILTERS}`.split(',');
  
  if(!res.includes("Server received, But no response!!")){
    const channel = client.channels.cache.find(channel => channel.id === process.env.CHANNEL_ID)
    
    if (!msgFilter.some(v => res.includes(v))) {
        logger(res.trim())
        channel.send(`${process.env.MAP}${res.trim()}`)
    }
  }
}

function logger(msg){
  if(process.env.DEBUG=="true")
    console.log(msg)
}

rConnect();
setInterval(function() {
  sendRconCommand("GetChat");
}, parseInt(process.env.INTERVAL))

client.login(process.env.TOKEN);
