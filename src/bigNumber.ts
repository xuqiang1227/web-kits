const isNegative = (a: string, b: string) => {
  return a.startsWith('-') && !b.startsWith('-')
    || !a.startsWith('-') && b.startsWith('-');
}


const longAdd = (a: string, b: string, carry: number = 0): [string, number] => {
  let _tempA = a.split('');
  let _tempB = b.split('');
  if (_tempA.length < _tempB.length) {
    const _ = _tempA;
    _tempA = _tempB;
    _tempB = _;
  }
  const sum = _tempA.reduceRight((sum: number[], a: string) => {
    const _b = _tempB.pop() || 0;
    const _sum = Number(a) + Number(_b) + carry;
    sum.unshift(_sum % 10);
    carry = (_sum / 10) >> 0;
    return sum;
  }, []).join('');

  return [sum, carry];
}

export const add = (a: string, b: string) => {
  const sub = isNegative(a, b);
  if (sub) {
    //TODO 减法
  }

  const isSubAdd = a.startsWith('-') && b.startsWith('-');
  if (isSubAdd) {
    a = a.replace('-', '');
    b = b.replace('-', '');
  }

  const isFloat = a.includes('.') || b.includes('.');
  const [a1 = "0", a2 = "0"] = a.split('.');
  const [b1 = "0", b2 = "0"] = b.split('.');
  const [float, carry] = isFloat ? longAdd(a2, b2, 0) : ["", 0];
  let [num, _carry] = longAdd(a1, b1, carry);
  if (!isFloat && _carry > 0) {
    num = `${_carry}${num}`;
  }
  return `${isSubAdd ? '-' : ''}${num}${isFloat ? `.${float}` : ''}`
}

const longPlus = (_a: string, _b: string): string => {
  const a = _a.split('');
  const b = _b.split('');
  let sum = []; // ['111', '1110', '11100']
  sum = b.reduceRight((pro: string[], _b: string, index: number) => {
    let carry = 0;
    let _temp = a.reduceRight((_p: number[], _a: string) => {
      const _pro = Number(_b) * Number(_a) + carry;
      carry = (_pro / 10) >> 0;
      _p.unshift(_pro % 10);
      return _p;
    }, []);
    const _pad = b.length - index - 1;
    if (carry > 0) {
      _temp.unshift(carry);
    }
    pro.push(_temp.join('').padEnd(_temp.length + _pad, '0'));
    return pro;
  }, []);

  return sum.reduce((res, i) => {
    const [sum, _c] = longAdd(res, String(i), 0);
    return `${_c > 0 ? _c : ''}${sum}`;
  }, '0');
}

export const plus = (a: string, b: string) => {
  const _negative = isNegative(a, b);
  const float = (a.split('.')[1] || '').length + (b.split('.')[1] || '').length;
  a = a.replace(/\.|-/g, '');
  b = b.replace(/\.|-/g, '');
  const _plus = longPlus(a, b);
  return `${_negative ? '-' : ''}${float > 0 ? _plus.replace(new RegExp(`\\B(?!\\d{${float + 1}})`), '.') : _plus}`
}

