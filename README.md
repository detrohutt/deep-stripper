# Deep Stripper

Simple package exports a single function allowing you to strip any number of unwanted keys from an objet, deeply.


## Install

```
yarn add deep-stripper
```

## Use

`deepStrip(obj: Object, ...keys: String) : Object`

You can call the function whatever you'd like when you import it. It's first parameter is the object you'd like to strip keys from. Every parameter after that is the name of a key you'd like stripped.

## Example

```javascript
import deepStrip from 'deep-stripper'

const productGroup = {
  productGroupId: '59115d3fd29c4b172789b2bf',
  name: 'Stripper Starter Kit',
  listingIds: [ '1234567890' ],
  productArray: [
    {
      productId: 'XXX-POLE-CHROME',
      quantity: 1,
      __typename: 'ProductGroupMember'
    },
    {
      productId: 'XXX-PASTIES-BLUE',
      quantity: 2,
      __typename: 'ProductGroupMember'
    }
  ],
  __typename: 'ProductGroup'
}

console.log(deepStrip(productGroup, '__typename', 'productGroupId'))
```

```javascript
// Output:

{
  name: 'Stripper Starter Kit',
  listingIds: [ '1234567890' ],
  productArray: [
    {
      productId: 'XXX-POLE-CHROME',
      quantity: 1
    },
    {
      productId: 'XXX-PASTIES-BLUE',
      quantity: 2
    }
  ]
}
```
