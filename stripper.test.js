import strip from './index';

test('strips a single key deeply', () => {
  const obj = {
    test: {
      keep: true,
      strip: true
    }
  };

  const expected = {
    test: {
      keep: true
    }
  };

  expect(strip(obj, 'strip')).toEqual(expected);
});

test('creates a new object without mutating original', () => {
  const originalShape = {
    test: {
      keep: true,
      strip: true
    }
  };

  const obj = {
    test: {
      keep: true,
      strip: true
    }
  };

  const newObj = strip(obj, 'strip');

  expect(obj).toEqual(originalShape);
  expect(obj).not.toBe(newObj);
});

test('strips fields from an object inside an inner array', () => {
  const obj = {
    arr: [
      {
        str: 'inner1',
        bad: 'stripme'
      },
      {
        str: 'inner2',
        good: 'stillhere'
      }
    ]
  };

  const expected = {
    arr: [
      {
        str: 'inner1'
      },
      {
        str: 'inner2',
        good: 'stillhere'
      }
    ]
  };

  const actual = strip(obj, 'bad');

  expect(actual).toEqual(expected);
});

test('handles array as input', () => {
  const input = [
    {
      good: true,
      bad: true
    },
    true,
    "test",
    123
  ]

  const expected = [
    {
      good: true
    },
    true,
    "test",
    123
  ]

  const actual = strip(input, 'bad')

  expect(actual).toEqual(expected)
})
