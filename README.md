# React7

JavaScript + es6 + react + react-router4 + antd 构建的一个后台管理系统

##

```js
// 同步更新SetState策略
asyncSetState = state => {
  return new Promise(resolve => {
    this.setState(state, resolve);
  });
};

onchange = async params => {
  await this.asyncSetState({
    params
  });
  console.log("state 同步修改");
};
```
