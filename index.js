module.exports = (array) => {
  const deep = (arrayItem) => {
    let object = arrayItem;

    if (typeof arrayItem === 'object' && arrayItem !== null) {
      object = Object.keys(arrayItem).sort().reduce((r, k) => (r[k] = arrayItem[k]), {});
    }

    return (object !== undefined && typeof object !== 'function') ? JSON.stringify(object) : null;
  };

  const set = new Set(array.map(deep));
  return [...set].map(item => JSON.parse(item));
};
