const {EmbedBuilder, PermissionsBitField} = require("discord.js");
const db = require("croxydb")
const config = require("../config.js")
let prefix = config.prefix
exports.run = async (client, message, args) => {

 const embed = new EmbedBuilder()
 .setTitle("Godzilla - Yardım!")
 .setDescription(`${prefix}erkek-rol\n${prefix}kız-rol\n${prefix}kayıtlı-rol\n${prefix}kayıtsız-rol\n${prefix}hg-bb\n${prefix}yardım`)
.setColor("#007fff")
 message.channel.send({embeds : [embed]})

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "yardım"
};


