//Statement 1
const findSmallestNumber = (arr) => Math.min(...arr);
console.log(findSmallestNumber([12, 6, 10, 2, 45, 100]));
//Statement 2
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
console.log(leastFrequentItem([3, 'c','c', 2, 3, 'c', 3, 'c', 2, 4, 9, 9]));
