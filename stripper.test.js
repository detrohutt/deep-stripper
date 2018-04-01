import strip from './index'

test('strips a single key deeply', () => {
  const obj = {
    test: {
      keep: true,
      strip: true
    }
  }

  const expected = {
    test: {
      keep: true
    }
  }

  expect(strip(obj, 'strip')).toEqual(expected)
})

test('creates a new object without mutating original', () => {
  const originalShape = {
    test: {
      keep: true,
      strip: true
    }
  }

  const obj = {
    test: {
      keep: true,
      strip: true
    }
  }

  const newObj = strip(obj, 'strip')

  expect(obj).toEqual(originalShape)
  expect(obj).not.toBe(newObj)
})
