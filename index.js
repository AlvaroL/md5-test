const md5 = require('md5');
const { text, numbers } = require('./text');

// Choose between text or numbers by commenting one of these lines
const elements = text.split(' ');
// const elements = numbers;
// number of hexadecimal chars to be picked from the number
const NUM_OF_CHARS = 12;

console.log('number of elements', elements.length);
console.log('md5 of one element', md5(elements[23]));

const TOTAL_NUM_OF_CHARS = 32;
const START_SUBSTRING = TOTAL_NUM_OF_CHARS - NUM_OF_CHARS;
const allIntegers = elements.map(word => parseInt(md5(word).substring(START_SUBSTRING, TOTAL_NUM_OF_CHARS), 16));
const max = 16 ** NUM_OF_CHARS;
const twentyfive = 25 * max / 100;
const fifty = twentyfive * 2;
const seventyfive = twentyfive * 3;
const a = [];
const b = [];
const c = [];
const d = [];

for (let index = 0; index < allIntegers.length; index++) {
  const hashedValue = allIntegers[index];
  if (hashedValue < twentyfive) {
    a.push(hashedValue);
  } else if(hashedValue < fifty) {
    b.push(hashedValue);
  } else if (hashedValue < seventyfive) {
    c.push(hashedValue);
  } else {
    d.push(hashedValue);
  }
}
console.log(`distribution (25% for each) using an hexadecimal of ${NUM_OF_CHARS} chars`);
console.log(
  'a: ', a.length,
  'b:', b.length,
  'c:', c.length,
  'd:', d.length
);


// functional approach:

// console.log(md5(2));
// console.log(md5(2).substring(START_SUBSTRING, TOTAL_NUM_OF_CHARS));

// // for example: { a: 10, b: 20, c: 40, d: 30}
// function calculateProbabilities(probabilityData = {}, inputData = []) {
//   // para calcular esto bien hay que sumar los anteriores:
//   // realValues[0] =  percentageTotalValues[0]; 
//   // realValues[1] =  percentageTotalValues[0] +  percentageTotalValues[1]; ...
//   const percentageTotalValues = Object.values(probabilityData).map(percentage => percentage * max / 100);
//   const allKeys = Object.keys(probabilityData);
//   const allUsersWithProject = inputData.map(num => {
//     const percentageIndex = percentageTotalValues.reduce((previous, current, index) => {
//       return previous === -1 && num < current ? index : current;
//     }, -1);
//     const projectName = allKeys[percentageIndex];
//     return { user: num, projectName } //TODO store the relation between user and md5 and truncated
//   });
//   return allUsersWithProject;
// }

// const usersAndProject = calculateProbabilities({a:25, b:25, c:25, d:25}, allIntegers);
// const pa = [];
// const pb = [];
// const pc = [];
// const pd = [];
// usersAndProject.forEach(({ projectName }) => {
//   const ar = projectName === 'a' ? pa : (projectName === 'b' ? pb : (projectName === 'c' ? pc : pd));
//   ar.push(projectName);
// });
// console.log(pa.length, pb.length, pc.length, pd.length);
