const discord = require ("discord.js")
const bot = new discord.Client();

bot.on ('message', function(message){
    if(message.content == "Hello")
    { 
        message.reply("Hello how are you?")
    }
});

bot.on("ready" ,function(){
    console.log("Ready");
})

bot.login(process.env.token)
