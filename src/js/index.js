import GNB from './components/GNB/index.js';
import Video from './components/Video/index.js';
import { Carousel } from './components/index.js';
import { $ } from './utils/index.js';


const gnb = new GNB();
const video = new Video();

gnb.render();
video.render();

new Carousel($('#carousel'));
