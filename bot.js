const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

client.on('ready', async() => {
var server = "411555917482426368"; // ايدي السررفر
var channel = "411568552722694155";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast**')
    },305);
})

client2.on('ready', async() => {
var server = "411555917482426368"; // ايدي السررفر
var channel = "411570017818116096";//ايدي الروم
    setInterval(()=>{
    client2.guilds.get(server).channels.get(channel).send('** Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast**')
    },305);
    })

client3.on('ready', async() => {
var server = "411555917482426368"; // ايدي السررفر
var channel = "527940523806294027";//ايدي الروم
    setInterval(()=>{
    client3.guilds.get(server).channels.get(channel).send('** Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast Fast**')
    },305);
    })
client4.on('ready', async() => {
var server = "411555917482426368"; // ايدي السررفر
var channel = "411579989918482434";//ايدي الروم
    setInterval(()=>{
    client4.guilds.get(server).channels.get(channel).send('** Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz Azoz**')
    },305);
})

client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
