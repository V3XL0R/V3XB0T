const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

//in case bot goes psycho
  if (message.author.bot) return;
  
//if the command isn't done in the channel (optional)
  if (message.channel.id !== 'ChannelID') return message.reply(`this isn't the AFK room!`);
  
//starts the command
  if (message.content.startsWith("$afk")) {
  
//This grabs your nickname
    nick = message.content.slice(5);
    
    //This will set it to your username if you don't supply a nickname
      if (!nick) {
      
//This adds the "AFK" role to you (won't work if you're the owner of the bot, but I tried it from alt account)
        await message.member.addRole('RoleID').catch(e => console.log(e.message))
        
//Sets your new nickname
        await message.member.setNickname(`[AFK] ${message.author.username}`);
        
//if you supplied a nickname, then this carries out with your set nickname
      } else {
        await message.member.addRole('RoleID').catch(e => console.log(e.message))
        await message.member.setNickname(`[AFK] ${nick}`);
      }
      
//tells everyone it's set
      await message.reply(`your AFK status is set!`)
  }
};

module.exports.help = {
    name: 'afk'
};
