const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const got = require('got');
const moment = require('moment');
const db = require('quick.db');
const math = require('mathjs');
const request = require("request");
const ultrax = require("ultrax")
const {
    cmdHandler,
    logger
} = require("@silent-coder/discord-cmd-handler");
const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(200, 200);
const ctx = canvas.getContext('2d');
require('./util/eventLoader')(client);
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {


      var actvs = [
        `${client.guilds.cache.size} Sunucuda üye!`,
        `${client.users.cache.size} Kullanıcı ile işbirliği yapıyor`,
        `Mentalleri Yükseltmeye Geldi!`,
        `?yardım`
    ];

    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING' });
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING'});
    }, 9000);


      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');

    });
  client.on("guildMemberAdd", member => {
    if (member.guild.id !== "sunucuıd") return;

    client.channels.cache.get("kanalıd").send(` :inbox_tray: | Yeni bir kişi geldi **${member.guild.name}**, <@!${member.user.id}>, hoşgeldin !!!`);// Member role.
  })

  client.on("guildMemberRemove", member => {
    if (member.guild.id !== "sunucuıd") return;

    client.channels.cache.get("kanalıd").send(` :outbox_tray: | Hadi uza! **${member.user.tag}**`);
  });
  client.on('message', msg => {
  if (msg.content === 'Sadge') {
    msg.channel.send('https://tenor.com/view/50shades-sad-gif-13267761 AH LAN');
  }
});
client.on('message', msg => {
if (msg.content === 'sadge') {
  msg.channel.send('https://tenor.com/view/50shades-sad-gif-13267761 AH LAN');
}
});
client.on('message', msg => {
if (msg.content === 'Ahmet Kaya') {
  msg.channel.send('https://tenor.com/view/ahmet-kaya-zero-two-anime-gif-20648686');
}
});
client.on('message', msg => {
if (msg.content === 'bane') {
  msg.channel.send('toksik olma hıyarto! (╯°□°）╯︵ ┻━┻');
}
});
client.on('message', msg => {
if (msg.content === 'BANE') {
  msg.channel.send('toksik olma hıyarto! (╯°□°）╯︵ ┻━┻');
}
});
client.on('message', msg => {
if (msg.content === 'napim') {
  msg.channel.send('toksik olma hıyarto! (╯°□°）╯︵ ┻━┻');
}
});
client.on('message', msg => {
if (msg.content === 'NAPİM') {
  msg.channel.send('toksik olma hıyarto! (╯°□°）╯︵ ┻━┻');
}
});
client.on('message', msg => {
if (msg.content === 'Günaydın') {
  msg.channel.send(':sunny: Sanada Günaydın :sunny:');
}
});
client.on('message', msg => {
if (msg.content === 'Kuzey') {
  msg.channel.send('Eğer cevap vermiyorsa biraz sonra gelir ¯\_(ツ)_/¯');
}
});
client.on('message', msg => {
if (msg.content === 'kuzey') {
  msg.channel.send('Eğer cevap vermiyorsa biraz sonra gelir ¯\_(ツ)_/¯');
}
});
client.on('message', msg => {
if (msg.content === 'Seneye Görüşürüz') {
  msg.channel.send('Komik değil ulan! (╯°□°）╯︵ ┻━┻');
}
});
client.on('message', msg => {
if (msg.content === 'kes') {
  msg.channel.send('toksik olma hıyarto! (╯°□°）╯︵ ┻━┻');
}
});
client.on('message', msg => {
if (msg.content === 'Kes') {
  msg.channel.send('toksik olma hıyarto! (╯°□°）╯︵ ┻━┻');
}
});
client.on('message', msg => {
if (msg.content === 'KES') {
  msg.channel.send('toksik olma hıyarto! (╯°□°）╯︵ ┻━┻');
}
});
client.on('message', msg => {
if (msg.content === 'İyi Geceler') {
  msg.channel.send(':night_with_stars: Sanada İyi Geceler :night_with_stars: ');
}
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);
