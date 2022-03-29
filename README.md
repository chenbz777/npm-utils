## 安装

```bash
npm i @chenbz/utils
```

<br />

## 使用

```js
const { date, cookie } = require("@chenbz/utils");

// 2022-03-29 12:00:00
console.log(date.getDateTime());
console.log(cookie.get('cookie'));
```



## 介绍

### date

| 函数名              | 描述                             |
| ------------------- | -------------------------------- |
| getDateToString()   | 日期格式化                       |
| getTimeDifference() | 计算两个时间相差的               |
| getDateTime()       | 获取日期时间 yyyy-MM-dd hh:mm:ss |
| getDate()           | 获取日期                         |
| getTime()           | 获取时间                         |
| getTimestamp()      | 获取时间戳（毫秒级）             |
| getTimestamp10()    | 获取时间戳（秒级）               |
| getDayOfYear()      | 获取当前时间是今年的第几天       |
| getWeekOfYear()     | 获取当前时间是今年的第几周       |

### cookie

| 函数名    | 描述               |
| --------- | ------------------ |
| set()     | 存储cookie         |
| get()     | 获取cookie         |
| del()     | 删除cookie         |
| getJSON() | 获取cookieJSON格式 |

