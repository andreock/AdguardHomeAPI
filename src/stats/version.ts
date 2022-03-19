var get = require("node-fetch")
module.exports = async function add_filter(url: string, username: string, password: string) {
    var body = {

        "recheck_now":true

    }
    var response = await get(url + '/control/version.json', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64'),
        },
        body: JSON.stringify(body)
    });

    var data = await response.text();

        return data
    
}