require('dotenv').config()
const { Rcon } = require('rcon-client');
const { Client, Events, GatewayIntentBits} = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [
  GatewayIntentBits.Guilds, 
  GatewayIntentBits.GuildMessages, 
  GatewayIntentBits.MessageContent
]});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// RCON configuration
const rconConfig = {
  host: process.env.HOST,
  port: process.env.PORT,
  password: process.env.RCONPWD,
};

// Function to send an RCON command
async function sendRconCommand(command) {
  try {
    // Connect to the RCON server
    const rcon = new Rcon(rconConfig);
    await rcon.connect();

    // Send the command
    const response = await rcon.send(command);
    parseMessage(response);
    // Disconnect from the server
    await rcon.end();
  } catch (error) {
    //console.error('Error:', error);
    setTimeout(async ()=> {
      await sendRconCommand(command);
    }, 5000)
  }
}

async function parseMessage(res){
  var msgFilter = `${process.env.FILTERS}`.split(',');
  if(!res.includes("Server received, But no response!!")){
    const channel = client.channels.cache.find(channel => channel.id === process.env.CHANNEL_ID)
    
    if (!msgFilter.some(v => res.includes(v))) {
        // removed double names eg: name (name): <msg>
        channel.send(`${process.env.MAP}${res.replace(/ *\([^)]*\) */g, "")}`);
    }
  }
}


client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    if(message.channel.id != process.env.CHANNEL_ID) return;

    var msg = ""
    var vip = `${process.env.VIP}`.split(',')
    var vipBool = vip.includes(message.member.displayName)

    msg += `ChatLogAppend `
    msg += `${(process.env.PREFIX !="")? `${process.env.PREFIX}`: ""}`
    msg += `${(vipBool)? process.env.VIPCOLORPRE:""}`
    msg += `${message.member.displayName}`
    msg += `${(vipBool)? process.env.VIPCOLORSUF:""}`
    msg += ": "
    msg += `${message.content}`
    msg += `${(process.env.SUFFIX !="")? `${process.env.SUFFIX}`: ""}`

    sendRconCommand(msg);
})

setInterval(function() {
  sendRconCommand("GetChat");
}, 1000)

client.login(process.env.TOKEN);
