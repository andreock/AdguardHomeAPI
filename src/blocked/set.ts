var get = require("node-fetch")
module.exports = async function set_blocked(url: string, username: string, password: string, service: string[]) {
    var body = service;
    var response = await get(url + '/control/blocked_services/set', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64'),
        },
        body: JSON.stringify(body)
    });

    var data = await response.status;
    if (data == 400) {
        return 0
    } else {
        return 1
    }
}