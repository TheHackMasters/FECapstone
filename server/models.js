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

  getAllQs: (product_id) => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/',
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
    params: {
      product_id,
    }
  }),

  getAnswers: (product_id) => axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${product_id}/answers`,
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
    params: {
      product_id,
    },
  }),

  getProdReviews: (product_id) => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews',
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
    params: { product_id },
  }),

  getProdReviewsMeta: (product_id) => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta',
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
    params: { product_id },
  }),

  getCart: () => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart',
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),

  postCart: (sku) => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart',
    method: 'post',
    data: sku,
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),

  postInteractions: (obj) => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/interactions',
    method: 'post',
    data: obj,
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),
};
