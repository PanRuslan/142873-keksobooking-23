const getRandomInteger = (number1, number2) => {
  //number1 = number1 >= 0 ? number1 : 0;
  //number2 = number2 >= 0 ? number2 : 0;
  if (number1 === number2) {
    return number1;
  }
  const min = number1 < number2 ? number1 : number2;
  const max = number1 > number2 ? number1 : number2;
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomFloat = (number1, number2, numberOfSignes) => {
  number1 = number1 >= 0 ? number1 : 0;
  number2 = number2 >= 0 ? number2 : 0;
  if (number1 === number2) {
    return number1.toFixed(numberOfSignes);
  }
  const min = number1 < number2 ? number1 : number2;
  const max = number1 > number2 ? number1 : number2;
  return (Math.random() * (max - min) + min).toFixed(numberOfSignes);
};

getRandomInteger(1, 9);
getRandomFloat(1.5, 9.1, 15);
