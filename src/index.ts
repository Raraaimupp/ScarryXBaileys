import chalk from 'chalk'
import makeWASocket from './Socket/index'

export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

const asciiArt = `
▀▄▀ ▄▀█ ▀█▀ ▄▀█ █▄░█ █ █▀▀ ▄▀█ █░░
█░█ █▀█ ░█░ █▀█ █░▀█ █ █▄▄ █▀█ █▄▄

█▄▄ █▀▀ █░░ █░░ ▄▀█
█▄█ ██▄ █▄▄ █▄▄ █▀█
`

console.log(chalk.redBright(asciiArt))
console.log(chalk.cyanBright.bold('💠 Xatanical Baileys 💠'))
console.log(chalk.red('❤️ Makasih udah pakai Baileys Ini ❤️'))

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
