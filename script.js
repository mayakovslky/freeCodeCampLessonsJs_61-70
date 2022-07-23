// 61. Comparison with the Strict Equality Operator

// function testStrict(val) {
//   if (val === 7) { 
//     return "Equal";
//   }
//   return "Not Equal";
// }

// testStrict(10);

// 62. Practice comparing different values

// function compareEquality(a, b) {
//   if (a === b) { 
//     return "Equal";
//   }
//   return "Not Equal";
// }

// compareEquality(10, "10");

// 63. Comparison with the Inequality Operator

// function testNotEqual(val) {
//   if (val != 99) { 
//     return "Not Equal";
//   }
//   return "Equal";
// }

// testNotEqual(10);

// 64. Comparison with the Strict Inequality Operator

// function testStrictNotEqual(val) {
//   if (val !== 17) { 
//     return "Not Equal";
//   }
//   return "Equal";
// }

// testStrictNotEqual(10);

// 65. Comparison with the Greater Than Operator

// function testGreaterThan(val) {
//   if (val > 100) {  
//     return "Over 100";
//   }

//   if (val > 10) {  
//     return "Over 10";
//   }

//   return "10 or Under";
// }

// testGreaterThan(10);

// 66. Comparison with the Greater Than Or Equal To Operator

// function testGreaterOrEqual(val) {
//   if (val >= 20) { 
//     return "20 or Over";
//   }

//   if (val >= 10) {  
//     return "10 or Over";
//   }

//   return "Less than 10";
// }

// testGreaterOrEqual(10);

// 67. Comparison with the Less Than Operator

// function testLessThan(val) {
//   if (val < 25) {  
//     return "Under 25";
//   }

//   if (val < 55) {  
//     return "Under 55";
//   }

//   return "55 or Over";
// }

// testLessThan(10);

// 68. Comparison with the Less Than Or Equal To Operator

// function testLessOrEqual(val) {
//   if (val <= 12) {  
//     return "Smaller Than or Equal to 12";
//   }

//   if (val <= 24) {  
//     return "Smaller Than or Equal to 24";
//   }

//   return "More Than 24";
// }

// testLessOrEqual(10);

// 69. Comparisons with the Logical And Operator

// function testLogicalAnd(val) {

//   if (val >= 25 && val <= 50) {
//       return "Yes";
//   }
//   return "No";
// }

// testLogicalAnd(10);

// 70. Comparisons with the Logical Or Operator

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);