const Discord = require('discord.js');
const playerdata = require('./playerdata');
const fs = require('fs');
const token = require('./config.json').token;
const client = new Discord.Client();
client.cmds = new Discord.Collection();
client.aliases = new Discord.Collection();
var files;
for (let folder of fs.readdirSync(`${__dirname}/commands/`)) {
    switch (folder) {
        case "administration":
            var i = 0;
            files = fs.readdirSync(`${__dirname}/commands/${folder}/`).length; if (files < 10) { files = "0" + files }
            for (let file of fs.readdirSync(`${__dirname}/commands/${folder}/`)) {
                if (!file.endsWith(".js")) return;
                let name = file.split(".")[0];
                try {
                    let props = require(`./commands/${folder}/${name}`);
                    client.cmds.set(name, props);
                    if (props.conf && props.conf.aliases) {
                        props.conf.aliases.forEach(alias => {
                            client.aliases.set(alias, name);
                        });
                    }
                }
                catch (e) {
                    console.log(e)
                }
            };
            if (i >= 1) {
                console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[31m'} ${i} failed.${'\x1b[0m'}`);
            }
            else { console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[32m'} ${i} failed.${'\x1b[0m'}`) }
            break;
        case "help":
            var i = 0;
            files = fs.readdirSync(`${__dirname}/commands/${folder}/`).length; if (files < 10) { files = "0" + files }
            for (let file of fs.readdirSync(`${__dirname}/commands/${folder}/`)) {
                if (!file.endsWith(".js")) return;
                let name = file.split(".")[0];
                try {
                    let props = require(`./commands/${folder}/${name}`);
                    client.cmds.set(name, props);
                    if (props.conf && props.conf.aliases) {
                        props.conf.aliases.forEach(alias => {
                            client.aliases.set(alias, name);
                        });
                    }
                }
                catch (e) {
                    i += 1;
                    Err(e)

                }
            };
            if (i >= 1) {
                console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[31m'} ${i} failed.${'\x1b[0m'}`);
                function Err(e) {
                    console.log(e)
                }
            }
            else { console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[32m'} ${i} failed.${'\x1b[0m'}`) }
            break;
        case "misc":
            var i = 0;
            files = fs.readdirSync(`${__dirname}/commands/${folder}/`).length; if (files < 10) { files = "0" + files }
            for (let file of fs.readdirSync(`${__dirname}/commands/${folder}/`)) {
                if (!file.endsWith(".js")) return;
                let name = file.split(".")[0];
                try {
                    let props = require(`./commands/${folder}/${name}`);
                    client.cmds.set(name, props);
                    if (props.conf && props.conf.aliases) {
                        props.conf.aliases.forEach(alias => {
                            client.aliases.set(alias, name);
                        });
                    }
                }
                catch (e) {
                    i += 1;
                    Err(e)

                }
            };
            if (i >= 1) {
                console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[31m'} ${i} failed.${'\x1b[0m'}`);
                function Err(e) {
                    console.log(e)
                }
            }
            else { console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[32m'} ${i} failed.${'\x1b[0m'}`) }
            break;
        case "moderation":
            var i = 0;
            files = fs.readdirSync(`${__dirname}/commands/${folder}/`).length; if (files < 10) { files = "0" + files }
            for (let file of fs.readdirSync(`${__dirname}/commands/${folder}/`)) {
                if (!file.endsWith(".js")) return;
                let name = file.split(".")[0];
                try {
                    let props = require(`./commands/${folder}/${name}`);
                    client.cmds.set(name, props);
                    if (props.conf && props.conf.aliases) {
                        props.conf.aliases.forEach(alias => {
                            client.aliases.set(alias, name);
                        });
                    }
                }
                catch (e) {
                    i += 1;
                    Err(e)

                }
            };
            if (i >= 1) {
                console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[31m'} ${i} failed.${'\x1b[0m'}`);
                function Err(e) {
                    console.log(e)
                }
            }
            else { console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[32m'} ${i} failed.${'\x1b[0m'}`) }
            break;
        case "utility":
            var i = 0;
            files = fs.readdirSync(`${__dirname}/commands/${folder}/`).length; if (files < 10) { files = "0" + files }
            for (let file of fs.readdirSync(`${__dirname}/commands/${folder}/`)) {
                if (!file.endsWith(".js")) return;
                let name = file.split(".")[0];
                try {
                    let props = require(`./commands/${folder}/${name}`);
                    client.cmds.set(name, props);
                    if (props.conf && props.conf.aliases) {
                        props.conf.aliases.forEach(alias => {
                            client.aliases.set(alias, name);
                        });
                    }
                }
                catch (e) {
                    i += 1;
                    Err(e)

                }
            };
            if (i >= 1) {
                console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[31m'} ${i} failed.${'\x1b[0m'}`);
                function Err(e) {
                    console.log(e)
                }
            }
            else { console.log(`Loaded${'\x1b[33m'} ${files} ${'\x1b[0m'}files from ${folder}.${'\x1b[32m'} ${i} failed.${'\x1b[0m'}`) }
            break;
        default:

    }
};
for (let file of fs.readdirSync(`${__dirname}/events/`)) {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

client.on('guildMemberAdd', member => {
    client.user.setPresence({
        game: {
            name: `${client.guilds.get('639525922638135297').memberCount} gamers`,
            type: "WATCHING"
        }
    })
    playerdata[member.user.id] = {
        xp: 0,
        xpmax: 100,
        level: 0,
        gems: 0,
        coins: 0
    };
    const channel = member.guild.channels.find(channel => channel.name === '📖member-logs')
    const role = member.guild.roles.get("639565406117429278")
    if (!role) console.log('uh oh')
    if (!channel) return;

    var welcome = new Discord.RichEmbed()
        .setTitle('User Joined')
        .setDescription(`${member.user.tag} joined.`)
        .setTimestamp()
        .setColor("00FF00");
    channel.send(welcome);
    const DM1 = new Discord.RichEmbed()
        .setTitle('Thanks For Joining Us!')
        .setDescription('We can\'t wait to introduce you to our fellow gaming team!')
        .setColor('00FF00')
        .setThumbnail('https://toppng.com/public/uploads/thumbnail/waving-hand-emoji-svg-11549875522zvoybe3d5m.png');
    const DM2 = new Discord.RichEmbed()
        .setTitle('Here are some Tips:')
        .setColor('00FF00')
        .setDescription(`- Make sure to read <#639630318424424451>\n- Get roles in <#639623131761344523>\n- Check each channel\'s pins\n- Use ***help** if you\'re stuck!`)
        .setThumbnail('https://www.pinclipart.com/picdir/big/173-1737471_infobox-info-icon-svg-info-icon-svg-clipart.png')
        .setFooter('Have A Great Day!');
    member.send(DM1)
    member.send(DM2)
    member.addRole(role)
});
client.on('guildMemberRemove', member => {
    client.user.setPresence({
        game: {
            name: `${client.guilds.get('639525922638135297').memberCount} gamers`,
            type: "WATCHING"
        }
    })
    playerdata[member.user.id] = {}
    const channel = member.guild.channels.find(channel => channel.name === '📖member-logs');
    const leave = new Discord.RichEmbed()
        .setTitle('User Left')
        .setDescription(`${member.user.tag} left.`)
        .setTimestamp()
        .setColor('FF0000');
    channel.send(leave)
})
client.login(token)