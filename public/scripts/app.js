/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

$(document).ready(function() {

  $('.form-horizontal').submit(function(e){
    e.preventDefault();
    var formData= $(this).serialize();
    $(".form-horizontal")[0].reset();
    $.ajax({
      method: 'POST',
      url: '/api/albums',

      success: renderAlbum
    })
  })

  $('#albums').on('click', '.add-song', function(e) {
    e.preventDefault();
    var id= $(this).closest('.album').data('album-id');
});

});





// this function takes a single album and renders it to the page


$.ajax({
  method: 'GET',
  url: `/api/albums`,
  success: renderAlbum
});



function renderAlbum(albums) {
  albums.forEach(function(album){
    var trackList = [];
    var songArr = album.songs.map(function(song){
      trackList.push(`(${song.trackNumber}) ${song.name} `)
    });
    trackList = trackList.join(" - ")
    $('#albums').append(
      `<div class="row album" data-album-id=${album.id}>

        <div class="col-md-10 col-md-offset-1">
          <div class="panel panel-default">
            <div class="panel-body">


            <!-- begin album internal row -->
              <div class='row'>
                <div class="col-md-3 col-xs-12 thumbnail album-art">
                  <img src="/images/800x800.png" alt="album image">
                </div>

                <div class="col-md-9 col-xs-12">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <h4 class='inline-header'>Album Name:</h4>
                      <span class='album-name'>${album.name}</span>
                    </li>

                    <li class="list-group-item">
                      <h4 class='inline-header'>Artist Name:</h4>
                      <span class='artist-name'>${album.artistName}</span>
                    </li>

                    <li class="list-group-item">
                      <h4 class='inline-header'>Released date:</h4>
                      <span class='album-releaseDate'>${album.releaseDate}</span>
                    </li>
                    <li class="list-group-item">
                      <h4 class="inline-header">Songs:</h4>
                      <span>${trackList}</span>
                    </li>
                  </ul>
                </div>

              </div>
              <!-- end of album internal row -->

              <div class='panel-footer'>
                <button class='btn btn-primary add-song'>Add Song</button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- end one album -->`
    )
  })
}
