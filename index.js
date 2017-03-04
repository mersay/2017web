/**
 * Created by MercedesLo on 2017-03-04.
 */
var LastFmNode = require('lastfm').LastFmNode;

var lastfm = new LastFmNode({
  api_key: 'apikey',    // sign-up for a key at http://www.last.fm/api
  secret: 'secret',
  useragent: 'appname/vX.X MyApp' // optional. defaults to lastfm-node.
});