function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function reverseOrder() {
  const result = [];

  for (let i = 100; i >= 1; i--) {
    if (isPrime(i)) continue;

    if (i % 15 === 0) result.push("FooBar");
    else if (i % 3 === 0) result.push("Foo");
    else if (i % 5 === 0) result.push("Bar");
    else result.push(i);
  }

  console.log(result.join(", "));
}

reverseOrder();
