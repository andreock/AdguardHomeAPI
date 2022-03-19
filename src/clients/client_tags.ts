var get = require("node-fetch")
module.exports = async function clients_tags(url: string, username: string, password: string) {
    var response = await get(url + '/control/clients', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64') }
    });

    var data = await response.json();
    return data.supported_tags;
}