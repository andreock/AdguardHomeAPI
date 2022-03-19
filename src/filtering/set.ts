var get = require('node-fetch');
module.exports = async function set_filtering(
  url: string,
  username: string,
  password: string,
  inter: number,
  enable: boolean,
) {
  var body = {
    enabled: enable,
    interval: inter,
  };
  var response = await get(url + '/control/filtering/config', {
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
