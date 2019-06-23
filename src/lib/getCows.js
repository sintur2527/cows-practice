const axios = require('axios');

module.exports = {
  get: () => {
    axios
      .get('http://localhost:8000/api/cows')
      .then(resp => {
        console.log('resp', resp.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
};
