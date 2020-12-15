const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";
const DEFAULT_DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm";
const DEFAULT_TIME_FORMAT = "HH:mm";

const dateFormatByCountryCode = (localeCode?: string)
  : string => {
  return getCode('fmt_date', localeCode) || DEFAULT_DATE_FORMAT;
}

const dateTimeFormatByCountryCode = (localeCode?: string)
  : string => {
  return getCode('fmt_dateTime', localeCode) || DEFAULT_DATE_TIME_FORMAT;
}

const timeFormatByCountryCode = (localeCode?: string)
  : string => {
  return getCode('fmt_time', localeCode) || DEFAULT_TIME_FORMAT;
}

const numberFormatByCountryCode = (localeCode?: string)
  : string => {
  return getCode('fmt_number', localeCode);
}

const getCode = (format: string, localeCode?: string) => {
  localeCode = localeCode || 'CN';
  return countryCodes[localeCode][format];
}

const getFormatByCountryCode = getCode;

export {
  dateFormatByCountryCode,
  dateTimeFormatByCountryCode,
  timeFormatByCountryCode,
  numberFormatByCountryCode,
  getFormatByCountryCode
};


const countryCodes = {
  "AL": {
    "code": "AL",
    "name": {
      "cn": "阿尔巴尼亚",
      "en": "Albania"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "AR": {
    "code": "AR",
    "name": {
      "cn": "阿根廷",
      "en": "Argentina"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "AW": {
    "code": "AW",
    "name": {
      "cn": "阿鲁巴岛",
      "en": "Aruba"
    },
    "fmt_dateTime": "DD-MM-YYYY HH:mm",
    "fmt_dateTimeJQ": "dd-mm-yy HH:mm",
    "fmt_date": "DD-MM-YYYY",
    "fmt_dateJQ": "dd-mm-yy",
    "fmt_daymonth": "DD-MM",
    "fmt_dateShort": "DD-MM-YY",
    "fmt_dateShortJQ": "dd-mm-y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM-YYYY"
  },
  "AZ": {
    "code": "AZ",
    "name": {
      "cn": "阿塞拜疆",
      "en": "Azerbaijan"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "ET": {
    "code": "ET",
    "name": {
      "cn": "埃塞俄比亚",
      "en": "Ethiopia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "IE": {
    "code": "IE",
    "name": {
      "cn": "爱尔兰",
      "en": "Ireland"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "EE": {
    "code": "EE",
    "name": {
      "cn": "爱沙尼亚",
      "en": "Estonia"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "AO": {
    "code": "AO",
    "name": {
      "cn": "安哥拉",
      "en": "Angola"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "AG": {
    "code": "AG",
    "name": {
      "cn": "安提瓜及巴布达",
      "en": "Antigua and Barbuda"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "AT": {
    "code": "AT",
    "name": {
      "cn": "奥地利",
      "en": "Austria"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "AU": {
    "code": "AU",
    "name": {
      "cn": "澳大利亚",
      "en": "Australia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BB": {
    "code": "BB",
    "name": {
      "cn": "巴巴多斯",
      "en": "Barbados"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "PG": {
    "code": "PG",
    "name": {
      "cn": "巴布亚新几内亚",
      "en": "New Guinea"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BS": {
    "code": "BS",
    "name": {
      "cn": "巴哈马群岛",
      "en": "Bahamas"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "PK": {
    "code": "PK",
    "name": {
      "cn": "巴基斯坦",
      "en": "Pakistan"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx&-x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "PY": {
    "code": "PY",
    "name": {
      "cn": "巴拉圭",
      "en": "Paraguay"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "PA": {
    "code": "PA",
    "name": {
      "cn": "巴拿马",
      "en": "Panama"
    },
    "fmt_dateTime": "MM/DD/YYYY HH:mm",
    "fmt_dateTimeJQ": "mm/dd/yy HH:mm",
    "fmt_date": "MM/DD/YYYY",
    "fmt_dateJQ": "mm/dd/yy",
    "fmt_daymonth": "MM/DD",
    "fmt_dateShort": "MM/DD/YY",
    "fmt_dateShortJQ": "mm/dd/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BR": {
    "code": "BR",
    "name": {
      "cn": "巴西",
      "en": "Brazil"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BY": {
    "code": "BY",
    "name": {
      "cn": "白俄罗斯",
      "en": "Belarus"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "BM": {
    "code": "BM",
    "name": {
      "cn": "百慕大",
      "en": "Bermuda"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BG": {
    "code": "BG",
    "name": {
      "cn": "保加利亚",
      "en": "Bulgaria"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "MK": {
    "code": "MK",
    "name": {
      "cn": "北马其顿",
      "en": "Macedonia (Former Yugoslav Republic)"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "BJ": {
    "code": "BJ",
    "name": {
      "cn": "贝宁",
      "en": "Benin"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BE": {
    "code": "BE",
    "name": {
      "cn": "比利时",
      "en": "Belgium"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "IS": {
    "code": "IS",
    "name": {
      "cn": "冰岛",
      "en": "Iceland"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "PR": {
    "code": "PR",
    "name": {
      "cn": "波多黎各",
      "en": "Puerto Rico"
    },
    "fmt_dateTime": "MM/DD/YYYY HH:mm",
    "fmt_dateTimeJQ": "mm/dd/yy HH:mm",
    "fmt_date": "MM/DD/YYYY",
    "fmt_dateJQ": "mm/dd/yy",
    "fmt_daymonth": "MM/DD",
    "fmt_dateShort": "MM/DD/YY",
    "fmt_dateShortJQ": "mm/dd/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "PL": {
    "code": "PL",
    "name": {
      "cn": "波兰",
      "en": "Poland"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "BIH": {
    "code": "BIH",
    "name": {
      "cn": "波斯尼亚和黑塞哥维那",
      "en": "Bosnia and Herzegovina"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "BO": {
    "code": "BO",
    "name": {
      "cn": "玻利维亚",
      "en": "Bolivia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BZ": {
    "code": "BZ",
    "name": {
      "cn": "伯利兹",
      "en": "Belize"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BW": {
    "code": "BW",
    "name": {
      "cn": "博茨瓦纳",
      "en": "Botswana"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BI": {
    "code": "BI",
    "name": {
      "cn": "布隆迪",
      "en": "Burundi"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "KP": {
    "code": "KP",
    "name": {
      "cn": "朝鲜",
      "en": "North Korea"
    },
    "fmt_dateTime": "YYYY.MM.DD HH:mm",
    "fmt_dateTimeJQ": "yy.mm.dd HH:mm",
    "fmt_date": "YYYY.MM.DD",
    "fmt_dateJQ": "yy.mm.dd",
    "fmt_daymonth": "MM/DD",
    "fmt_dateShort": "YY.MM.DD",
    "fmt_dateShortJQ": "y.mm.dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "YYYY.MM"
  },
  "DK": {
    "code": "DK",
    "name": {
      "cn": "丹麦",
      "en": "Denmark"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "DE": {
    "code": "DE",
    "name": {
      "cn": "德国",
      "en": "Germany"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "DO": {
    "code": "DO",
    "name": {
      "cn": "多米尼加共和国",
      "en": "Dominican Republic"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "RU": {
    "code": "RU",
    "name": {
      "cn": "俄国",
      "en": "Russian Federation"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "EC": {
    "code": "EC",
    "name": {
      "cn": "厄瓜多尔",
      "en": "Ecuador"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "ER": {
    "code": "ER",
    "name": {
      "cn": "厄立特里亚",
      "en": "Eritrea"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "FR": {
    "code": "FR",
    "name": {
      "cn": "法国",
      "en": "France"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "PH": {
    "code": "PH",
    "name": {
      "cn": "菲律宾",
      "en": "Philippines"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "FJ": {
    "code": "FJ",
    "name": {
      "cn": "斐济",
      "en": "Fiji"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "FI": {
    "code": "FI",
    "name": {
      "cn": "芬兰",
      "en": "Finland"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "CV": {
    "code": "CV",
    "name": {
      "cn": "佛得角",
      "en": "Cape Verde"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "FK": {
    "code": "FK",
    "name": {
      "cn": "福克兰群岛",
      "en": "Falkland Islands (Malvinas)"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "GM": {
    "code": "GM",
    "name": {
      "cn": "冈比亚",
      "en": "Gambia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "CD": {
    "code": "CD",
    "name": {
      "cn": "刚果 - 金沙萨",
      "en": "Congo, Democratic Republic of the Congo"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "CO": {
    "code": "CO",
    "name": {
      "cn": "哥伦比亚",
      "en": "Colombia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "CR": {
    "code": "CR",
    "name": {
      "cn": "哥斯达黎加",
      "en": "Costa Rica"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "CU": {
    "code": "CU",
    "name": {
      "cn": "古巴",
      "en": "Cuba"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "GY": {
    "code": "GY",
    "name": {
      "cn": "圭亚那",
      "en": "Guyana"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "KZ": {
    "code": "KZ",
    "name": {
      "cn": "哈萨克斯坦",
      "en": "Kazakhstan"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "HT": {
    "code": "HT",
    "name": {
      "cn": "海地",
      "en": "Haiti"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "KR": {
    "code": "KR",
    "name": {
      "cn": "韩国",
      "en": "South Korea"
    },
    "fmt_dateTime": "YYYY.MM.DD HH:mm",
    "fmt_dateTimeJQ": "yy.mm.dd HH:mm",
    "fmt_date": "YYYY.MM.DD",
    "fmt_dateJQ": "yy.mm.dd",
    "fmt_daymonth": "MM/DD",
    "fmt_dateShort": "YY.MM.DD",
    "fmt_dateShortJQ": "y.mm.dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "YYYY.MM"
  },
  "NL": {
    "code": "NL",
    "name": {
      "cn": "荷兰",
      "en": "Netherlands"
    },
    "fmt_dateTime": "DD-MM-YYYY HH:mm",
    "fmt_dateTimeJQ": "dd-mm-yy HH:mm",
    "fmt_date": "DD-MM-YYYY",
    "fmt_dateJQ": "dd-mm-yy",
    "fmt_daymonth": "DD-MM",
    "fmt_dateShort": "DD-MM-YY",
    "fmt_dateShortJQ": "dd-mm-y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM-YYYY"
  },
  "ME": {
    "code": "ME",
    "name": {
      "cn": "黑山",
      "en": "Montenegro"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "HN": {
    "code": "HN",
    "name": {
      "cn": "洪都拉斯",
      "en": "Honduras"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "DJ": {
    "code": "DJ",
    "name": {
      "cn": "吉布提",
      "en": "Djibouti"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "KG": {
    "code": "KG",
    "name": {
      "cn": "吉尔吉斯斯坦",
      "en": "Kyrgyzstan"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "GN": {
    "code": "GN",
    "name": {
      "cn": "几内亚",
      "en": "Guinea"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "CA": {
    "code": "CA",
    "name": {
      "cn": "加拿大",
      "en": "Canada"
    },
    "fmt_dateTime": "YYYY-MM-DD HH:mm",
    "fmt_dateTimeJQ": "yy-mm-dd HH:mm",
    "fmt_date": "YYYY-MM-DD",
    "fmt_dateJQ": "yy-mm-dd",
    "fmt_daymonth": "MM-DD",
    "fmt_dateShort": "YY-MM-DD",
    "fmt_dateShortJQ": "y-mm-dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "YYYY-MM"
  },
  "GH": {
    "code": "GH",
    "name": {
      "cn": "加纳",
      "en": "Ghana"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "KH": {
    "code": "KH",
    "name": {
      "cn": "柬埔寨",
      "en": "Cambodia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "CZ": {
    "code": "CZ",
    "name": {
      "cn": "捷克",
      "en": "Czech Republic"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "CM": {
    "code": "CM",
    "name": {
      "cn": "喀麦隆",
      "en": "Cameroon"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "KY": {
    "code": "KY",
    "name": {
      "cn": "开曼群岛",
      "en": "Cayman Islands"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "KM": {
    "code": "KM",
    "name": {
      "cn": "科摩罗",
      "en": "Comoros"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "HR": {
    "code": "HR",
    "name": {
      "cn": "克罗地亚",
      "en": "Croatia"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "KE": {
    "code": "KE",
    "name": {
      "cn": "肯尼亚",
      "en": "Kenya"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "LV": {
    "code": "LV",
    "name": {
      "cn": "拉特",
      "en": "Latvia"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "LA": {
    "code": "LA",
    "name": {
      "cn": "老挝",
      "en": "Laos"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "LT": {
    "code": "LT",
    "name": {
      "cn": "立陶宛",
      "en": "Lithuania"
    },
    "fmt_dateTime": "YYYY-MM-DD HH:mm",
    "fmt_dateTimeJQ": "yy-mm-dd HH:mm",
    "fmt_date": "YYYY-MM-DD",
    "fmt_dateJQ": "yy-mm-dd",
    "fmt_daymonth": "MM-DD",
    "fmt_dateShort": "YY-MM-DD",
    "fmt_dateShortJQ": "y-mm-dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "YYYY-MM"
  },
  "LR": {
    "code": "LR",
    "name": {
      "cn": "利比里亚",
      "en": "Liberia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "LU": {
    "code": "LU",
    "name": {
      "cn": "卢森堡",
      "en": "Luxembourg"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "RW": {
    "code": "RW",
    "name": {
      "cn": "卢旺达",
      "en": "Rwanda"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "RO": {
    "code": "RO",
    "name": {
      "cn": "罗马尼亚",
      "en": "Romania"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "MG": {
    "code": "MG",
    "name": {
      "cn": "马达加斯加",
      "en": "Madagascar"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "MT": {
    "code": "MT",
    "name": {
      "cn": "马耳他",
      "en": "Malta"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "MW": {
    "code": "MW",
    "name": {
      "cn": "马拉维",
      "en": "Malawi"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "MY": {
    "code": "MY",
    "name": {
      "cn": "马来西亚",
      "en": "Malaysia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "MU": {
    "code": "MU",
    "name": {
      "cn": "毛里求斯",
      "en": "Mauritius"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "MR": {
    "code": "MR",
    "name": {
      "cn": "毛里塔尼亚",
      "en": "Mauritania"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "US": {
    "code": "US",
    "name": {
      "cn": "美国",
      "en": "United States of America"
    },
    "fmt_dateTime": "MM/DD/YYYY HH:mm",
    "fmt_dateTimeJQ": "mm/dd/yy HH:mm",
    "fmt_date": "MM/DD/YYYY",
    "fmt_dateJQ": "mm/dd/yy",
    "fmt_daymonth": "MM/DD",
    "fmt_dateShort": "MM/DD/YY",
    "fmt_dateShortJQ": "mm/dd/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "PE": {
    "code": "PE",
    "name": {
      "cn": "秘鲁",
      "en": "Peru"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "MD": {
    "code": "MD",
    "name": {
      "cn": "摩尔多瓦",
      "en": "Moldova, Republic of Moldova"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "MC": {
    "code": "MC",
    "name": {
      "cn": "摩纳哥",
      "en": "Monaco"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "MZ": {
    "code": "MZ",
    "name": {
      "cn": "莫桑比克",
      "en": "Mozambique"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "MX": {
    "code": "MX",
    "name": {
      "cn": "墨西哥",
      "en": "Mexico"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "NA": {
    "code": "NA",
    "name": {
      "cn": "纳米比亚",
      "en": "Namibia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "ZA": {
    "code": "ZA",
    "name": {
      "cn": "南非",
      "en": "South Africa"
    },
    "fmt_dateTime": "YYYY/MM/DD HH:mm",
    "fmt_dateTimeJQ": "yy/mm/dd HH:mm",
    "fmt_date": "YYYY/MM/DD",
    "fmt_daymonth": "mm/dd",
    "fmt_dateJQ": "yy/mm/dd",
    "fmt_dateShort": "YY/MM/DD",
    "fmt_dateShortJQ": "y/mm/dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "YYYY/MM"
  },
  "NI": {
    "code": "NI",
    "name": {
      "cn": "尼加拉瓜",
      "en": "Nicaragua"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "NG": {
    "code": "NG",
    "name": {
      "cn": "尼日利亚",
      "en": "Nigeria"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "NO": {
    "code": "NO",
    "name": {
      "cn": "挪威",
      "en": "Norway"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "PT": {
    "code": "PT",
    "name": {
      "cn": "葡萄牙",
      "en": "Portugal"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "GE": {
    "code": "GE",
    "name": {
      "cn": "乔治亚州",
      "en": "Georgia, Republic of Georgia"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "JP": {
    "code": "JP",
    "name": {
      "cn": "日本",
      "en": "Japan"
    },
    "fmt_dateTime": "YYYY/MM/DD HH:mm",
    "fmt_dateTimeJQ": "yy/mm/dd HH:mm",
    "fmt_date": "YYYY/MM/DD",
    "fmt_daymonth": "mm/dd",
    "fmt_dateJQ": "yy/mm/dd",
    "fmt_dateShort": "YY/MM/DD",
    "fmt_dateShortJQ": "y/mm/dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "YYYY/MM"
  },
  "SE": {
    "code": "SE",
    "name": {
      "cn": "瑞典",
      "en": "Sweden"
    },
    "fmt_dateTime": "YYYY-MM-DD HH:mm",
    "fmt_dateTimeJQ": "yy-mm-dd HH:mm",
    "fmt_date": "YYYY-MM-DD",
    "fmt_dateJQ": "yy-mm-dd",
    "fmt_daymonth": "MM-DD",
    "fmt_dateShort": "YY-MM-DD",
    "fmt_dateShortJQ": "y-mm-dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "YYYY-MM"
  },
  "CH": {
    "code": "CH",
    "name": {
      "cn": "瑞士",
      "en": "Switzerland"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "SV": {
    "code": "SV",
    "name": {
      "cn": "萨尔瓦多",
      "en": "El Salvador"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "WS": {
    "code": "WS",
    "name": {
      "cn": "萨摩亚",
      "en": "Samoa"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "RS": {
    "code": "RS",
    "name": {
      "cn": "塞尔维亚",
      "en": "Serbia"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "SL": {
    "code": "SL",
    "name": {
      "cn": "塞拉利昂",
      "en": "Sierra Leone"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "SC": {
    "code": "SC",
    "name": {
      "cn": "塞舌尔",
      "en": "Seychelles"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "ST": {
    "code": "ST",
    "name": {
      "cn": "圣多美和普林西比",
      "en": "Sao Tome and Principe"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "SH": {
    "code": "SH",
    "name": {
      "cn": "圣赫勒拿",
      "en": "Saint Helena, Ascension, and Tristan da Cunha"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "SX": {
    "code": "SX",
    "name": {
      "cn": "圣马丁岛",
      "en": "Sint Maarten (Dutch part)"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "LK": {
    "code": "LK",
    "name": {
      "cn": "斯里兰卡",
      "en": "Sri Lanka"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "xx,xx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "SK": {
    "code": "SK",
    "name": {
      "cn": "斯洛伐克",
      "en": "Slovakia"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "SI": {
    "code": "SI",
    "name": {
      "cn": "斯洛文尼亚",
      "en": "Slovenia"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "SR": {
    "code": "SR",
    "name": {
      "cn": "苏里南",
      "en": "Suriname"
    },
    "fmt_dateTime": "DD-MM-YYYY HH:mm",
    "fmt_dateTimeJQ": "dd-mm-yy HH:mm",
    "fmt_date": "DD-MM-YYYY",
    "fmt_dateJQ": "dd-mm-yy",
    "fmt_daymonth": "DD-MM",
    "fmt_dateShort": "DD-MM-YY",
    "fmt_dateShortJQ": "dd-mm-y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM-YYYY"
  },
  "SB": {
    "code": "SB",
    "name": {
      "cn": "所罗门群岛",
      "en": "Solomon Islands"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "SO": {
    "code": "SO",
    "name": {
      "cn": "索马里",
      "en": "Somalia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "TJ": {
    "code": "TJ",
    "name": {
      "cn": "塔吉克斯坦",
      "en": "Tajikistan"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "TW": {
    "code": "TW",
    "name": {
      "cn": "台湾",
      "en": "Taiwan"
    },
    "fmt_dateTime": "YYYY-MM-DD HH:mm",
    "fmt_dateTimeJQ": "yy-mm-dd HH:mm",
    "fmt_date": "YYYY-MM-DD",
    "fmt_dateJQ": "yy-mm-dd",
    "fmt_daymonth": "MM-DD",
    "fmt_dateShort": "YY-MM-DD",
    "fmt_dateShortJQ": "y-mm-dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "YYYY-MM"
  },
  "TH": {
    "code": "TH",
    "name": {
      "cn": "泰国",
      "en": "Thailand"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "TZ": {
    "code": "TZ",
    "name": {
      "cn": "坦桑尼亚",
      "en": "Tanzania"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "TO": {
    "code": "TO",
    "name": {
      "cn": "汤加",
      "en": "Tonga"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "TT": {
    "code": "TT",
    "name": {
      "cn": "特立尼达和多巴哥",
      "en": "Trinidad and Tobago"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "TR": {
    "code": "TR",
    "name": {
      "cn": "土耳其",
      "en": "Turkey"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "VU": {
    "code": "VU",
    "name": {
      "cn": "瓦努阿图",
      "en": "Vanuatu (New Hebrides)"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "GT": {
    "code": "GT",
    "name": {
      "cn": "危地马拉",
      "en": "Guatemala"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "VE": {
    "code": "VE",
    "name": {
      "cn": "委内瑞拉",
      "en": "Venezuela"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "BN": {
    "code": "BN",
    "name": {
      "cn": "文莱",
      "en": "Brunei"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "UG": {
    "code": "UG",
    "name": {
      "cn": "乌干达",
      "en": "Uganda"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "UA": {
    "code": "UA",
    "name": {
      "cn": "乌克兰",
      "en": "Ukraine"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "UY": {
    "code": "UY",
    "name": {
      "cn": "乌拉圭",
      "en": "Uruguay"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "UZ": {
    "code": "UZ",
    "name": {
      "cn": "乌兹别克斯坦",
      "en": "Uzbekistan"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "ES": {
    "code": "ES",
    "name": {
      "cn": "西班牙",
      "en": "Spain"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "GR": {
    "code": "GR",
    "name": {
      "cn": "希腊",
      "en": "Greece"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "SG": {
    "code": "SG",
    "name": {
      "cn": "新加坡",
      "en": "Singapore"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "NZ": {
    "code": "NZ",
    "name": {
      "cn": "新西兰",
      "en": "New Zealand"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "HU": {
    "code": "HU",
    "name": {
      "cn": "匈牙利",
      "en": "Hungary"
    },
    "fmt_dateTime": "YYYY.MM.DD HH:mm",
    "fmt_dateTimeJQ": "yy.mm.dd HH:mm",
    "fmt_date": "YYYY.MM.DD",
    "fmt_dateJQ": "yy.mm.dd",
    "fmt_daymonth": "MM/DD",
    "fmt_dateShort": "YY.MM.DD",
    "fmt_dateShortJQ": "y.mm.dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "YYYY.MM"
  },
  "JM": {
    "code": "JM",
    "name": {
      "cn": "牙买加",
      "en": "Jamaica"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "AM": {
    "code": "AM",
    "name": {
      "cn": "亚美尼亚",
      "en": "Armenia"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x xxx xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "IL": {
    "code": "IL",
    "name": {
      "cn": "以色列",
      "en": "Israel"
    },
    "fmt_dateTime": "DD.MM.YYYY HH:mm",
    "fmt_dateTimeJQ": "dd.mm.yy HH:mm",
    "fmt_date": "DD.MM.YYYY",
    "fmt_dateJQ": "dd.mm.yy",
    "fmt_daymonth": "DD.MM",
    "fmt_dateShort": "DD.MM.YY",
    "fmt_dateShortJQ": "dd.mm.y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx&-x.xxx.xxx,xxx",
    "fmt_monthyear": "MM.YYYY"
  },
  "IT": {
    "code": "IT",
    "name": {
      "cn": "意大利",
      "en": "Italy"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "IN": {
    "code": "IN",
    "name": {
      "cn": "印度",
      "en": "India"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "xx,xx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "ID": {
    "code": "ID",
    "name": {
      "cn": "印度尼西亚",
      "en": "Indonesia"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "GB": {
    "code": "GB",
    "name": {
      "cn": "英国",
      "en": "United Kingdom"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "VN": {
    "code": "VN",
    "name": {
      "cn": "越南",
      "en": "Viet Nam"
    },
    "fmt_dateTime": "HH:mm DD/MM/YYYY",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "GI": {
    "code": "GI",
    "name": {
      "cn": "直布罗陀",
      "en": "Gibraltar"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "CL": {
    "code": "CL",
    "name": {
      "cn": "智利",
      "en": "Chile"
    },
    "fmt_dateTime": "DD-MM-YYYY HH:mm",
    "fmt_dateTimeJQ": "dd-mm-yy HH:mm",
    "fmt_date": "DD-MM-YYYY",
    "fmt_dateJQ": "dd-mm-yy",
    "fmt_daymonth": "DD-MM",
    "fmt_dateShort": "DD-MM-YY",
    "fmt_dateShortJQ": "dd-mm-y",
    "fmt_time": "HH:mm",
    "fmt_number": "x.xxx.xxx,xxx",
    "fmt_monthyear": "MM-YYYY"
  },
  "CN": {
    "code": "CN",
    "name": {
      "cn": "中国",
      "en": "China, the People's Republic of China (PRC)"
    },
    "fmt_dateTime": "YYYY-MM-DD HH:mm",
    "fmt_dateTimeJQ": "yy-mm-dd HH:mm",
    "fmt_date": "YYYY-MM-DD",
    "fmt_dateJQ": "yy-mm-dd",
    "fmt_daymonth": "MM-DD",
    "fmt_dateShort": "YY-MM-DD",
    "fmt_dateShortJQ": "y-mm-dd",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "YYYY-MM"
  },
  "MO": {
    "code": "MO",
    "name": {
      "cn": "中国澳门特别行政区",
      "en": "Macau"
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  },
  "HK": {
    "code": "HK",
    "name": {
      "cn": "中国特别行政区香港",
      "en": "China, Hong Kong S.A.R."
    },
    "fmt_dateTime": "DD/MM/YYYY HH:mm",
    "fmt_dateTimeJQ": "dd/mm/yy HH:mm",
    "fmt_date": "DD/MM/YYYY",
    "fmt_dateJQ": "dd/mm/yy",
    "fmt_daymonth": "DD/MM",
    "fmt_dateShort": "DD/MM/YY",
    "fmt_dateShortJQ": "dd/mm/y",
    "fmt_time": "HH:mm",
    "fmt_number": "x,xxx,xxx.xxx",
    "fmt_monthyear": "MM/YYYY"
  }
} as any;