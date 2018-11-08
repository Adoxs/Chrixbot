const discord = require ("discord.js")
const bot = new discord.Client();
const TOKEN = 'NTA3MzM1MDIxOTg0NzQzNDM3.DsX6hw.gXnZZwRC3gVvhIwtcPa1dltYj0c'

bot.on ('message', function(message){
    if(message.content == "Hello")
    { 
        message.reply("Hello how are you?")
    }
});

bot.on("ready" ,function(){
    console.log("Ready");
})

bot.login(TOKEN)
