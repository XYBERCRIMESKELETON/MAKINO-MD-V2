const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"WJAwCeWv7dsLTocGHZ+4d2nGMQKPW0BvxDCfhjUE+ks="},"public":{"type":"Buffer","data":"xrHJM0SD4c16nYI2lfz1ZcYkgAIHzR2eSHNijDIrsA4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"iNFpgK9N9YL53gxxs7Jfa0Q32icIAW2eJ40Ln4hQxFY="},"public":{"type":"Buffer","data":"xckOPvfKcrZTN4XVumm7/1aHM8mVKaR1ekwmmVzH4QQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"AAhLMlZhMAZBo2eDGKyhd4y8j6segBJE0angStGW/k4="},"public":{"type":"Buffer","data":"llfKCV3VpNxv6aLtTfZ8RqQm6w4BaB9JzZi+3AJg+w8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"oLguj8MFthl/HAqv1rWuazLYQW0YLqpy4O0w5HyJv2s="},"public":{"type":"Buffer","data":"Ish7E62xeuIByPb3Ict/0jsRZy+CqzGtS3WTncp9KVo="}},"signature":{"type":"Buffer","data":"HeYo8iznL/8UHWuFkbEL3lqiP2KZvDnzSn1d3XyawfTkdM9zcRSNg06uW9GxCGWCU0NJZN8rAuYXsmwMiAFgjA=="},"keyId":1},"registrationId":199,"advSecretKey":"EKlIPSQYAhPRpWumx/aDt3Kql81xZZthflKjYey9Tyg=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"up5UN2s8R_KDTYBL8bzg7w","phoneId":"750bbccc-0653-444a-be09-bce5481be08c","identityId":{"type":"Buffer","data":"xICFhvU4bhPoA+GK4t0xvXn588A="},"registered":true,"backupToken":{"type":"Buffer","data":"0OezSqpp/6JmD0N/P6XWeRt3l24="},"registration":{},"pairingCode":"NZR7GK57","me":{"id":"263719718777:6@s.whatsapp.net","name":"Cyber_Crime_Skeleton_YT"},"account":{"details":"CJHOjpMEENiEo7UGGAIgACgA","accountSignatureKey":"FdGIf1nuCAlZC3wuWJxyxg/MVuDZlp8fN0KQ0HrEoT0=","accountSignature":"/DYXFtxMsY4JGs7AJRkfQfovAhJqSwXT1wgJnvHNCMSL+nqrzhQXwuA+8xVkaC+iky8UddIyXWXoZr7i03kVDQ==","deviceSignature":"P3jVIe260wO7465WDLZ15nSYcgDDG0xKVI0vEPVqTakINtcar2eQjeONPzx9CFk8lQWmezQozIUg0PjB+DO3hA=="},"signalIdentities":[{"identifier":{"name":"263719718777:6@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRXRiH9Z7ggJWQt8LliccsYPzFbg2ZafHzdCkNB6xKE9"}}],"platform":"smba","lastAccountSyncTimestamp":1722335846,"myAppStateKeyId":"AAAAAGF5"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
