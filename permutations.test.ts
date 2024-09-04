import { permutator } from "./permutations";

describe("testing permutations", () => {
  test("input 'a'", () => {
    expect(permutator("a")).toEqual(["a"]);
  });

  test("input 'ab'", () => {
    expect(permutator("ab")).toEqual(["ab", "ba"]);
  });

  test("input 'abc'", () => {
    expect(permutator("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });

  test("input 'aabb'", () => {
    expect(permutator("aabb")).toEqual([
      "aabb",
      "abab",
      "abba",
      "baab",
      "baba",
      "bbaa",
    ]);
  });
});
