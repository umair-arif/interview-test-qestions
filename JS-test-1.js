function unique(arr = []) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const list = [1, 2, 2, 3, 1, 4];
console.log(unique(list));
