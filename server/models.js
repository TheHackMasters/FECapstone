const axios = require('axios');
const git = require('../config.js');

module.exports = {
  getAll: () => {
    return axios({
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      method: 'get',
      headers: {
        campus: git.tokens.campus ,
        Authorization: git.tokens.gitToken,

      },
    })
  }
}