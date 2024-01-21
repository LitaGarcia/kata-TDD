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
});
