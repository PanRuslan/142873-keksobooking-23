import {ad} from './data.js';

const SIMILAR_AD_COUNT = 10;

const ads = new Array(SIMILAR_AD_COUNT).fill(null).map(() => ad());
// eslint-disable-next-line no-console
console.log(ads);
