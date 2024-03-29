# 日常习题
## 微队列/宏队列
```js
setTimeout(function() {
  console.log(1)
}, 0);

new Promise(function executor(resolve) {
  console.log(2);
  for( var i=0 ; i<10000 ; i++ ) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);
```
## link和import的区别
1. link是XHTML标签,而import完全是css提供的一种方式
2. 加载顺序的区别,link同步加载,而import是需要等页面加载完成后再加载
3. 兼容性的差别,
## src和href的区别
1. href表示的是超文本引用,用来建立当前元素和文档之间的链接 link a,会并行下载该文档,并且不会停止对当前文档的处理,所以一般用link而不用@import
2. src是socure的缩写,是一种引入,src指向的内容会嵌入到文档当中标签所在的位置,  img, script, 当元素解析到该元素时,会暂停浏览器的渲染,直到该资源加载完成.
## async await
```js
var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1
```
## TCP和UDP的区别
1.基于连接与无连接；  
2.对系统资源的要求（TCP较多，UDP少）；  
3.UDP程序结构较简单；  
4.流模式与数据报模式 ；  
5.TCP保证数据正确性，UDP可能丢包，TCP保证数据顺序，UDP不保证。  
## tcp协议和udp协议的差别 
TCP UDP 
是否连接 面向连接 面向非连接 
传输可靠性 可靠 不可靠 
应用场合 传输大量数据 少量数据 
速度 慢 快
## 前端性能优化问题
#### 1.css
1> css的嵌套不能太深  
  2> 雪碧图 (css精灵)  
  3> 尽量使用字体图标  
  4> css表达式
#### 2.js
1> 减少对dom的操作,会影响重绘重排(数据驱动模式)  
	2> 使用link代替@import  
#### 3.图片懒加载和预加载
#### 4.减少ajax请求
#### 5.webpack打包压缩文件
## 实现首字母大写
\b 匹配单词边界   \bCha 可以匹配到Chart  art\b 可以匹配到chart
```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase()); 
```
## 重置Vue组件的data数据
```js
Object.assign(this.$data, this.$options.data())
```
##  数组降维
```js
var arr = [3, [5, 6], [7, 5, [3, 5]]];
var newArr = [].concat.apply([], arr);
```
## 面试题8
```js
var bool = true;

function a () {
    console.log('--aa');
}
function b () {
    console.log('--bb');
}

bool && a() || b()
```
## 面试题9
```js
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);  }
  setTimeout(log, 100);
}

```
## 实现继承的几种方式
1.原型链继承
```js
function Super() {
  this.name = 'tom';
}
Super.prototype.setName = function(name) {
  this.name = name;
}

function Sub() {
  this.age = '18';
}
Sub.prototype = new Super();

let sub = new Sub();
sub.setName('tom2');
```
2.构造函数继承
```js
function Super() {
  this.name = 'tom';
}
function Sub() {
    this.age = '18';
  Super.call(this);
}
let sub = new Sub();
console.log('---sub.name', sub.name);
```
3. 组合继承，原型链和构造函数相结合
4. class继承
```js
class Super {
  constructor(){
      this.name = 'tom';
  }
  setName(name){
      this.name = name;
  }
}
class Sub extends Super {
  constructor(){
      super();
      this.age = '18';
  }
  setName2(name){
     super.setName(name);
  }
}
let sub = new Sub();
sub.setName2('tom2');
console.log('-----sub.name', sub.name);
```
## 实现call
```js
// foo.call(bar, arg1, arg2);
Function.prototype.call = function (context) {
    context.fn = this;
    let args = [];
    for (let i = 1;  i < arguments.length; i++) {
        args.push(arguments[i]);
    } 
    const result = context.fn(...args);
    delete context.fn;
    return result;
}****
```
## 实现apply
```js
// 与call方法类似
```
## 获取style
```
function getStyle(dom, style) {
	return window.getComputedStyle && window.getComputedStyle(dom, null)[style] ||dom.currentStyle[style]
}
```
## 笔试题-1
![solar](../../images/1.png)
## 笔试题-2
![solar](../../images/2.png)

## 浏览器渲染原理
1.解析html
渲染主线程遇到link标签，主线程不会等待，会继续解析后续的html，这是因为下载和解析css的工作是在预解析线程中，这就是
css不会阻塞html解析的根本原因
遇到script位置，会停止解析html,会等待js下载并执行完成后再继续后续的html解析
第一步完成后，会得到dom树和cssom树
2.样式计算
主线程会遍历得到的dom树，依次为树中的每个节点计算对应的样式，称之为 computed style
3.接下来是布局，布局完成后会得到布局树
布局阶段会依次遍历dom树的每一个节点，计算每个节点的几何信息，例如节点的宽高，相对包含块的位置