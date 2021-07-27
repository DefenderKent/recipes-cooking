export const toIncline = (number: number, titles: Array<string>) => {
  const cases = [2, 0, 1, 1, 1, 2];
  if (!isNaN(number) && number > 0) {
    const wordNumber =
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5];
    if (wordNumber >= 0 && wordNumber <= 2) {
      return titles[wordNumber];
    } else {
      return titles[2];
    }
  } else {
    return titles[2];
  }
};
