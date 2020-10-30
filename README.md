# web-js-kits
Some kits commonly used in work of frontend.

 [![npm package](https://img.shields.io/npm/v/web-js-kits.svg?style=flat-square)](https://www.npmjs.org/package/web-js-kits) 
 [![NPM downloads](http://img.shields.io/npm/dm/web-js-kits.svg?style=flat-square)](http://npmjs.com/web-js-kits)

## Using

* install

```
   yarn install web-js-kits
   //or 
   npm i web-js-kits
```

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

* `getMaxZIndex`

```ts
  import { getMaxZIndex } from 'web-js-kits';

  getMaxZIndex('.myClass', 100);

```

* isEmail

```ts
  import { isEmail } from 'web-js-kits';

  isEmail('abc@ab.com'); // true

```

* isEmail

```ts
  import { isWebSite } from 'web-js-kits';

  isWebSite('www.github.com') // false
  isWebSite('www.github.com', true) // true
  isWebSite('https://www.github.com', true) //  true
  isWebSite('https://www.github.com') // true

```

* color

```js
import { rgbToHex, hexToRgb, rgbToHsl, hexToHsl } from '../src/color';
 const rgb = hexToRgb('#FFFFFF');
 // RGB(255, 255, 255)
 const hex = rgbToHex(255, 255, 255);
 // #FFFFFF
```