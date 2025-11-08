function createCounter(start = 0) {
  let count = start;
  return {
    increament() {
      count++;
      return count;
    },
    decreament() {
      count--;
      return count;
    },
    value() {
      return count;
    },
  };
}

const c = createCounter(5);
c.increament();
c.increament();
c.decreament();
console.log(c.value());
