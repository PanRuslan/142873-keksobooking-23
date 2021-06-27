const getRandomInteger = (number1, number2) => {
  if (number1 === number2) {
    return number1;
  }
  const [min, max] = number1 <= number2 ? [number1, number2] : [number2, number1];
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomFloat = (number1, number2, numberOfSignes) => {
  if (number1 === number2) {
    return number1.toFixed(numberOfSignes);
  }
  const [min, max] = number1 <= number2 ? [number1, number2] : [number2, number1];
  return (Math.random() * (max - min) + min).toFixed(numberOfSignes);
};

const getRandomArray = (array) => {
  const featuresCount = getRandomInteger(0, array.length);
  const newArray = [];
  // eslint-disable-next-line id-length
  for(let i = 0; i < featuresCount; i++) {
    if(getRandomInteger(0, 1) === 1) {
      newArray.add(array[i]);
    }
  }
  return newArray;
};

const houseType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkTime = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const SIMILAR_AD_COUNT = 10;

const ad = () => ({
  author: {avatar : `img/avatars/user ${getRandomInteger(1, 10)}.png`},
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  },
  offer: {
    title: 'Another ad',
    address: `${this.location.lat}, ${this.location.lng}`,
    price: getRandomInteger(1, 5000),
    type: houseType[getRandomInteger(0, houseType.length)],
    rooms: getRandomInteger(1, 50),
    guests: getRandomInteger(1, 200),
    checkin: checkTime[getRandomInteger(0, checkTime.length)],
    checkout: checkTime[getRandomInteger(0, checkTime.length)],
    features: getRandomArray(features),
    description: `Yet another ${this.type} ad`,
    photos: getRandomArray(photos),
  },
});

const ads = new Array(SIMILAR_AD_COUNT).fill(null).map(() => ad());
// eslint-disable-next-line no-console
console.log(ads);
