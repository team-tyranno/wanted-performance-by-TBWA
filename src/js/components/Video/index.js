/* eslint-disable max-lines-per-function */
export default function Video() {
  this.template = () => {
    return `
    <div class="video-ratio">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FiZI8xd3qoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`;
  };

  this.render = () => {
    const $video = document.querySelector('.video');

    $video.insertAdjacentHTML('afterbegin', this.template());
  };
}
