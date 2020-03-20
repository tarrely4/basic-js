module.exports = function repeater(str, options) {
  str += '';
  let repeatTimes = 0 || options.repeatTimes;
  let separator = ('separator' in options) ? options.separator : '+';
  let addition = '' + options.addition;
  let additionRepeatTimes = 0 || options.additionRepeatTimes;
  let additionSeparator = ('additionSeparator' in options) ? options.additionSeparator : '|';
  let result = '';
  while (additionRepeatTimes) {
    str += addition;
    str += additionRepeatTimes > 1 ? additionSeparator : '';
    additionRepeatTimes--
  }
  while (repeatTimes) {
    result += str;
    result += repeatTimes > 1 ? separator : '';
    repeatTimes--
  }
  return result || str + addition;
};
