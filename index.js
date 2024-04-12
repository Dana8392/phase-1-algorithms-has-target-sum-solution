function hasTargetSum(array, target) {
  const seenNumbers = {}; 

  for (const number of array) {
    const complement = target - number;    

    if (seenNumbers[complement]) {
      return true;
    }
    
    seenNumbers[number] = true;
  }

  return false;  
}

/* 
  Big O time complexity: O(n)
  - We iterate through the array once, each lookup and insertion in the hash table (object) is O(1).
  - Thus, the overall time complexity is O(n).
*/

/* 
  Add your pseudocode here
  - Create an object to store numbers as keys.
  - For each number in the array:
  - Calculate its complement (target - current number).
  - Check if the complement exists in the object:
  - If it does, return true.
  - Store the current number in the object.
  - Return false if no pairs found after the loop.
*/

/*
  Add written explanation of your solution here
  - This function checks if any two numbers in the array sum up to a given target.
  - It uses a hash table to store each number after computing its complement.
  - By checking against the hash table, we efficiently determine if the complement of a current number exists,
    indicating that a previous number in the array can add with the current number to reach the target.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
