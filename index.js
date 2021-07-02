const rpc = require("discord-rpc")
const Pres = new rpc.Client({transport: "ipc"})
const scopes = ['rpc', 'rpc.api', 'messages.read'];


require('dotenv').config();
const activity = {
    details: "Playing Granblue Fantasy",
    assets: {
        large_image: "gbf",
        large_text: "GRANBLUE FANTASY",
        small_image: "chrome",
        small_text: "GRIND",
    },
    buttons: [
        {
            "label":"Check my crew!",
            "url": "http://game.granbluefantasy.jp/#guild/detail/583779"
        },
        {
            "label":"Check my profile!",
            "url":"http://game.granbluefantasy.jp/#profile/15040216"
        }
    ],
    timestamps: {start: Date.now()},
    instance:true
}
Pres.on("ready", () => {
    Pres.request("SET_ACTIVITY", {pid:process.pid, activity: activity})
    console.log("Presence on")
})
Pres.login({clientId:process.env.clientId, clientSecret:process.env.Clientsec}).catch(console.error)