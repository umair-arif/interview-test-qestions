function limitConcurrency(tasks, limit) {
  return new Promise((resolve, reject) => {
    const results = [];
    let running = 0;
    let index = 0;

    function runNext() {
      if (index === tasks.length && running === 0) {
        resolve(results);
        return;
      }
      if (running >= limit || index >= tasks.length) {
        return;
      }
      const currentIndex = index;
      const task = tasks[currentIndex];
      index++;
      running++;

      task()
        .then((res) => {
          results[currentIndex] = res;
        })
        .catch(reject)
        .finally(() => {
          running--;
          runNext();
        });
      runNext();
    }
    runNext();
  });
}

const tasks = [
  () =>
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
      res.json()
    ),
  () =>
    fetch("https://jsonplaceholder.typicode.com/todos/2").then((res) =>
      res.json()
    ),
  () =>
    fetch("https://jsonplaceholder.typicode.com/todos/3").then((res) =>
      res.json()
    ),
];

limitConcurrency(tasks, 2).then((results) => {
  console.log(results);
});
