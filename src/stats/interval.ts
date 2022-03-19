var get = require("node-fetch")
module.exports = async function set_interval(url: string, username: string, password: string, period: number) {
    if (period == 0 || period == 1 || period == 7 || period == 30 || period == 90) {
        var body = {

            "interval": period

        }
        var response = await get(url + '/control/stats_config', {
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
    } else {
        console.error("Invalid period, must be 0,1,7,30 or 90")
        return 0
    }
   
    
}