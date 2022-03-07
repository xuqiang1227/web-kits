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

* `base64ToBlob`

```js
import { base64ToBlob } from 'web-js-kits';
base64ToBlob(base64);
```

* h5Device

```js
import { getDevice } from 'web-js-kits';
getDevice() // ios or android or pc or mobile
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

* isWebSite

```ts
  import { isWebSite } from 'web-js-kits';

  isWebSite('www.github.com') // false
  isWebSite('www.github.com', true) // true
  isWebSite('https://www.github.com', true) //  true
  isWebSite('https://www.github.com') // true

```

* color

```js
import { rgbToHex, hexToRgb, rgbToHsl, hexToHsl } from 'web-js-kits';
 const rgb = hexToRgb('#FFFFFF');
 // RGB(255, 255, 255)
 const hex = rgbToHex(255, 255, 255);
 // #FFFFFF
```

* isNumber

```js
import { isNumber } from 'web-js-kits';
isNumber(123) //true
isNumber('123') //false
```

* formatNumber

```js
import { numberFormatCommon, numberFormat, numberParse } from 'web-js-kits';
numberFormatCommon(1234567.89) // 1,234,567.89
numberFormatCommon(1234567.89, 1) // 1,234,567.9

numberFormat(1234567.89, 'x.xxx.xxx,xxx') // 1.234.567,89
numberParse('1.234.567,89', 'x.xxx.xxx,xxx') // '1234567.89'
```

* requestThrottler

```js
import { requestThrottler } from 'web-js-kits';

// 第一个参数为 axios config
// 当第二个参数为true时，重新发的接口会缓存到内容，不会消耗网络资源
requestThrottler({url: '', method: 'get'}, true);

// requestThrottlerWithFormData 支持formData 数据格式
```

* requestBatch

```js
import { requestBatch } from 'web-js-kits';

// 第一个参数为 axios config
// 当第二个参数可选 默认为5时，同时并发5个请求
requestBatch({url: '', method: 'get'}, true);
```

* formLoadingHelper

```js
import { formLoadingHelper } from 'web-js-kits';
const { formLoadingCheck, setFormLoadingStatus } = formLoadingHelper;

setFormLoadingStatus({formId: 'formId', id: 'id', status: true}) // 开始执行 id 操作
setFormLoadingStatus({formId: 'formId', id: 'id', status: false}) // 结束执行 id 操作

await formLoadingCheck(formId) // 等待当前formId 的所有操作完成。

```