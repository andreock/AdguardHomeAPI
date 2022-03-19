var get = require("node-fetch")
module.exports = async function allowed_clients(url: string, username: string, password: string) {
    var response = await get(url + '/control/access/list', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64') }
    });

    var data = await response.json();
    return data.allowed_clients;
}