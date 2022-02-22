import GNB from './components/GNB/index.js';
import Video from './components/Video/index.js';
import Carousel from './components/Carousel/index.js';
import { $ } from './utils/index.js';

new GNB();
new Video();
new Carousel($('#carousel'));
