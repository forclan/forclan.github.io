---
layout: post
title: 调用apply与call参数的区别
---

# 调用apply与call参数的区别
---
问题的原因是需要求一个数组的最大值。之前看过类似的解决办法，知道是调用apply/call将数组的输入进行“切片”，然后传入Math.max。

于是我使用
```Math.max.call(null, [1, 2, 3]) // NaN```结果出错。

可是调用
```Math.max.apply(null, [1, 2, 3]) // 3
```能得到正确的结果。

去[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)上也说这二者的差别只在意传入参数的方式不同。
>apply 与 call() 非常相似，不同之处在于提供参数的方式。apply 使用参数数组而不是一组参数列表（原文：a named set of parameters）。apply 可以使用数组字面量（array literal），如 fun.apply(this, ['eat', 'bananas'])，或数组对象， 如  fun.apply(this, new Array('eat', 'bananas'))。
>
>你也可以使用 arguments  对象作为 argsArray 参数。 arguments 是一个函数的局部变量。 它可以被用作被调用对象的所有未指定的参数。 这样，你在使用apply函数的时候就不需要知道被调用对象的所有参数。 你可以使用arguments来把所有的参数传递给被调用对象。 被调用对象接下来就负责处理这些参数。

之前我对这的理解一直是apply需要把所以参数放在一个数组里；call不需要，可以接受多个参数。这样理解没错，但不太全面。上面说了，apply与call的主要区别在于参数的传递方式，又提到使用arguments可以访问参数。
于是可以写一个专门的函数来打印参数，进而知道发生了什么。

```javascript
function log() {
	console.log(arguments);
}
log.apply(null, [1, 2, 3]); // [1, 2, 3]
log.call(null, [1, 2, 3]); // [Array[3]]
```
问题就明了了，apply将传入的参数数组`[1, 2, 3]`直接作为调用函数的*arguments*;call则是将后面的参数分别复制给*arguments[0], arguments[1]...*
回答最开始的问题，为什么apply可以使用？`Math.max.apply(null, [1, 2, 3])`在运行时，`Math.max`函数中的`arguments = [1, 2, 3]`等同于`Math.max(1, 2, 3)`，而`Math.max.call(null, [1, 2, 3])`在运行时，*arguments[0] = [1, 2, 3]*，相当于`Math.max([1, 2, 3])`所以会出错。

如果对apply传入不只一个参数会怎么样呢

```javascript
log.apply(null, [1, 2, 3], 4, 5) // [1, 2, 3]和之前的结果一样，说明多的参数被删除了，并没有传递到函数中。
log.apply(null, [1, 2, 3], 4, 5) // [Array[3], 4, 5]
```

## 箭头函数与call/apply
箭头函数是没有*arguments*的，详情可以[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)中**arguments 的词法**一节。
>箭头函数不会在其内部暴露出  arguments 对象： arguments.length, arguments[0], arguments[1] 等等，都不会指向箭头函数的 arguments，而是指向了箭头函数所在作用域的一个名为 arguments 的值（如果有的话，否则，就是 undefined。——译者注）。

```javascript
const clog = (a, b) => {
   console.log(arguments);
}
clog(1, 2) // Uncaught ReferenceError: arguments is not defined(…)
```

如果调用apply/call会绑定数据吗，答案是不会
```
clog.call(null, [1, 2, 3]) //  Uncaught ReferenceError: arguments is not defined(…)
clog.apply(null, [1, 2, 3]) //  Uncaught ReferenceError: arguments is not defined(…)
```
也就是说，apply/call对于箭头函数的数值绑定是没有效果的。