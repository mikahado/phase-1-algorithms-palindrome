function isPalindrome(word) {
  // Write your algorithm here
  return word === [...word].reverse().join("");
}

/* 
  1. function takes in a word
  2. split word into an array of letters, reverse, join.
  3. set condition. if reverse
  3. 
*/

/*
  Add written explanation of your solution here
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
