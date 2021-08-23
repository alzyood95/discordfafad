var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Your test",
assets : {
large_image : "Image",
large_text : "testoo" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "test1" , url : "Link1"},{label : "test2",url : "Link2"}]
}
})
})
client.login({ clientId : "879456185974128700" }).catch(console.error);
