
  var video = document.getElementById('fb-video');
  video.addEventListener('load', function() {
    var contentWindow = video.contentWindow;
    contentWindow.postMessage('{"event":"listening","id":0}', '*');

    window.addEventListener('message', function(event) {
      var data = JSON.parse(event.data);
      if (data.event === 'ready') {
        contentWindow.postMessage('{"method":"play"}', '*');
      }
      if (data.event === 'ended') {
        contentWindow.postMessage('{"method":"play"}', '*');
      }
    });
  });
