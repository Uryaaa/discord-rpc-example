const rpc = require("discord-rpc")
const Pres = new rpc.Client({transport: "ipc"})
const scopes = ['rpc', 'rpc.api', 'messages.read'];


require('dotenv').config();
const activity = {
    details: "Something",
    assets: {
        large_image: "some-img",
        large_text: "text",
        small_image: "some-img",
        small_text: "text",
    },
    buttons: [
        {
            "label":"button label",
            "url": "button-url"
        },
        {
            "label":"button label",
            "url":"button-url"
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
