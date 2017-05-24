/**
 * Created by MercedesLo on 2017-05-14.
 */

$(document).ready(function() {
  $.getJSON('https://floating-falls-55555.herokuapp.com/getTopAlbums', function(data) {
    let topAlbums = data[0].topalbums.album;
    Object.keys(topAlbums).forEach((key) => {
      let link = topAlbums[key].image[3]["#text"];  //3 for xlg img
      $(`#album${key}`).prepend("<img class='img-responsive' src= " + link + "/>");
      }
    );
  });

  $.getJSON('https://floating-falls-55555.herokuapp.com/getRecentTracks', function(data) {
    let recentTrackName = data[0].recenttracks.track[0].name;
    let recentTrackArtist = data[0].recenttracks.track[0].artist['#text'];
    console.log(recentTrackName,recentTrackArtist);
    $('#songName').innerHTML = recentTrackName + " by " + recentTrackArtist;

  });

});
