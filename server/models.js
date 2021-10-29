const axios = require('axios');
const git = require('../expressconfig.js');

module.exports = {
  getAll: () => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),
};
