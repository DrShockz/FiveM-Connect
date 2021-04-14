// Variables
const FiveM = require("fivem") // Import the npm package.
const preconnect = "fivem://connect/"

// Server Info

const url = "103.1.213.70";
const port = "30120"

const id = "3y3jjr"
const connectCount = "250"

const timeout = 1000;

// Code

const srv = new FiveM.Server(`${url}:${port}`) // Set the IP with port.

function getPlayers() {
    srv.getPlayers().then(function(data) {
        if (data > connectCount) {
            console.log(data);
        }
    });
    setTimeout(getPlayers, timeout);
}

setTimeout(getPlayers, timeout);