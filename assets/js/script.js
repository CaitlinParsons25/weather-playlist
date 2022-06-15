window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
        };
        console.log(element)
    let callback = (EmbedController) => {document.querySelectorAll('ul#episodes > li > button').forEach(
        episode => {
            episode.addEventListener('click', () => {
                EmbedController.loadUri(episode.dataset.spotifyId)
            });
        })
    };
    IFrameAPI.createController(element, options, callback);
  };