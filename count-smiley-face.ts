export const countSmileys = (faces: string[]) => {
  const regexp = new RegExp("[:|;](-|~)?[)|D]");

  let count = 0;
  for (const face of faces) {
    if (regexp.test(face)) {
      count += 1;
    }
  }

  return count;
};

// const count = countSmileys([";D", ":-(", ":-)", ";~)"]);
// console.log(count);
