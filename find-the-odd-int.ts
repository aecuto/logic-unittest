export const findTheOddInt = (arrInt: number[]) => {
  const count: { number: number; count: number }[] = [];

  for (const int of arrInt) {
    const index = count.findIndex(({ number }) => number === int);

    if (index !== -1) {
      count[index] = {
        number: int,
        count: count[index].count + 1,
      };
    } else {
      count.push({ number: int, count: 1 });
    }
  }

  const odd = count.find(({ count }) => count % 2 !== 0);

  return odd?.number;
};

// findTheOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
