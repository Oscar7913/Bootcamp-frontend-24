// //Statement 1
const findSmallestNumber = (arr) => Math.min(...arr);
console.log(findSmallestNumber([12, 6, 10, 2, 45, 100]));
// //Statement 2
const leastFrequentItem = (arr) =>
  [
    ...arr.reduce(
      (mapContainer, key) =>
        mapContainer.set(key, (mapContainer.get(key) || 0) + 1),
      new Map()
    ),
  ].reduce((prev, curr) => {
    return curr[1] < prev[1] ? curr : prev;
  })[0];
console.log(leastFrequentItem([3, 'c', 'c', 2, 3, 'c', 3, 'c', 2, 4, 9, 9]));
//Statement 3
const removeDuplicates = (arr) => {
  return arr.filter(
    (curr, index) =>
      arr.indexOf(curr) === index && arr.lastIndexOf(curr) === index
  );
};
console.log(removeDuplicates([7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd']));
//Statement 4
const concatArrays = (arr) =>
  arr.reduce((newArr, curr) => {
    newArr.push(curr.join(' '));
    return newArr;
  }, []);
console.log(
  concatArrays([
    ['the', 'little', 'horse'],
    ['Plane', 'over', 'the', 'ocean'],
    ['Chocolate', 'ice', 'cream', 'is', 'awesome'],
    ['this', 'is', 'a', 'long', 'sentence'],
  ])
);
// Statement 5
const findNotRepeated = (arr) => {
  return arr
    .filter(
      (curr, index) =>
        arr.indexOf(curr) === index && arr.lastIndexOf(curr) === index
    )
    .toString();
};
console.log(findNotRepeated([1, 2, 4, 7, 4, 2, 1]));