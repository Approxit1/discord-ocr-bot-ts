// TYPESCRIPT IMPORTS:
import { Client } from 'discord.js'
import { createWorker } from 'tesseract.js'

// TYPESCRIPT EXPORTS:
export default (client: Client) => {
  client.on('messageCreate', async (message) => {
    const image = message.attachments.first()
    if (!image) {
      return
    }

    try {
      const worker = createWorker()
      await worker.load()
      await worker.loadLanguage('eng')
      await worker.initialize('eng')
      const {
        data: { text },
      } = await worker.recognize(image.url)
      await worker.terminate()

      console.log(text)
      message.reply(`\`\`\`\n${text}\`\`\``)
    } catch (e) {
      console.error(e)
    }
  })
}

// TYPESCRIPT EXPORTS:
export const config = {
  dbName: 'IMAGE_TO_TEXT',
  displayName: 'Image to Text',
}
