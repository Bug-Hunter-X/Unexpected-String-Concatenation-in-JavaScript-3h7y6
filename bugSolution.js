function foo(a, b) {
  // Explicit type checking and conversion:
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle cases where conversion fails
  }
  return a + b;
}

console.log(foo(1, '1')); // Output: 2 (numeric addition)
console.log(foo('a', 1)); // Output: NaN (handles non-numeric input) 