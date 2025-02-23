const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61VaY+qSBT9L/W17ZF9MelkWFTcF0RtJ/OhgALZCiwKBV/87xO0zetk3tKTDJ+Kojj33HPPvfUN4Dwq0QQ1oPcNFCQ6Q4raJW0KBHpAr4IAEdABPqQQ9EA5t8ZBmenUYvKxpanrUHo3m3Lt9EunUtIVHmm5IiSny/b9Ddw6oKjcNPJ+ARiL70wSRW5Gw3mZnSnPCDJpjs5qfJj19xKc0DXZKoHF7/pv4NYiwohEOOwXR5QhAtMJapYwIl+jz2lrK9wEknhmsWUtnWu2k+YMcQbnZl0lDVsUmZac9/EcX75GX+anVc2P0IQr8izcac4FzxfFylgcRa9ZkrPilJUg0vdzIzzol1GIkT/yEaYRbb6uu8mzubSZ81fHUF501g2Y614wJ7trajobBg0PL/Ptemh4Vvk14om8tvVLHo8Kfiptw/4iOpkLUfd3ZWxtFwVjlrtT/WIc5qb2mfiSPL2S/BfdhckpoMdKsS18XM3Fw1UkbCC6xzWZpIO03q66L9JhOuH4gfI1+pfdDrmzZD5lu9Ig3USyUF9I/rJd4rMy3dhk2D+5GjviE73/nT6kFfkVy4whyoSZlWbJn3LJiGyjEfDWHcnDkwpXM3vosLlzCYxTTa1xfghnNH6Zyu9GJEYigUxkz/b8auYOSbfr4Hw9NcVjbYRv94wS1Ix80GNvHUBQGJWUQBrl+L7HcR0A/bONPILoXV6wYwfnE+8PN/Yey9lci9TU0vZuqi25rlDvLtum++IeVCt2L2+gAwqSe6gskW9FJc1JM0NlCUNUgt5f90q1SROU5RSNIx/0gCrJMsMqKscw8p/lH5cjpCUsij8woqADApJnMwR6lFSoA+4/sIbJqKbE6ALHan1GkxiZ4bkBq8mcJHE806aYPYJuogyVFGYF6LGywPACK3PcrfP/8GBkZcCLmsDyisQYKtcXeU7TVYMfiKzRHwi/4cHf/u4AjGr68HGrPs92QBCRkjq4KtIc+k+TPz9Cz8srTO0Ge0a7QAT0Pm0jSiMclm1mFYbEO0ZnZLR5gF4A0xLdOsBH58hDLR7ASWDN8Va2WcmI53a8z+PqqrUVPOb4cYRTfZn3AvfVY0TvVfCh/OoGyHtloSB6su8jjxdBK8djhLT//NTRcCnpq7Oqr+PQpXhYohHmh6QqVzi8u/JhRUSQ/1TZhV5SFZs8QfgXuNcZzbVjvw7GUd23y626NxNbP0xm+eUT7sPioPft+9g2cr/Fm0rSfL5fb0BbrTbOv9zQY39gCAzb00/pIaZtrI+3FsVHFEZpCXrAmA1jyWWM/uxkyoQZDjUl1IywVfpZuOdAeDQcPYXQ0EfzCWfaDnpXUJUPiu7U2+lidxFc+kXB0DxaV0aivf0ABPTAebE4TsuTdjHEJBt2bXQdHgrqmZHN7as0V7AUL/uHQbKXseXzjGoJW04/7S+NtkB7OxbHcRYPFqsFqkcxs6rxXsGSeXlroz0M9DnYnoMLv1SqJL3QsFujw2TlLFlZh3AljaVREobO+0nUBgfvfQGZfOz2F+PYFMSRbGxr5Cj1Vc7U41RIq67qLcX6qNamrj1G1X1Uph9XVPQxRB52CyJ0n/gfhfhtwb47n7l1PmF83CE/cZfuwnwYhrZp05BJrWxpkZMOg4YfhCi4YkWfQH8KR4kbFhq4tS1dpJAGOcnamzJzIeiAFJZU+965PxgGrNoBWaMVhU0hfTY80NpnuVHA7R/8iL4dGwkAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

