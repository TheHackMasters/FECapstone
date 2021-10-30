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

  getProdInfo: (prodID) => axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${prodID}`,
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),

  getProdStyles: (prodID) => axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${prodID}/styles`,
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),

  getProdRelated: (prodID) => axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${prodID}/related`,
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),
};
