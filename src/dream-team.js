module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = '';
  members.forEach((el) => {(typeof el == 'string') ? result += el.trim().toUpperCase()[0] : result += ''});
  return  String(result.split('').sort().join(''));
};
