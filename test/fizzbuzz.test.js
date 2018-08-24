const isFizzBuzz = require("../katas/fizzbuzz.js");

describe("Pruebas Fizzbuzz es divisible", () => {
  test("Si el numero es divisible por 3 retorno Fizz", function() {
    expect(isFizzBuzz(3)).toBe("Fizz");
  });

  test("Si el numero es divisible por 5 retorno Buzz", function() {
    expect(isFizzBuzz(5)).toBe("Buzz");
  });

  test("Si el numero es divisible por  3 y 5 retorno FizzBuzz", function() {
    expect(isFizzBuzz(15)).toBe("FizzBuzz");
  });

  test("Si el numero es divisible por 11 return 11", function() {
    expect(isFizzBuzz(11)).toBe(11);
  });
});
