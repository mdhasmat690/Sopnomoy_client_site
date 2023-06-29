const findLargeFourNumber = (numbers, mulNumber) => {
  numbers.sort((a, b) => a - b);
  let sum1 = 1;

  for (let i = 0; i <= mulNumber / 2 - 1; i++) {
    sum1 *= numbers[i];
  }
  let sum = 1;
  for (let i = numbers.length - mulNumber / 2; i < numbers.length; i++) {
    sum *= numbers[i];
  }
  return sum - sum1;
};

const numbers = [10, 9, 2, 100, 4, 3];
console.log(findLargeFourNumber(numbers, 6));
