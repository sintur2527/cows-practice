const axios = require('axios');

module.exports = {
  get: () => {
    try {
      return axios.get('http://localhost:8000/api/cows');
    } catch (err) {
      console.error(err);
    }
  },
};
