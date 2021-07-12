const getRandomInteger = (number1, number2) => {
  if (number1 === number2) {
    return number1;
  }
  const [min, max] = number1 <= number2 ? [number1, number2] : [number2, number1];
  let result = Math.random() * (max - min) + min;
  result = Math.round(result);
  return result;
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
      newArray.push(array[i]);
    }
  }
  return newArray;
};

export {getRandomInteger, getRandomFloat, getRandomArray};
