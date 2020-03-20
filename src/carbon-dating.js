const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

// 1 => 22392

module.exports = function dateSample(sampleActivity) {
  let num = parseFloat(sampleActivity);
  if((typeof(sampleActivity) != 'string') ||
    !isFinite(num) ||
    (num >= MODERN_ACTIVITY)||
    (num <= 0))
      return false;

  const t = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / num) / t);
};
