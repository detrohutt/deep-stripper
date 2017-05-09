"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return JSON.parse(JSON.stringify(Object.assign({}, obj), function (k, v) {
    return keys.indexOf(k) !== -1 ? undefined : v;
  }));
};
