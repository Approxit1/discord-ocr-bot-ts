// TYPESCRIPT IMPORTS:
import DJS, { Intents } from 'discord.js'
import WOK from 'wokcommands'
import path from 'path'
import 'dotenv/config'

const client = new DJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', async () => {
  new WOK(client, {
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
    testServers: ['879296318395277352'],
    typeScript: true, // Only use this if you are using Typescript AND "ts-node"
  })
})

client.login(process.env.TOKEN)
