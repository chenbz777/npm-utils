## 安装

```bash
npm i @chenbz/utils
```

<br />

## 使用

```js
const { date, random } = require("@chenbz/utils");

// 2022-03-29 12:00:00
console.log(date.getDateTime());
// D7fzbsOma9Wreqgf
console.log(random.str());
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

### random

| 函数名                 | 描述                     |
| ---------------------- | ------------------------ |
| random()               | 随机函数                 |
| number()               | 随机数字                 |
| lowerCase()            | 随机小写                 |
| UpperCase()            | 随机大写                 |
| lowerUpperCase()       | 随机大小写               |
| numberLowerCase()      | 随机数字和小写           |
| numberUpperCase()      | 随机数字和大写           |
| numberLowerUpperCase() | 随机数字和大小写         |
| str()                  | 随机数字和大小写(简写版) |
