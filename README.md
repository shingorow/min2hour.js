# min2hour.js
時間の分を時間と分にわけます

## 使用例

```js
  var minutes = 3200;
  var min2js = new Min2Hour(minutes);
  var time = min2js.parse();
  
  console.log(time); // {hour: 53, min:20}
```
