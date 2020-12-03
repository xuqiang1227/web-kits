const formatReg = /\B(?=(\d{3})+(?!\d))/g;
const mask = '.';
const thousandSeparator = ',';

export const formatNumber = (value: number, decimal?: number): string => {
  const valStr = String(decimal != null ? value.toFixed(decimal) : value);
  const [intVal, perVal] = valStr.split(mask);
  const intFmt = intVal.replace(formatReg, thousandSeparator);
  return perVal ? `${intFmt}${mask}${perVal}` : intFmt;
}