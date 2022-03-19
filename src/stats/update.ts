var get = require('node-fetch');
module.exports = async function update(url: string, username: string, password: string) {
  var response = await get(url + '/control/update', {
    method: 'POST',
    headers: { Authorization: 'Basic ' + Buffer.from(username + ':' + password).toString('base64') },
  });

  var data = await response;
  return data.status;
};
