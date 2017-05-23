import config from '../config.js';
import "isomorphic-fetch";

async function getTopAlbums() {
  let response = await fetch(config.urls.getTopAlbums);
  let json = await response.json();
  //never use .then??????
  return json;
}

export default getTopAlbums;
