const input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a + b - c,
  D: {
    E: (a, b, c) => a + b + c,
  },
};

function compupte(a, b, c) {
  const getObjectValue = (obj) => {
    if (typeof obj !== 'object') {
      return obj;
    }
    return Object.keys(obj).reduce((accumulator, key) => {
      const currentValue =
        typeof obj[key] === 'function'
          ? obj[key](a, b, c)
          : getObjectValue(obj[key]);

      return {
        ...accumulator,
        [key]: currentValue,
      };
    }, {});
  };
  return getObjectValue(input);
}
console.log(compupte(1, 1, 1));
