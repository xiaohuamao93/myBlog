# 小盈科技
## 1.列举js数组类型？
```

```
## 2.列举常用数组方法
```

```

## 3.以下输出什么，如果要顺序输出呢，如何改写，谈谈js的运行机制
```js
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0)
}
```

## 4.请写出对应console.log输出的值，谈谈上下文和作用域的区别
```js
var a = 1;
function test () {
    console.log(a);  // 1.
    var a = 2;
    consosle.log(this.a);  // 2.
    
    setTimeout(function() {
      console.log(a);  // 3.
    }, 0);
    
    return function () {
        console.log(a);  // 4.
        a = 3;
        console.log(this.a);  // 5.
    }
}
test()();

// 答案 1.undefined 2.1 3.3  4.2  5.1
```
