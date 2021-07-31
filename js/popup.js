import {ad} from './data.js';

const mapElement = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardElement = cardTemplate.cloneNode(true);
const photoElement = cardElement.querySelector('.popup__photo').cloneNode(true);
cardElement.querySelector('.popup__photos').removeChild(cardElement.querySelector('.popup__photo'));
const newAd = ad();
const houseType = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

cardElement.querySelector('.popup__title').textContent = newAd.offer.title;
cardElement.querySelector('.popup__text--address').textContent = newAd.offer.address;
cardElement.querySelector('.popup__text--price').textContent = `${newAd.offer.price  } ₽/ночь`;
cardElement.querySelector('.popup__type').textContent = houseType[newAd.offer.type];
cardElement.querySelector('.popup__text--capacity').textContent = `${newAd.offer.rooms} комнаты для ${newAd.offer.guests} гостей`;
cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${newAd.offer.checkin}, выезд до ${newAd.offer.checkout}`;
cardElement.querySelector('.popup__features').textContent = newAd.offer.features.join(', ');

newAd.offer.photos.forEach((photo) => {
  photoElement.src = photo;
  cardElement.querySelector('.popup__photos').appendChild(photoElement.cloneNode(true));
});
cardElement.querySelector('.popup__avatar').src = newAd.author.avatar;
cardElement.querySelector('.popup__description').textContent = newAd.offer.description;

mapElement.appendChild(cardElement);
