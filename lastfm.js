/**
 * Created by MercedesLo on 2017-03-04.
 */
"use strict";

import config from './config.js';

var LastFmNode = require('lastfm').LastFmNode;

var lastfm = new LastFmNode({
  api_key: config.api,    // sign-up for a key at http://www.last.fm/api
  secret: config.secret,
  useragent: 'merc/v1.0 MyWeb' // optional. defaults to lastfm-node.
});

/* function getLastSong(){
 lastfm.request(method, options);
 } */

var trackStream = lastfm.stream(config.username);

trackStream.on('lastPlayed', function(track) {
  console.log('Last played: ' + track.name);
});

trackStream.on('nowPlaying', function(track) {
  console.log('Now playing: ' + track.name);
});

trackStream.on('scrobbled', function(track) {
  console.log('Scrobbled: ' + track.name);
});

trackStream.on('stoppedPlaying', function(track) {
  console.log('Stopped playing: ' + track.name);
});

trackStream.on('error', function(error) {
  console.log('Error: '  + error.message);
});

trackStream.start();
