var get = require("node-fetch")
module.exports = async function reset_stats(url: string, username: string, password: string) {
    var response = await get(url + '/control/stats_reset', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64'),
        }
    });

    var data = await response.status;
    if (data == 400) {
        return 0
    } else {
        return 1
    }
}