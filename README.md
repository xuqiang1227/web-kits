# web-kits
Some kits commonly used in work of frontend.

 [![npm package](https://img.shields.io/npm/v/web-kits.svg?style=flat-square)](https://www.npmjs.org/package/web-kits) 
 [![NPM downloads](http://img.shields.io/npm/dm/web-kits.svg?style=flat-square)](http://npmjs.com/web-kits)

## Using

* `getUrlParam` 

```js
  import { getUrlParam } from 'web-kits';

  const code = getUrlParam('code');
  // or

  const { code } = getUrlParam();
```

* `download`

```ts
  import { downloadFile } from 'web-kits';

  downloadFile(url, fileName);

```