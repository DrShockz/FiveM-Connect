//███╗░░░███╗░█████╗░██████╗░███████╗  ██████╗░██╗░░░██╗
//████╗░████║██╔══██╗██╔══██╗██╔════╝  ██╔══██╗╚██╗░██╔╝
//██╔████╔██║███████║██║░░██║█████╗░░  ██████╦╝░╚████╔╝░
//██║╚██╔╝██║██╔══██║██║░░██║██╔══╝░░  ██╔══██╗░░╚██╔╝░░
//██║░╚═╝░██║██║░░██║██████╔╝███████╗  ██████╦╝░░░██║░░░
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝  ╚═════╝░░░░╚═╝░░░

//██████╗░██████╗░░██████╗██╗░░██╗░█████╗░░█████╗░██╗░░██╗███████╗
//██╔══██╗██╔══██╗██╔════╝██║░░██║██╔══██╗██╔══██╗██║░██╔╝╚════██║
//██║░░██║██████╔╝╚█████╗░███████║██║░░██║██║░░╚═╝█████═╝░░░███╔═╝
//██║░░██║██╔══██╗░╚═══██╗██╔══██║██║░░██║██║░░██╗██╔═██╗░██╔══╝░░
//██████╔╝██║░░██║██████╔╝██║░░██║╚█████╔╝╚█████╔╝██║░╚██╗███████╗
//╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝░╚════╝░░╚════╝░╚═╝░░╚═╝╚══════╝

// ## Code is created by DrShockz#0246


// Variables
const FiveM = require("fivem") 
const open = require('opener');
const { server_ip, server_port, join_count } = require('./config.json');

// Code
const srv = new FiveM.Server(`${server_ip}:${server_port}`) // Create server with info.

function getPlayers() {
    srv.getPlayers().then(function(data) {
        console.clear();
        if (data < join_count) {
            console.log(`Player count reached, connecting to server.`)
            open(`fivem://connect/${server_ip}:${server_port}`);
            setTimeout(() => {process.exit()}, 2000);
        } else {
            console.log(`Current Player Count: ${data}`)
            console.log(`${data - join_count} people until server auto-joins!`)
        }
    }).catch(err => { console.log("Failed to load config!"); setTimeout(() => {process.exit()}, 2000);});
    setTimeout(getPlayers, 60000);
}
setTimeout(getPlayers, 60000);