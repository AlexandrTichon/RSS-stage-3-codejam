import findPoet from './findSelectedPoet';

function appendVideo() {
  const POET = findPoet();
  const videoLink = document.createElement('a');
  videoLink.href = POET.video;
  videoLink.setAttribute('data-lity', 'data-lity');
  document.querySelector('#video-js').appendChild(videoLink);
  const videoPrewie = document.createElement('img');
  videoPrewie.src = `./data/img-video/${POET.photo.slice(11)}`;
  document.querySelector('#video-js a').appendChild(videoPrewie);
}

function appendMap() {
  const POET = findPoet();
  document.querySelector('#map-js').insertAdjacentHTML('afterbegin', POET.maps);
}

export { appendVideo, appendMap };
