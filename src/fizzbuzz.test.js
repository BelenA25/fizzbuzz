import fizzbuzz from "./fizzbuzz.js";

describe("Fizz buzz un numero", () => {
  it("deberia retornar 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
});
