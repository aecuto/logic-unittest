import { findTheOddInt } from "./find-the-odd-int";

describe("testing findTheOddInt", () => {
  test("testcase #1", () => {
    expect(findTheOddInt([7])).toEqual(7);
  });

  test("testcase #2", () => {
    expect(findTheOddInt([0])).toEqual(0);
  });

  test("testcase #3", () => {
    expect(findTheOddInt([1, 1, 2])).toEqual(2);
  });

  test("testcase #4", () => {
    expect(findTheOddInt([0, 1, 0, 1, 0])).toEqual(0);
  });

  test("testcase #5", () => {
    expect(findTheOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toEqual(4);
  });
});
