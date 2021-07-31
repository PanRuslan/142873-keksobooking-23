import {getRandomInteger, getRandomFloat, getRandomArray} from './util.js';

const houseType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkTime = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const ad = () => {
  const latitudes = getRandomFloat(35.65000, 35.70000, 5);
  const longitudes = getRandomFloat(139.70000, 139.80000, 5);
  const types = houseType[getRandomInteger(0, houseType.length)];
  let avatarNumber = getRandomInteger(1, 10);
  avatarNumber = avatarNumber < 10 ? `0${avatarNumber}` : avatarNumber;
  return {
    author: {avatar : `img/avatars/user${avatarNumber}.png`},
    location: {
      lat: latitudes,
      lng: longitudes,
    },
    offer: {
      title: 'Another ad',
      address: `${latitudes}, ${longitudes}`,
      price: getRandomInteger(1, 5000),
      type: types,
      rooms: getRandomInteger(1, 50),
      guests: getRandomInteger(1, 200),
      checkin: checkTime[getRandomInteger(0, checkTime.length)],
      checkout: checkTime[getRandomInteger(0, checkTime.length)],
      features: getRandomArray(features),
      description: `Yet another ${types} ad`,
      photos: getRandomArray(photos),
    },
  };
};

export {ad};
