window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
        uri: 'spotify:user:borac124:playlist:1hHLFEx94CEANlFQQCh4KT'
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