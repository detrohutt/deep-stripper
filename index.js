const strip = (input, ...keys) =>
  typeof input !== 'object'
    ? input
    : JSON.parse(
        JSON.stringify(Object.assign({}, input), (k, v) => (keys.indexOf(k) !== -1 ? undefined : v))
      );

export default (input, ...keys) =>
  Array.isArray(input) ? input.map(v => strip(v, ...keys)) : strip(input, ...keys);
