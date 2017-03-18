'use:strict';

import * as constants from '../Constants';

export default function fetchPixaBay(callback){
  fetch(constants.PIXA_BAY+'?key='+constants.PIXA_BAY_CLIENT_ID)
  .then((response) => response.json())
  .then((responseData) => {
    console.log('PIXABAY:'+responseData);
    return callback(null,responseData);
  })
  .catch((error) => {
    console.log('Error:'+error);
    return callback (error);
  });
}
