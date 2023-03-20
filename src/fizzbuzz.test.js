import fizzbuzz from "./fizzbuzz.js";
import fizzbuzz_cadena from "./fizzbuzz_cadena.js";

describe("Fizz buzz un numero", () => {
  it("deberia retornar 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
  it("deberia retornar el numero 2", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });
  it("deberia retornar la cadena correspondiente al numero 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it("deberia retornar la cadena correspondiente al numero 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  it("deberia retornar el numero 8", () => {
    expect(fizzbuzz(8)).toEqual(8);
  });
  it("deberia retornar la cadena correspondiente al multiplo del numero 3", () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });
  it("deberia retornar la cadena correspondiente al multiplo del numero 5", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
  it("deberia retornar la cadena correspondiente al multiplo del numero 5 y 3", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
});
describe("Fizz buzz una cadena", () => {
  it("deberia retornar la cadena 1", () => {
    expect(fizzbuzz_cadena(1)).toEqual("1");
  });
  it("deberia retornar la cadena 1,2", () => {
    expect(fizzbuzz_cadena(2)).toEqual("1,2");
  });
  it("deberia retornar la cadena 1,2,Fizz", () => {
    expect(fizzbuzz_cadena(3)).toEqual("1,2,Fizz");
  });
  it("deberia retornar la cadena 1,2,Fizz,4,Buzz", () => {
    expect(fizzbuzz_cadena(5)).toEqual("1,2,Fizz,4,Buzz");
  });
  it("deberia retornar la cadena correspondieinte al numero 10", () => {
    expect(fizzbuzz_cadena(10)).toEqual("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz");
  });
}); 