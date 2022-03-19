var get = require("node-fetch")
module.exports = async function stats_dns_blocked(url: string, username: string, password: string) {
    var response = await get(url + '/control/stats', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64') }
    });

    var data = await response.json();
    return data.num_blocked_filtering;
}