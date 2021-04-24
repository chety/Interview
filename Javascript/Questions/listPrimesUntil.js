//First Version
function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function listPrimesUntil(num) {
  const primes = [];
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
console.log(listPrimesUntil(20));

//---------------------------------------------

//second version
function listPrimesUntil2(num) {
  const arr = Array(num).fill(true);
  for (let i = 2; i * i <= num; i++) {
    if (arr[i]) {
      for (let j = i * i; j < num; j += i) {
        arr[j] = false;
      }
    }
  }
  const primes = [];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i]) {
      primes.push(i);
    }
  }
  return primes;
}
console.log(listPrimesUntil2(20));
