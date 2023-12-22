function fibs(n) {
  let fib1 = 0;
  let fib2 = 1;
  const arr = [fib1, fib2];
  for (let i = 2; i < n; i++) {
    let fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    arr.push(fib3);
  }
  console.log(arr);
}
fibs('iterative = ', 8);

function fibsRecArr2(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  else {
    let fib = fibsRecArr2(n - 1);
    fib.push(fib[n - 2] + fib[n - 3]);
    console.log(fib);
    return fib;
  }
}
console.log('recursive =', fibsRecArr2(8));
