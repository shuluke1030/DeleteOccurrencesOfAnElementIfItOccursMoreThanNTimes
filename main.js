function deleteNth(arr,n){

  const frequencyMap = new Map();
  const result = [];

  for (let num of arr) {
    if (frequencyMap.has(num)) {
      if (frequencyMap.get(num) < n) {
        frequencyMap.set(num, frequencyMap.get(num) + 1);
        result.push(num);
      }
    } else {
      frequencyMap.set(num, 1);
      result.push(num);
    }
  }

  return result;
}
console.log(deleteNth([20,37,20,21], 1))