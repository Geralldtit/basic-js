module.exports = function repeater(str, options) {
    let addition = formRepeatString(options.addition, options.additionSeparator, options.additionRepeatTimes);
    return formRepeatString(str + addition, options.separator ? options.separator : '+', options.repeatTimes);
};

function formRepeatString(str = '', separator = '|', repeatTimes = 1){
  return (str + separator).repeat(repeatTimes - 1) + str;
}
