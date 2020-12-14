const formatReg = /\B(?=(\d{3})+(?!\d))/g;
const mask = '.';
const thousandSeparator = ',';

export const numberFormatCommon = (value: number, decimal?: number): string => {
  const valStr = String(decimal != null ? value.toFixed(decimal) : value);
  return formatValue(valStr, thousandSeparator, mask);
}

const formatValue = (value: any, thousandSeparator: string, mask: string)
  : string => {
  const valStr = String(value);
  const [intVal, perVal] = valStr.split(mask);
  const intFmt = intVal.replace(formatReg, thousandSeparator);
  return perVal != undefined ? `${intFmt}${mask}${perVal}` : intFmt;
}

/**
 * @param value 需要格式化的数据
 * @param format 格式化样式： x,xxx,xxx.xxx
 */
export const numberFormat = (value: any, format?: string): string => {

  value = String(value);

  switch (format) {
    case 'x,xxx,xxx.xxx':
      return formatValue(value, ',', '.');

    case 'x.xxx.xxx,xxx':
      value = value.replace(/\./, ',');
      return formatValue(value, '.', ',');

    case 'x xxx xxx,xxx':
      value = value.replace(/\./, ',');
      return formatValue(value, ' ', ',');

    case 'xx,xx,xxx.xxx':
      const valStr = String(value);
      const [intVal, perVal] = valStr.split('.');
      const intFmt = intVal.replace(/\B(?=(\d{2})+(?!\d{2})\d)/g, ',');
      return perVal ? `${intFmt}.${perVal}` : intFmt;

    case 'x,xxx,xxx.xxx&-x.xxx.xxx,xxx':
      if (value.startsWith('-')) {
        value = value.replace(/\./, ',');
        return formatValue(value, '.', ',');
      }
      return formatValue(value, ',', '.');

    default:
      return formatValue(value, ',', '.');
  }
}

/**
 * 还原格式化的数据
 * @param value 
 * @param format 
 */
export const numberParse = (value: string, format?: string): string => {

  switch (format) {
    case 'x,xxx,xxx.xxx':
      return value.replace(/,/g, '');

    case 'x.xxx.xxx,xxx':
      return value.replace(/\./g, '').replace(/,/, '.');

    case 'x xxx xxx,xxx':
      return value.replace(/\s/g, '').replace(/,/, '.');

    case 'xx,xx,xxx.xxx':
      return value.replace(/,/g, '');

    case 'x,xxx,xxx.xxx&-x.xxx.xxx,xxx':
      if (value.startsWith('-')) {
        return value.replace(/\./g, '').replace(/,/, '.');
      }
      return value.replace(/,/g, '');

    default:
      return value.replace(/,/g, '');
  }
}