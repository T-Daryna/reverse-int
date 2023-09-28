module.exports = function reverse (n) {
  let numToString = n.toString();
  let reverseString = '';

  for(let i = numToString.length; i > 0; i--) {
    reverseString += numToString[i - 1];
  }
  return parseInt(reverseString);
}
