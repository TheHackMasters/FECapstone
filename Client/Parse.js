import $ from 'jquery';

import tokens from '../config.js';

const Parse = {
  sUrl: `https://app-hrsei-api.herokuapp.com/api/fec2/${tokens.campus}`,

  getStuff: (callback) => {
    $.ajax({
      url: `${Parse.sUrl}/products`,
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
};

export default Parse;
