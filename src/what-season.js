module.exports = function getSeason(date) {
  if(date == null)
    return 'Unable to determine the time of year!';
  if(Object.prototype.toString.call(date) !== '[object Date]')
    throw "Error: input parametr should be Date type!";

  let value = date.getMonth();

  switch(true){
    case (value > 1 && value <= 4):
      return 'spring';
    case (value > 4 && value <= 7):
      return 'summer';
    case (value > 7 && value <= 10):
      return 'autumn';
    default:
      return 'winter';
  }
};
