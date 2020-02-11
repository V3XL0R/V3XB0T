const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

//in case bot goes psycho
  if (message.author.bot) return;
  
//if the command isn't done in the channel (optional)
  if (message.channel.id !== 'ChannelID') return message.reply(`this isn't the AFK room!`);
  
//starts the command
  if (message.content.startsWith("$noafk")) {
  
//This grabs your nickname
    nick = message.content.slice(7);
    
//This removes the [AFK] portion from your nickname
      let str = message.member.displayName;
      str = str.substring(-6);
      
//This removes the "AFK" role (won't work if you're the owner of the bot, but I tried it from alt account)
      if (!nick) {
        await message.member.removeRole('RoleID').catch(e => console.log(e.message))
        
/Sets your new nickname
        await message.member.setNickname(`${message.author.username}`);
        
//if you supplied a nickname, then this carries out with your set nickname
      } else {
        await message.member.removeRole('RoleID').catch(e => console.log(e.message))
        await message.member.setNickname(`${nick}`);
      }
      
//tells everyone it's removed
      await message.reply(`you are no longer AFK!`);
  }
};

module.exports.help = {
    name: 'noafk'
};
