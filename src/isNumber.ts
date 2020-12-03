export const isNumber = (value?: any): boolean => {
  if (Object.prototype.toString.call(value) !== '[object Number]') {
    return false;
  }
  return /^-?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)$/.test(value);
}