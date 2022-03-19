var get = require("node-fetch")
module.exports = async function remove_client(url: string, username: string, password: string, ip:string) {
    var body = {
        "name":ip
    };
    var response = await get(url + '/control/client/delete', {
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