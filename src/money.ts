export const chineseMoney = (_dValue: number) => {
  let maxDec = 5;
  // 验证输入金额数值或数值字符串：
  let dValue = _dValue.toString().replace(/,/g, '')
  dValue = dValue.replace(/^0+/, '') // 金额数值转字符、移除逗号、移除前导零
  if (dValue === '') {
    return '零元整'
  } else if (isNaN(Number(dValue))) { // （错误：金额为空！）
    return '错误：金额不是合法的数值！'
  }
  let minus = '' // 负数的符号“-”的大写：“负”字。可自定义字符，如“（负）”。
  const CN_SYMBOL = '' // 币种名称（如“人民币”，默认空）
  if (dValue.length > 1) {
    if (dValue.indexOf('-') === 0) {
      dValue = dValue.replace('-', '')
      minus = '负'
    } // 处理负数符号“-”
    if (dValue.indexOf('+') === 0) {
      dValue = dValue.replace('+', '')
    } // 处理前导正数符号“+”（无实际意义）
  }
  let vInt = ''
  let vDec = '' // 字符串：金额的整数部分、小数部分
  let resAIW // 字符串：要输出的结果
  let zeroCount // 零计数
  // let i, p, d // 循环因子；前一位数字；当前位数字。
  // let quotient, modulus // 整数部分计算用：商数、模数。
  // 金额数值转换为字符，分割整数部分和小数部分：整数、小数分开来搞（小数部分有可能四舍五入后对整数部分有进位）。
  const NoneDecLen = (typeof (maxDec) === 'undefined' || maxDec === null || Number(maxDec) < 0 || Number(maxDec) > 5) // 是否未指定有效小数位（true/false）
  const parts = dValue.split('.') // 数组赋值：（整数部分.小数部分），Array的length=1则仅为整数。
  if (parts.length > 1) {
    vInt = parts[0]
    vDec = parts[1] // 变量赋值：金额的整数部分、小数部分
    if (NoneDecLen) {
      maxDec = vDec.length > 5 ? 5 : vDec.length
    } // 未指定有效小数位参数值时，自动取实际小数位长但不超5。
    let rDec = Number('0.' + vDec)
    rDec *= Math.pow(10, maxDec)
    rDec = Math.round(Math.abs(rDec))
    rDec /= Math.pow(10, maxDec) // 小数四舍五入
    const aIntDec = rDec.toString().split('.')
    if (Number(aIntDec[0]) === 1) {
      vInt = (Number(vInt) + 1).toString()
    } // 小数部分四舍五入后有可能向整数部分的个位进位（值1）
    if (aIntDec.length > 1) {
      vDec = aIntDec[1]
    } else {
      vDec = ''
    }
  } else {
    vInt = dValue
    vDec = ''
    if (NoneDecLen) {
      maxDec = 0
    }
  }
  if (vInt.length > 44) {
    return '错误：金额值太大了！整数位长【' + vInt.length.toString() + '】超过了上限——44位/千正/10^43（注：1正=1万涧=1亿亿亿亿亿，10^40）！'
  }
  // 准备各字符数组 Prepare the characters corresponding to the digits:
  // let digits, radices, bigRadices, decimals // 数组：数字（0~9——零~玖）；基（十进制记数系统中每个数字位的基是10——拾,佰,仟）；大基（万,亿,兆,京,垓,杼,穰,沟,涧,正）；辅币（元以下，角/分/厘/毫/丝）。
  const digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'] // 零~玖
  const radices = ['', '拾', '佰', '仟'] // 拾,佰,仟
  const bigRadices = ['', '万', '亿', '兆', '京', '垓', '杼', '穰', '沟', '涧', '正'] // 万,亿,兆,京,垓,杼,穰,沟,涧,正
  const decimals = ['角', '分', '厘', '毫', '丝'] // 角/分/厘/毫/丝
  resAIW = '' // 开始处理
  // 处理整数部分（如果有）
  if (Number(vInt) > 0) {
    zeroCount = 0
    for (let i = 0; i < vInt.length; i++) {
      const p = vInt.length - i - 1
      const d = vInt.substring(i, i + 1)
      const quotient = p / 4
      const modulus = p % 4
      if (d === '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          resAIW += digits[0]
        }
        zeroCount = 0
        resAIW += digits[Number(d)] + radices[modulus]
      }
      if (modulus === 0 && zeroCount < 4) {
        resAIW += bigRadices[quotient]
      }
    }
    resAIW += '元'
  }
  // 处理小数部分（如果有）
  for (let i = 0; i < vDec.length; i++) {
    const d = vDec.substring(i, i + 1)
    if (d !== '0') {
      resAIW += digits[Number(d)] + decimals[i]
    }
  }
  // 处理结果
  if (resAIW === '') {
    resAIW = '零' + '元'
  } // 零元
  if (vDec === '') {
    resAIW += '整'
  } // 元整
  resAIW = CN_SYMBOL + minus + resAIW // 人民币/负元角分/整
  return resAIW
}
