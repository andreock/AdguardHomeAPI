var get = require('node-fetch');
module.exports = async function remove_filter(url: string, username: string, password: string, listurl: string) {
  var body = {
    url: listurl,
  };
  var response = await get(url + '/control/filtering/remove_url', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(username + ':' + password).toString('base64'),
    },
    body: JSON.stringify(body),
  });

  var data = await response.status;
  if (data == 400) {
    return 0;
  } else {
    return 1;
  }
};
