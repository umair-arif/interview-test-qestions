function flattenDepth(arr, depth) {
  if (depth === 0) return arr;

  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      const flattened = flattenDepth(item, depth - 1);
      result.push(...flattened);
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenDepth([1, [2, [3, [4]]]], 3));

console.log(flattenDepth([1, [2, [3]]], 2));
