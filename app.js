// Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // return the two indicies where their elements add up to the target.
  // cant use the same element twice 
  // there is exactly one solution 
  
  // target is the current element - other number required to satisfy the target 
  
  // for (let i = 0; i < nums.length; i++){
  //     for (let j= 0; j < i; j++){
  //         if (nums[i] + nums[j] == target){
  //             let newArray=[];
  //             newArray.push(j);
  //             newArray.push(i);
  //             return newArray;
  //         }
  //     }
  // }
  
  let checkedOverObject = {};
  nums.forEach( (element,index) =>checkedOverObject[element] = index ) // take the array, for each           //element in the array, turn the number into the key and the index into the value 
  
  
  for (let i = 0; i < nums.length; i++){
      let differenceValueNeeded = target - nums[i];
      if (checkedOverObject[differenceValueNeeded] && checkedOverObject[differenceValueNeeded] !== i ){
          return [i,checkedOverObject[differenceValueNeeded] ] 
      }
  }
  
  
};