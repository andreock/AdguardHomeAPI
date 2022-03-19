var get = require('node-fetch');
module.exports = async function remove_rewrite(
  url: string,
  username: string,
  password: string,
  domain: string,
  answer: string,
) {
  var body = {
    domain: domain,
    answer: answer,
  };
  var response = await get(url + '/control/rewrite/delete', {
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
