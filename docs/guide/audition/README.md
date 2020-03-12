### 微队列/宏队列
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
# link和import的区别
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
