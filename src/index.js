module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  for(let i in bracketsConfig) {
    brackets[bracketsConfig[i][1]] = bracketsConfig[i].join('');
  }

  let dublicate = str;
  for(let i = 0; i < str.length; i++) {
    if(brackets[str[i]] !== undefined) {
      dublicate = dublicate.replace(brackets[str[i]], '');
    }
  }

  return dublicate.length !== 0 ? false : true;
}
