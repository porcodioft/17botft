const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js') 

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [
["393270466066", "Owner", true],


global.stickerCommands = {o};
global.mods = []
global.premium = []  
global.blockList = []  
global.modoOwner = [] // Objeto para almacenar el estado del modo owner en cada grupo
// Variables globales
global.awaitingPasswords = {}; // Estructura global para rastrear contraseñas pendientes
// Almacena el conteo de mensajes por usuario y grupo.
// Modo de fallo de seguridad (inicialmente desactivado)
global.falloSeguridad = false;
global.tempCaja = {};
global.comandoList = [];

global.mensajesPorUsuario = {};  // Usamos un objeto en lugar de un array para asociar usuarios y grupos
global.muteList = global.muteList || {};
// Hacer muteList global para que se pueda usar en otros comandos

// Configuración Global
global.fallo2 = {}; // Objeto donde se almacenará el estado del fallo por grupo
global.cajasFuertes = {}; // Almacenará todas las cajas fuertes de los usuarios
global.antieliminar = {}; // Aquí se guardará el estado de los grupo
// Define los grupos donde se realizará el conteo de mensajes.
global.grupoChat = {
    "grupo-id-aqui": true,  // Grupo donde se hará el conteo de mensajes
    "otro-grupo-id": true,  // Otro grupo donde se hará el conteo de mensajes
};
//mute
// Ruta del archivo mute.json


//---------[ NOMBRE/INFO ]---------
global.botname = "17BotFt"
global.wm = 'botttazzo'
global.vs = '(Personalizado)'

//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +59309090909
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Bogota' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [`/`]

//---------[ APIS GLOBAL ]---------
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');
global.apis = 'https://deliriussapi-oficial.vercel.app'
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = "𝙲𝙾𝚁𝚃𝙰𝙽𝙰𝙱𝙾𝚃-𝟸.𝟶"
global.author = `${vs}`
 
//---------[ IMAGEN ]--------- 
global.img = "https://qu.ax/hQrA.jpg"
global.img1 = 'https://qu.ax/VqDa.jpg'
global.img2 = 'https://qu.ax/lwJi.jpg' 

global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.imagen4 = fs.readFileSync('./media/menu4.jpg')
global.imagen5 = fs.readFileSync('./media/menu5.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')
global.verificar = 'https://qu.ax/Wogm.mp4'

//---------[ ENLACES ]---------
global.md = 'https://github.com/porcodioft'
global.yt = 'https://www.youtube.com/glocky'
global.tiktok = 'https://www.instagram.com/filippotozzii'
global.fb = 'https://www.facebook.com/elrebelde21'
global.faceb = 'https://facebook.com/groups/872989990425789/'

global.n2 = "https://whatsapp.com/channel/0029Vb0j8QX84OmFZZsJKW15" //canal cortaba 
global.nna = 'https://whatsapp.com/channel/0029Vb0j8QX84OmFZZsJKW15' //Update 
global.nn = 'https://chat.whatsapp.com/HOcczbax7HR1TgRcLfeBRE' //LoliBot
global.nn2 = 'https://chat.whatsapp.com/HOcczbax7HR1TgRcLfeBRE' //Loli & Nova
global.nn3 = 'https://chat.whatsapp.com/HOcczbax7HR1TgRcLfeBRE' //Grupo de Colaboracion
global.nn4 = 'https://chat.whatsapp.com/HOcczbax7HR1TgRcLfeBRE' // Grupo COL 2
global.nn5 = 'https://chat.whatsapp.com/HOcczbax7HR1TgRcLfeBRE' //Grupo COL 3
global.nn6 = 'https://chat.whatsapp.com/HOcczbax7HR1TgRcLfeBRE' //test
global.nn7 = 'https://chat.whatsapp.com/FDRfhecUGrCEQswkg8FUYz' //Grupo ayuda sobre el bot
global.nn8 = 'https://chat.whatsapp.com/HOcczbax7HR1TgRcLfeBRE' //enlace lolibot
global.multi = 'https://chat.whatsapp.com/HOcczbax7HR1TgRcLfeBRE' //Grupo COL 4
global.nna2 = 'HOcczbax7HR1TgRcLfeBRE'

//---------[ INFO ]--------- 
global.info = { wait: '*_▬▭▭▭▭▭▭_*', 
waitt: '*_▬▬▭▭▭_*', 
waittt: '*_▬▬▬▬▭▭_*', 
waitttt: '*_▬▬▬▬▬▬▭_*', 
waittttt: '*_▬▬▬▬▬▬▬_*', 
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '🕕'
global.dmoji = '😈'
global.done = '💢'
global.error = '🚫' 
global.xmoji = '👿' 

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 35 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '6' // máxima advertencias 

//---------------[ IDs de canales ]----------------

global.ch = {
ch1: '120363266665814365@newsletter',
ch2: '120363301598733462@newsletter',
ch3: '120363160031023229@newsletter', 
ch4: '120363374372683775@newsletter', 
ch5: '120363385105081098@newsletter', 
}

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
