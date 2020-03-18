module.exports = function countCats(matrix) {
  let number = 0;
  matrix.forEach((line) => {
    line.forEach((el) => {
      number += (el == '^^') ? 1 : 0;
    })
  })
  return number;
};
