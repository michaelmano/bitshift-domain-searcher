import axios from 'axios';

export default domain => {
  const url =
    'https://api.godaddy.com/v1/domains/available?domain=' +
    domain +
    '&checkType=FAST&forTransfer=false&currency=AUD';

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  return axios.get(url, config);
};
