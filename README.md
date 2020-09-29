# web-js-kits
Some kits commonly used in work of frontend.

 [![npm package](https://img.shields.io/npm/v/web-js-kits.svg?style=flat-square)](https://www.npmjs.org/package/web-js-kits) 
 [![NPM downloads](http://img.shields.io/npm/dm/web-js-kits.svg?style=flat-square)](http://npmjs.com/web-js-kits)

## Using

* `getUrlParam` 

```js
  import { getUrlParam } from 'web-js-kits';

  const code = getUrlParam('code');
  // or

  const { code } = getUrlParam();
```

* `download`

```ts
  import { downloadFile } from 'web-js-kits';

  downloadFile(url, fileName);

```