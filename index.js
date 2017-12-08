module.exports = (array) => {
  const abc = (a, b) => a.localeCompare(b);
  const deep = (arrayItem) => {
    let object = arrayItem;

    if (typeof arrayItem === 'object' && arrayItem !== null) {
      const sorted = Object.keys(arrayItem).sort(abc);

      let obj = {};
      sorted.forEach((r, k) => {
        obj[r] = arrayItem[r];
        return obj;
      });

      object = obj;
    }

    return (object !== undefined && typeof object !== 'function') ? JSON.stringify(object) : null;
  };

  const set = new Set(array.map(deep));
  return [...set].map(item => JSON.parse(item));
};
