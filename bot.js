const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', async() => {
var server = "411555917482426368"; // ايدي السررفر
var channel = "524933827358097408";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz**')
    },305);
})

client.login(process.env.BOT_TOKEN);
