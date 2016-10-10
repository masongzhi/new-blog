##函数重载
函数重载是指在同一__作用域__内，可以有一组具有相同函数名，不同__参数__列表的函数，这组函数被称为__重载函数__。重载函数通常用来命名一组功能相似的函数，这样做减少了函数名的数量，避免了__名字空间__的污染，对于程序的__可读性__有很大的好处。

* 模拟函数重载
```
function aoAdd(){
	if(argument.length == 1){
    	alert(arguments[0]) + 10);
    }else if(argument.length == 2){
    	alert(argument[0] + argument[1]);
    }
}
doAdd(10);		//output "20"
doAdd(30,20);	//ouput "50"
```
只有一个参数时，doAdd()函数才会给数字加10，如果有两个参数，只是把这两个数相加，返回他们的和。所以__doAdd(10)__输出的是“20”，而__doAdd(30,20)__输出的是“50”.虽然不如重载那么好，不过已足可避开 __ECMAScript__ 的这种限制。
***
##闭包
##### 一个函数调用另一个函数内部变量时形成闭包

* 闭包不会造成内存泄漏。

* 程序写错了才会造成内存泄漏。

* 闭包本身不会引起内存泄露，只有使用不当才会出现问题。

  ​



* 另外，那些书讲的事情应该是：老浏览器（主要是IE6）由于垃圾回收有问题导致很容易出现内存泄漏。但是那是浏览器实现的bug。



* IE6时代有bug，闭包会造成内存泄漏，这个现在已经无须考虑了。





##数组
* 创建方法
>var aValuse = new Array();
>var aValuse = [];

* concat
  *连接两个数组*
    >var result = array1.concat(array2);

* slice
  *返回具有特定项的心数组*
    >var result2 = array1.slice(1);
    >var result3 = array1.slice(1,4);//返回第一个位置和第二个位置间的所有项，不包括第二个位置处的项

* push
  *末位添加*

* pop
  *末位删除*

* shift
  *删除第一个项*

* unshift
  *添加第一个项，然后余下的项向下移动一个位置*

* reverse
  *颠倒顺序*

* sort
  *排序*
    ```
    result.sort(function(a,b)
    	return a-b;//从小到大
    )
    ```




## JS实现重定向

> window.location.replace(url); //不会把起始页放入会话历史中

> window.location.href = url; //会把url放入会话历史中



## var functionName = function(){} VS function functionName(){}

> <script>
>
> //Error
>
> ssr();
>
> var ssr = function(){};
>
> </script>
>
>  
>
> <script>
>
> //No Error
>
> ssr();
>
> function ssr(){};
>
> </script>


