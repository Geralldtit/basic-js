module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  turnsSpeed = turnsSpeed / 3600;
  let result = new Object;
  result.turns = Math.pow(2, disksNumber);
  result.seconds = result.turns / turnsSpeed;
  return result;
}
