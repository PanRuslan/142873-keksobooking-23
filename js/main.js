const getRandomInteger = (min, max) => {
  min = min >= 0 ? min : 0;
  max = max >= 0 ? max : 0;
  if (min === max) {
    return min;
  }
  return min < max ? Math.floor(Math.random() * (max - min) + min) : Math.floor(Math.random() * (min - max) + max);
};

const getRandomFloat = (min, max, numberOfSignes) => {
  min = min >= 0 ? min : 0;
  max = max >= 0 ? max : 0;
  if (min === max) {
    return min;
  }
  min *= numberOfSignes;
  max *= numberOfSignes;
  return min < max ? (Math.floor(Math.random() * (max - min) + min)) / numberOfSignes : (Math.floor(Math.random() * (min - max) + max)) / numberOfSignes;
};

getRandomInteger(1, 9);
getRandomFloat(1.5, 9.1, 15);
