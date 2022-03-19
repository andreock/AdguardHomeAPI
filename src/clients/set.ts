var get = require("node-fetch")
module.exports = async function remove_client(url: string, username: string, password: string, allowed: string[], disallowed: string[], blocked: string[]) {
    var body = {

        "allowed_clients": allowed,
        "disallowed_clients": disallowed,
        "blocked_hosts": blocked

    }
    var response = await get(url + '/control/access/set', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64'),
        },
        body: JSON.stringify(body)
    });

    var data = await response.status;
    if (data == 400) {
        console.error("Failed to parse JSON or cannot save the list.")
        return 0
    } else if (data == 500) {
        console.error("Internal server error")
        return 0
    } else {
        return 1
    }
}