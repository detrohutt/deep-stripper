export default (obj, ...keys) =>
  JSON.parse(
    JSON.stringify(
      Object.assign({}, obj),
      (k, v) => (keys.indexOf(k) !== -1 ? undefined : v)
    )
  )
