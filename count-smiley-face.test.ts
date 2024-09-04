import { countSmileys } from "./count-smiley-face";

describe("testing countSmileys", () => {
  test("testcase #1", () => {
    expect(countSmileys([":)", ";(", ";}", ":-D"])).toEqual(2);
  });

  test("testcase #2", () => {
    expect(countSmileys([";D", ":-(", ":-)", ";~)"])).toEqual(3);
  });

  test("testcase #3", () => {
    expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toEqual(1);
  });

  test("testcase #4", () => {
    expect(countSmileys([])).toEqual(0);
  });
});
