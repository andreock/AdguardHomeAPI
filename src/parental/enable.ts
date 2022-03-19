var get = require("node-fetch")
module.exports = async function add_filter(url: string, username: string, password: string, elem: string) {
    var response = await get(url + '/control/parental/enable', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64'),
        },
        body: elem
    });

    var data = await response.status;

    if (data != 200) {
        console.error("Error detected")
        return 0
    } else {
        return 1
    }

}