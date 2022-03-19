var get = require("node-fetch")
module.exports = async function enable_safe(url: string, username: string, password: string) {
    var response = await get(url + '/control/safebrowsing/enable', {
        method: 'POST',
        headers: { 'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64') }
    });

    var data = await response.status;
    if (data != 200) {
        console.error("Error")
        return 0
    } else {
        return 1
    }
}

