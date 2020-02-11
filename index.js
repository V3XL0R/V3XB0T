bot.on("message", async message => {

//This finds the role by name
let allowedRole = message.guild.roles.find(r => r.name == 'AFK');

//if you mention anyone
  if (message.mentions.members.first()) {
  
//If you mention anyone with that role    
    if (message.mentions.members.first().roles.has(allowedRole.id)) {
    
//It will reply that they're AFK
      message.channel.send(`${message.mentions.members.first()} is AFK!`)
      
//Otherwise, it won't do anything (will get rather annoying if you don't have this else portion)
    } else {
       return;
    }
  }
});
