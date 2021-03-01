const isNegative = (a: string, b: string) => {
  return a.startsWith('-') && !b.startsWith('-')
    || !a.startsWith('-') && b.startsWith('-');
}

const getOperation = (a: string, b: string) => {
  if (a.startsWith('-') && b.startsWith('-')) {
    return '--';
  }
  if (a.startsWith('-') && !b.startsWith('-')) {
    return '-+';
  }
  if (!a.startsWith('-') && !b.startsWith('-')) {
    return '++';
  }
  if (!a.startsWith('-') && b.startsWith('-')) {
    return '+-';
  }
}

// 加
const longPlus = (a: string, b: string, carry: number = 0): [string, number] => {
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

const floatPlus = (a: string, b: string) => {
  const isFloat = a.includes('.') || b.includes('.');
  const [a1 = "0", a2 = "0"] = a.split('.');
  const [b1 = "0", b2 = "0"] = b.split('.');
  const [float, carry] = isFloat ? longPlus(a2, b2, 0) : ["", 0];
  let [num, _carry] = longPlus(a1, b1, carry);
  if (_carry > 0) {
    num = `${_carry}${num}`;
  }
  return `${num}${isFloat ? `.${float}` : ''}`;
}

const floatMinus = (a: string, b: string) => {
  const isFloat = a.includes('.') || b.includes('.');
  let [a1 = "0", a2 = "0"] = a.split('.');
  const [b1 = "0", b2 = "0"] = b.split('.');
  const [float, borrow] = isFloat ? longMinus(a2, b2) : ["", false];
  if (borrow) {
    let arrayA1 = a1.split('');
    let index = arrayA1.length - 1;
    let _a = Number(arrayA1[index]) - 1;
    arrayA1[index] = String(_a);
    while (_a < 0) {
      arrayA1[index--] = "0";
      _a = Number(a1[index]) - 1;
    }
    a1 = arrayA1.join('');
  }
  let res = longMinus(a1, b1);
  return `${res[0]}${isFloat ? `.${float}` : ''}`
}

export const plus = (a: string, b: string) => {
  const _sub = isNegative(a, b);
  if (_sub) {
    const op = getOperation(a, b);
    switch (op) {
      case "-+":
        return minus(b.replace('-', ''), a.replace('-', ''));
      default:
        return minus(a.replace('-', ''), b.replace('-', ''));
    }
  }

  const isSubAdd = a.startsWith('-') && b.startsWith('-');
  if (isSubAdd) {
    a = a.replace('-', '');
    b = b.replace('-', '');
  }

  return `${isSubAdd ? '-' : ''}${floatPlus(a, b)}`
}

// TODO
const longMinus = (sub1: string, sub2: string) => {
  let negative = sub1.length < sub2.length || (sub1.length === sub2.length && sub1.localeCompare(sub2) < 0);
  if (negative) {
    const _temp = sub1;
    sub1 = sub2;
    sub2 = _temp;
  }
  const a = sub1.split('');
  const b = sub2.split('');
  let _borrow: boolean = false;
  const result = a.reduceRight((res: number[], cur: string, index: number) => {
    const _b = Number(b.pop());
    let _a = Number(cur);
    if (_b > _a) {
      let borrowIndex = index;
      let borrow = Number(a[borrowIndex - 1]) - 1;
      a[borrowIndex - 1] = String(borrow);
      while (borrow < 0) {
        a[--borrowIndex] = "0";
        if (borrowIndex === 0 && borrow < 0) {
          _borrow = true;
          a.shift();
          break;
        }
        borrow = Number(a[borrowIndex - 1]) - 1;
      }
      _a += 10;
    }
    res.unshift(_a - _b);
    return res;
  }, []);

  return [`${negative ? '-' : ''}${result.join('').replace(/^0*(?=\d)/g, '')}`, _borrow];
}

export const minus = (a: string, b: string) => {
  const _a = a.replace('-', '');
  const _b = b.replace('-', '');
  const op = getOperation(a, b);
  switch (op) {
    case '-+':
      return `-${floatPlus(_a, _b)}`;
    case '--':
      return floatMinus(_b, _a);
    case '+-':
      return floatPlus(_a, _b);
    default:
      return floatMinus(_a, _b);
  }
}

// 乘
const longTimes = (_a: string, _b: string): string => {
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
    const [sum, _c] = longPlus(res, String(i), 0);
    return `${_c > 0 ? _c : ''}${sum}`;
  }, '0');
}

export const times = (a: string, b: string) => {
  const _negative = isNegative(a, b);
  const float = (a.split('.')[1] || '').length + (b.split('.')[1] || '').length;
  a = a.replace(/\.|-/g, '');
  b = b.replace(/\.|-/g, '');
  const _times = longTimes(a, b);
  return `${_negative ? '-' : ''}${float > 0 ? _times.replace(new RegExp(`\\B(?!\\d{${float + 1}})`), '.') : _times}`
}

