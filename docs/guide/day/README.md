---
title: 日常笔记
---
## vertical-align: middle
vertical-align属性起作用的前提必须是作用在内联元素上。 
所以如果元素设置了float: left或者position: absolute，则其vertical-align属性不能生效,
因为此时元素的display计算值为block了。
用来布局元素垂直居中inline, inline-block 可以使用vertical-align: middle
## some方法
判断是否满足条件，返回true或false, 有一个为true，后面的元素就不会再执行
```js
    array.some(function (currentValue, index, arr), thisValue)
    const isVowel = char => ["a", "e", "o", "i", "u"].includes(char);
    const containsVowel = str => [...str].some(isVowel);
    containsVowel(randomStr);
```
## includes方法
includes方法,判断数组是否存在元素
```js
arr.includes(searchElement, fromIndex)
[2, 4, 6].includes(4);   //true
```
## every方法
every方法 //判断是否都满足条件，如果有一个不满足，则返回false, 剩余元素就不会再执行
```js
array.every(function (currentValue, index, arr), thisValue)
```
## reduce方法
reduce方法:  可累加
```js
arr.reduce(function (total, currentValue, currentIndex, arr), initalValue)
```
## new Set()
数组去重
```js
var a = [3, 5, 6, 2];
[...new Set(a)];
```
## substring()
返回的子串包括 start 处的字符，但不包括 start 处的字符。 [)  ------字符串
## slice() 
包含从 start 到 end （不包括该元素)  [) -------数组
## 会改变原数组的一些方法
- push 向数组最后一项添加元素
- pop  删除数组最后一项元素
- unshift 向数组初始位置添加元素
- shift   删除数组初始位置的元素
- reverse 反转数组
- sort  对数组进行排序
- splice 截取数组
## 原生js实现深拷贝
1.
```js
function copy(arr){
    var obj=arr.constructor==Array?[]:{};
　　//第二种方法 var obj=arr instanceof Array?[]:{}
    for(var item in arr){
        if(typeof arr[item]==="object"){
            obj[item]=copy(arr[item]);
        }else{
            obj[item]=arr[item];
        }
    }
    return obj;
}
```
2. 通过JSON.stringify(obj),会有一点问题
## 防抖
多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行。
```js
function debounce(method,delay) {
	var timer = null;
	var self = this;
	return function () {
		var args = arguments;
		timer && clearTimeout(timer);
		timer = setTimeout(function () {
			method.apply(self, args);
		}, delay)
	}
}
```
## 节流
触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。
```js
function throttle(func, wait) {      
	var previous = Date.now();      
	return function () {          
		var now = Date.now();          
		var context = this;          
		var args = arguments;          
		if (now - previous > wait) {               
			func.apply(context, args);               
			previous = now;           
		}       
	}   
}
```
## [...a]
```js
var a = 'sgsgjskgljs';
var b = [...a];   ['s', 'g', 's', 'g', .....];
```
## 数组扁平化
1.方法一
```js
var arr = [3, [5, 6], [7, 5, 8]];
var newArr = [].concat.apply([], arr);
```
2.方法二
```js
var flatten = function (arr) {
	return arr.reduce(function(newArr, currentValue) {
		return newArr.concat(Array.isArray(currentValue) ? flatten(currentValue) : currentValue);
	}, [])
}
```
2.方法三
```js
var arrStr = arr.toString();
var newStr = arr.split(',');
// Array.prototype.flat
var newArr = arr.flat(2);
```
## rem适配的方案
```js
(function () {
	var width = document.documentElement.clientWidth;
	var styleNode = document.createElement('style');
	styleNode.innerHTML = 'html{ font-size: ' + width / 16 +'px!important}';
	document.head.appendChild(styleNode);
})()
```
## css禁止用户选择
```css
body{
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
```
## URLSearchParam
```js
new URLSearchParams(location.search).get("name"); // 蜘蛛侠
```
## object-fit
object-fit: contain/cover 用来设置图片默认适应,
## shape-outslide
设置文字围绕时的样式
## flex
display: flex布局时,给子类加margin: auto有不一样的效果
