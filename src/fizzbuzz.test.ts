import { describe } from "@jest/globals";
import { fizzbuzz } from "./fizzbuzz.ts";

describe("fizzbuzz", () => {
  it("should return a 0 inside a string list when input is 0", () => {
    //given
    const inputNumber = 0;

    //when
    const result = fizzbuzz(inputNumber);

    //then
    expect(result).toEqual(["0"]);
  });
  it("should return a 1 inside a string list when input is 1", () => {
    //given
    const inputNumber = 1;

    //when
    const result = fizzbuzz(inputNumber);

    //then
    expect(result).toEqual(["0", "1"]);
  });
  it("should return fizz when is multiple of 3", () => {
    const inputNumber = 3;

    //when
    const result = fizzbuzz(inputNumber);

    //then
    expect(result).toEqual(["0", "1", "2", "fizz"]);
  });
  it("should return buzz when is multiple of 5", () => {
    const inputNumber = 5;

    //when
    const result = fizzbuzz(inputNumber);

    //then
    expect(result).toEqual(["0", "1", "2", "fizz", "4", "buzz"]);
  });
});
