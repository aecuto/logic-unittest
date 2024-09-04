export const permutator = (inputStr: string) => {
  let result: string[] = [];

  const permute = (arr: any, m = []) => {
    if (arr.length === 0) {
      const exist = result.find((value) => value === m.join(""));
      if (!exist) {
        result.push(m.join(""));
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputStr.split(""));

  return result;
};
