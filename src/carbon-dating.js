const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNumber = parseFloat(sampleActivity);
  if (sampleActivityNumber <= 0 || sampleActivityNumber >= MODERN_ACTIVITY || typeof sampleActivity != 'string' || !isFinite(sampleActivityNumber)) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = (Math.log(MODERN_ACTIVITY / sampleActivityNumber)) / k;
  return Math.ceil(t);
};
