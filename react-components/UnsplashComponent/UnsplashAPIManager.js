'use:strict';

import * as constants from '../Constants';

export default function fetchUnsplash( callback ){
  fetch(constants.UNSPLASH_API_URL+'?client_id='+constants.UNSPLASH_CLIENT_ID)
    .then((response) => response.json())
    .then((responseData) => {
      console.log('UNSPLASH:'+responseData);
      return callback (null,responseData );
    })
    .catch((error) => {
      console.log('Error:'+error);
      return callback (error );
    });
}
