---
layout: post
title: 数组拷贝以及需要注意的事项
---

## 起因
有时候会需要完全拷贝一个数组，从[stackoverflow](http://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript)上知道，有这么几个方法：

```javascript
arr = [1, 2, 3];
1.var arr1 = JSON.parse(JSON.stringify(arr));
2.var arr2 = arr.slice();
3.var arr3 = arr.concat();
```
第一种方法是先将`arr`转化为字符串，再用`JSON.parse`进行解析，得到一个新的数组。

第二、三种方法都是利用`Array`对象自带的函数返回一个新的数组，进而实现对数组的拷贝。


## 存在的问题
slice和concat都是`浅拷贝`，如果`arr`里面存放的是对象，则新建的数组里面存放的是之前那些对象的`引用`。

```javascript
var arr = [[1], 2, 3];
var arr2 = arr.slice();
// 修改基本数据类型的数据，不会影响到原数组
arr2[1] = 100;
arr2[2] = 123;
arr // [[1], 2, 3];
// 修改对象，会影响原数组
arr2[0][0] = 123;
arr // [[123], 2, 3];
```
原因是执行`var arr2 = arr.slice();`时，由于`arr[1], arr[2]`是基本数据类型，所以`arr2[1], arr2[2]`中完全复制的基本类型的数据。但`arr[0]`是一个一个对象，复制后`arr2[0]`与`arr[0]`指向的是同一个对象（并没有新建一个一模一样的`[1]`)，所以对`arr2[0][0]`的修改会影响arr的结果。

值得注意的是，如果直接将arr2[0]进行修改，是不会影响arr的结果的。

```javascript
var arr = [[1], 2, 3];
var arr2 = arr.slice();
arr2[0] = 123;
arr // [[1], 2, 3];
```
原因是`arr2[0],arr[0]`指向同一个对象，`arr2[0]`只是一个指向`[1]`的引用，`arr2[0] = 123`只是修改了存放在`arr2[0]`中的值，所以不会影响`arr`的结果。

## 产生的原因
绝大多数情况下，对对象的操作都是操作那个对象的`引用`,而不是新建一个新的对象。如下面的map操作，一般来说map会返回一个新的数组(也就是一般来说，map操作不会影响原始数据),但如果map操作每次处理的数据都是是对象(下面的`val`)，结果就不同了。

```javascript
var arr = [[1], [2], [3]];
var result = arr.map(function(val) {
	val.push(100);
	return val;
});
console.log(result);
console.log(arr);
```
result的结果是`[1, 100], [2, 100], [3, 100]]`;

arr的结果变成了`[1, 100], [2, 100], [3, 100]]`;