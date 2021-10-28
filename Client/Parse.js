import $ from 'jquery';

import tokens from '../config';

const Parse = {

  getStuff: {
    sUrl: `https://app-hrsei-api.herokuapp.com/api/fec2/${tokens.campus}/`,

    getBlogs: (callback) => {
      $.ajax({
        url: Parse.sUrl,
        method: 'GET',
        dataType: 'json',
        beforeSend(xhr) {
          /* Authorization header */
          xhr.setRequestHeader('Authorization', `${tokens.gitToken}`);
        },
        success: (data) => {
          console.log('success!', data);
          // callback(data);
        },
        error: (error) => {
          console.log('you done goofed!', error);
        },
      });
    },
  },
};
