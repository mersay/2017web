import config from '../config.js';
import "isomorphic-fetch";

async function getRecentTracks() {
  let response = await fetch(config.urls.getRecentTracks);
  let json = await response.json();
  return json;
}

export default getRecentTracks;
/**
 * Created by MercedesLo on 2017-05-15.
 */
