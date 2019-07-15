<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>title</title>
<style>
div{
    background-color: #114848;

}
</style>

javascript 笔记

1.JavaScript基本数据类型
	string number 

2.字符串数字转number类型数字
~~~
	var a='12px';

	a=parseint(a)+1;

	现在的 a=13
~~~
<hr>  
它的实现原理是从左到右查看字符串,如果遇到数字的字符串就转化为number类型,遇到别的类型就舍弃后面所有数据<br>
一般情况都是用parsefloat(xxx),不仅可以转换整数,还可以转小数
	
~~~
	隐式转换
		var a=1
		var b='1'
		a+b=11
		a-b=0
~~~

3.获取用户输入
~~~
<script>
		window.onload=function()
		{ var txt1=document.getElementById("text1");
		  var txt2=document.getElementById("text2");
		  var bott=document.getElementById("botten")
			bott.onclick=function ()
				{
					alert(parseInt(txt1.value)+parseInt(txt2.value));
						};
			};
	</script>
	<body>
		<input id="text1" type="text"/>
		<input id="text2" type="text"/>
		<input id="butten" type="button" value="sam"/>
	</body>
~~~

主要是通过	var txt1=document.getElementById("text1")	这种方法获取输入


4.变量的作用域和闭包
	4.1 变量主要是局部变量和全局变量
 	4.2 闭包:
			子函数可以使用父函数的局部变量
~~~
				window.onload=function()
		{ var txt1=document.getElementById("text1");
		  var txt2=document.getElementById("text2");
		  var bott=document.getElementById("botten")
			bott.onclick=function ()
				{
					alert(parseInt(txt1.value)+parseInt(txt2.value));
						};
			};
~~~
这个例子中	bott.onclick 就使用了父函数的txt的局部变量
<hr>
5.常用运算符
	5.1算术运算符 +   -    *    /     %(取余数)
	5.2赋值 =  +=   -=   *=    /=    %=
	5.3关系 <    >    =>    <=    ==    ===  !=   !==
	5.4逻辑   && 与    || 或    !否

6.语句控制
~~~
if	(	条件一	)
{	
语句一
	}
	else
{
语句二
	}
~~~

~~~

if	(	条件一	)

{
语句一
	}

else if		(条件二) 

{
语句二
	}

else if		(条件三) 

{
语句三
	}
	else
{
语句n
	}
~~~

~~~
switch(变量)	{
	case 值1:
		语句一
		break;
	case 值二:
		语句二
		break;
	``````````````
	default: 
		语句n(可以不写 )
	}
~~~
js三元运算符  "     ?:    "
eg:
	var aa=144
	a%2==0?alert("双数"):alert("单数")
	一般不用这个
~~~
for循环
for (var i=1;i<20;i++){
alert("蚂蚁被禁服");
	}
for(one in Array){
	options
	}

~~~
while循环
略
~~~
json
 一般循环输出json内容都用for in
~~~


函数传参 
可变参:arguments
获取可变参数的长度:arguments.length 
css(变量,"属性")	获取该属性的样式
css(变量,"属性","具体数值")	设置该属性样式

取非行间样式	(只可以去单一的样式)
~~~
obj.currentStyle[需要获取的参数]
getComputedStyle(obj,anything)[需要获取的参数]
~~~


~~~
定义数组: var 数组名称 = [xxxx,xxx,xxx,xxx,xxx,xxx];
~~~



数组的处理
~~~
	添加:push:从尾部添加
		:unshift:从头部添加
	删除:pop():从尾部弹出
		shift():从头部弹出 
	solice 
		splice(开始位置,要删除的 长度,元素)
			先删除,后插入

		splice(开始位置,长度)
			直接删除
		
		splice(开始位置,0,元素...)
			插入
~~~



~~~
concat:对数组操作
	var a=[1,2,3]
	var b=[4,5,6]
	a.concat(b)
		 ||
		\||/
	[1,2,3,4,5,6]
~~~

~~~
join:对数组操作 
	a.join("---")
		  ||
	     \||/
	1,---2,---3
~~~

~~~
	数组的排序
		array=[12,14,5679,84387,656,34,732,6,43]
		array.sort();
~~~



JavaScript 定时器
~~~
	etInterval		隔型
	etTimeout	延时型
~~~

定时器的关闭
~~~
	learInterval
	earTimeout
~~~




JavaScript函数代码规范
~~~
	function 函数名称 (形参1,形参2,~~~ ){ 
		xxxx;
		retuen;
	}
~~~

~~~
使用函数时就是	function 函数名称 (实参1,实参2~~~){	}
			遇到return 就会结束运行)
~~~

类数组对象：arguments 
~~~
暂时略

~~~
DOM操作
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

查找 HTML 元素
通常，通过 JavaScript，您需要操作 HTML 元素。
		为了做到这件事情，必须首先找到该元素。有三种方法来做这件事：



通过 id 找到 HTML 元素
~~~
	var x=document.getElementById("intro");
~~~

通过标签名找到 HTML 元素
~~~
	var x=document.getElementById("main");
	var y=x.getElementsByTagName("p");
~~~
通过类名找到 HTML 元素
~~~
	var x=document.getElementsByClassName("intro");

	改变 HTML 输出流
	<!DOCTYPE html>
	<html>
	<body>
	<script>
	document.write(Date());
	</script>
	</body>
	</html>
~~~

改变 HTML 内容
~~~
	document.getElementById(id).innerHTML=新的 HTML
	<!DOCTYPE html>
	<html>
	<body>
	<h1 id="header">Old Header</h1>
	<script>
	var element=document.getElementById("header");
	element.innerHTML="新标题";
	</script>
	</body>
    </html>
~~~
		上面的 HTML 文档含有 id="header" 的 <h1> 元素

		我们使用 HTML DOM 来获得 id="header" 的元素	

		JavaScript 更改此元素的内容 (innerHTML)



<font style="color:#ff1148"><h1>Uncaught TypeError: Cannot set property 'innerHTML' of null</h1></font>

<font style="color:#119048">这是我遇到的一个坑,把js加载放在了<<span>head</span>>标签里面,加载时,还没有加载出来要操作的那个
<br>标签,就已经开始加载js了,所以就会遇到这个报错,,解决方法也很简单,就需要把js的加载放在最后,比如说放在</<span>body</span>>标签上面</font>


<hr>

改变 HTML 样式

~~~
document.getElementById(id).style.property=新样式
~~~


~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>title</title>
</head>
<body>
 
<p id="p1">Hello World!</p>
<p id="p2">Hello World!</p>
<script>
document.getElementById("p2").style.color="blue";
document.getElementById("p2").style.fontFamily="Arial";
document.getElementById("p2").style.fontSize="larger";
</script>
<p>以上段落通过脚本修改。</p>
 
</body>
</html>
~~~


HTML DOM 允许我们通过触发事件来执行代码。

比如以下事件：
~~~
元素被点击。
页面加载完成。
输入框被修改。
......
~~~
当用户点击按钮时 改变了id="id1" 的 HTML 元素的样式，
~~~
<!DOCTYPE html>
<html>
<body>

<h1 id="id1">我的标题 1</h1>
<button type="button" 
onclick="document.getElementById('id1').style.color='red'">
点我!</button>

</body>
</html>
~~~

HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应

	如需在用户点击某个元素时执行代码，请向一个 HTML 事件属性添加 JavaScript 代码：onclick=JavaScript

HTML 事件的例子：
~~~
当用户点击鼠标时
当网页已加载时
当图像已加载时
当鼠标移动到元素上时
当输入字段被改变时
当提交 HTML 表单时
当用户触发按键时
~~~

向 button 元素分配 onclick 事件
~~~
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>title</title> 
</head>
<body>

<p>点击按钮执行 <em>displayDate()</em> 函数.</p>
<button onclick="displayDate()">点这里</button>
<script>
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
</script>
<p id="demo"></p>

</body>
</html>
~~~

onload 和 onunload 事件
onload 和 onunload 事件会在用户进入或离开页面时被触发。<br>

onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。<br>

onload 和 onunload 事件可用于处理 cookie。

~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>title</title>
</head>
<body onload="checkCookies()">

<script>
function checkCookies(){
	if (navigator.cookieEnabled==true){
		alert("Cookies 可用")
	}
	else{
		alert("Cookies 不可用")
	}
}
</script>
<p>弹窗-提示浏览器 cookie 是否可用。</p>
	
</body>
</html>
~~~

onchange 事件常结合对输入字段的验证来使用。

下面是一个如何使用 onchange 的例子。当用户改变输入字段的内容时，会调用 upperCase() 函数

~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>title</title>
</head>
<head>
<script>
function myFunction(){
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}
</script>
</head>
<body>

输入你的名字: <input type="text" id="fname" onchange="myFunction()">
<p>当你离开输入框后，函数将被触发，将小写字母转为大写字母。</p>

</body>
</html>
~~~


注:
~~~
    1.toLocaleUpperCase  :将字符串中所有的字母字符都将被转换为大写的，同时适应宿主环境的当前区域设置。
	2.toLocaleLowerCase  :将字符串所有的字母字符都被转换为小写，同时考虑到宿主环境的当前区域设置。
    3.toUpperCase:   将字符串中的所有字母都被转化为大写字母。
    4.toLowerCase    :将字符串中的字母被转换为小写字母。
~~~

	onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数

~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>title</title>
</head>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color:#D94A38;width:120px;height:20px;padding:40px;">Mouse Over Me</div>
<script>
function mOver(obj){
	obj.innerHTML="Thank You"
}
function mOut(obj){
	obj.innerHTML="Mouse Over Me"
}
</script>

</body>
</html>
~~~

<font style="color:#ff1148">onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。<br>
首先当点击鼠标按钮时，会触发 onmousedown 事件，<br>
当释放鼠标按钮时，会触发 onmouseup 事件，<br>
最后，当完成鼠标点击时，会触发 onclick 事件。</font>


~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>title</title>
</head>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color:#D94A38;width:120px;height:20px;padding:40px;">Mouse Over Me</div>
<script>
function mOver(obj){
	obj.innerHTML="Thank You"
}
function mOut(obj){
	obj.innerHTML="Mouse Over Me"
}
</script>

</body>
</html>
~~~

当用户输入时改变,输入框的颜色
~~~
<!DOCTYPE html>
<html>
<head>
<title>title</title>
</head>
<head>
<script>
function myFunction(x){
	x.style.background="red";
}
</script>
</head>
<body>

输入你的名字: <input type="text" onfocus="myFunction(this)">
<p>当输入框获取焦点时，修改背景色（background-color属性） 将被触发。</p>

</body>
</html>
~~~

当用户鼠标移动至文本上,改变文本字体颜色
~~~
<!DOCTYPE html>
<html>
<head>
<title>title</title>
</head>
<body>

<h1 onmouseover="style.color='red'"onmouseout="style.color='black'">将鼠标移至文部上</h1>

</body>
</html>
~~~

<font color="#348413">
addEventListener() 方法用于向指定元素添加事件句柄。

addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。

你可以向一个元素添加多个事件句柄。

你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。

你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。

addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。

当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。

你可以使用 removeEventListener() 方法来移除事件的监听。</font>

语法
~~~
element.addEventListener(event, function, useCapture);

第一个参数是事件的类型 (如 "click" 或 "mousedown").

第二个参数是事件触发后调用的函数。

第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
~~~


~~~
<!DOCTYPE html>
<html>
<head>
<title>title</title>
</head>
<body>

<p>该实例使用 addEventListener() 方法在按钮中添加点击事件。 </p>
<button id="myBtn">点我</button>
<script>
document.getElementById("myBtn").addEventListener("click", function(){
    alert("Hello World!");
});
</script>

</body>
</html>
~~~

向 Window 对象添加事件
~~~
<!DOCTYPE html>
<html>
<head>
<title>title</title></title>
</head>
<body>

<p>实例在 window 对象中使用 addEventListener() 方法。</p>
<p>尝试重置浏览器的窗口触发 "resize" 事件。</p>
<p id="demo"></p>
<script>
window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = Math.random();
});
</script>

</body>
</html>
~~~


当传递参数值时，使用"匿名函数"调用带参数的函数：


~~~
<!DOCTYPE html>
<html>
<head>
<title>title</title>
</head>
<body>

<p>实例演示了在使用 addEventListener() 方法时如何传递参数。</p>
<p>点击按钮执行计算。</p>
<button id="myBtn">点我</button>
<input id="num_x" type="number"/>
<input id="num_y" type="number"/>

<p id="demo"></p>
<script>
var p1 = document.getElementById("num_x");
var p2 = document.getElementById("num_y");
document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(p1.value, p2.value);
});
function myFunction(a, b) {
    var result = parseInt(a) * parseInt(b);
    document.getElementById("demo").innerHTML = result;

}
</script>

</body>
</html>
~~~




<font style="color:#ff1148"><h1>事件冒泡或事件捕获？</h1>

事件传递有两种方式：冒泡与捕获。

事件传递定义了元素事件触发的顺序。 如果你将 p元素插入到 div元素中，用户点击 p 元素, 哪个元素的 "click" 事件先被触发呢？

在 冒泡 中，内部元素的事件会先被触发，然后再触发外部元素，即： p 元素的点击事件先触发，然后会触发 div 元素的点击事件。

在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： div 元素的点击事件先触发 ，然后再触发 p 元素的点击事件。

addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：

addEventListener(event, function, useCapture);
默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。</font>
<hr>



~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>title</title>
<style>
div {
    background-color: #114848;
	
}
</style>
</head>
<body>

<p>实例演示了在添加不同事件监听时，冒泡与捕获的不同。</p>
<div id="myDiv">
	<p id="myP">点击段落，我是冒泡。</p>
</div><br>
<div id="myDiv2">
	<p id="myP2">点击段落，我是捕获。 </p>
</div>
<script>
document.getElementById("myP").addEventListener("click", function() {
    alert("你点击了 P 元素!");
}, false);
document.getElementById("myDiv").addEventListener("click", function() {
    alert(" 你点击了 DIV 元素 !");
}, false);
document.getElementById("myP2").addEventListener("click", function() {
    alert("你点击了 P2 元素!");
}, true);
document.getElementById("myDiv2").addEventListener("click", function() {
    alert("你点击了 DIV2 元素 !");
}, true);
</script>
</body>
</html>
~~~

创建新的 HTML 元素 (节点) - appendChild()

<hr>

~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>title</title>
</head>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
</script>

</body>
</html>
~~~

以下代码是用于创建 p元素:

	var para = document.createElement("p");

为 p 元素创建一个新的文本节点：

	var node = document.createTextNode("这是一个新的段落。");

将文本节点添加到 p元素中：

	para.appendChild(node);

最后，在一个已存在的元素中添加 p 元素。查找已存在的元素：

	var element = document.getElementById("div1");

添加到已存在的元素中:

	element.appendChild(para);

以上我们使用了 appendChild() 方法，它用于添加新元素到尾部。
如果我们需要将新元素添加到开始位置，可以使用 insertBefore() 方法:

~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>
​
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);
 
var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);
</script>
​
</body>
</html>
~~~


<h4>要移除一个元素，你需要知道该元素的父元素。</h4>
在通过	parent.child	来移除该元素

~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
</script>

</body>
</html>
~~~
<hr>
替换HTML文本内容<br>
	用 replaceChild() 方法来替换 HTML DOM 中的元素。

~~~
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);
 
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>

</body>
</html>
~~~



getElementsByTagName() 方法返回 HTMLCollection 对象。

HTMLCollection 对象类似包含 HTML 元素的一个数组。


~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<h2>JavaScript HTML DOM</h2>

<p>Hello World!</p>

<p>Hello Runoob!</p>

<p id="demo"></p>

<script>
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "第二个段落的内容为:<span style='color:red;'> " + myCollection[1].innerHTML + '</span>';
</script>

</body>
</html>
~~~

集合中的元素可以通过索引(以 0 为起始位置)来访问。<br>
访问第一个 p 元素可以是以下代码:
myCollection[0].innerHTML

<hr>

HTMLCollection 对象的 length 属性定义了集合中元素的数量
~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<h2>JavaScript HTML DOM</h2>

<p>Hello World!</p>

<p>Hello Runoob!</p>

<p id="demo"></p>

<script>
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "文档包含" + myCollection.length + " 个段落。";
</script>

</body>
</html>
~~~
<hr>

集合 length 属性常用于遍历集合中的元素。
~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<h2>JavaScript HTML DOM</h2>

<p>Hello World!</p>

<p>Hello Runoob!</p>

<p>点击按钮修改 p 元素的背景颜色。</p>

<button onclick="myFunction()">点我</button>

<script>
function myFunction() {
    var myCollection = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = "red";
    }
}
</script>

</body>
</html>
~~~
<hr>

<font style="color:#ff1148">
<h1>注意:</h1>
HTMLCollection 不是一个数组！

HTMLCollection 看起来可能是一个数组，但其实不是。

你可以像数组一样，使用索引来获取元素。

HTMLCollection 无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。
</font><hr>

<h1>JavaScript HTML DOM 节点列表</h1>
NodeList 对象是一个从文档中获取的节点列表 (集合) 。

NodeList 对象类似 HTMLCollection 对象。

一些旧版本浏览器中的方法（如：getElementsByClassName()）返回的是 NodeList 对象，而不是 HTMLCollection 对象。

所有浏览器的 childNodes 属性返回的是 NodeList 对象。

大部分浏览器的 querySelectorAll() 返回 NodeList 对象。<hr><br>


代码示例:选取了文档中所有的 p 节点
~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<h2>JavaScript HTML DOM!</h2>

<p>Hello World!</p>

<p>Hello Runoob!</p>

<p id="demo"></p>

<script>
var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = "第二个段落的内容为:<span style='color:red;'> " + myNodelist[1].innerHTML + '</span>';
</script>

</body>
</html>
~~~



NodeList 对象 length 属性定义了节点列表中元素的数量
~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<h2>JavaScript HTML DOM!</h2>

<p>Hello World!</p>

<p>Hello Runoob!</p>

<p id="demo"></p>

<script>
var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = "文档包含 " + myNodelist.length + " 个段落。";
</script>

</body>
</html>
~~~



length 属性常用于遍历节点列表。

~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<h2>JavaScript HTML DOM!</h2>

<p>Hello World!</p>

<p>Hello Runoob!</p>

<p>点击按钮修改所有 p 元素的背景颜色。</p>

<button onclick="myFunction()">点我</button>

<script>
function myFunction() {
    var myNodelist = document.querySelectorAll("p");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.color = "red";
    }
}
</script>

</body>
</html>
~~~
<hr>



<font style="color:#ff1148">
<h1>HTMLCollection 与 NodeList 的区别</h1>

HTMLCollection 是 HTML 元素的集合。

NodeList 是一个文档节点的集合。

NodeList 与 HTMLCollection 有很多类似的地方。

NodeList 与 HTMLCollection 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ...) 来获取元素。

NodeList 与 HTMLCollection 都有 length 属性。

HTMLCollection 元素可以通过 name，id 或索引来获取。

NodeList 只能通过索引来获取。

只有 NodeList 对象有包含属性节点和文本节点。</font>
<hr>


<h1>节点列表不是一个数组！</h1>

<em>节点列表看起来可能是一个数组，但其实不是。

你可以像数组一样，使用索引来获取元素。

节点列表无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。</em>

<hr>
<h1>Personal Note:</h1>

	pcoll=document.querySelectorAll("p")

	plist=document.getElementsByTagName("p")

以上 pcoll 返回的就是固定的值。
<br>
而获取 plist 后, 若 html 页面有变化且刚好添加或移除了 p 标签, 此时plist也会跟着变。


<h1>JavaScript 对象</h1>
JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...<br>

此外，JavaScript 允许自定义对象。<br>
布尔型可以是一个对象。<br>
数字型可以是一个对象。<br>
字符串也可以是一个对象<br>
日期是一个对象<br>
数学和正则表达式也是对象<br>
数组是一个对象<br>
甚至函数也可以是对象<br>


JavaScript 
对象只是一种特殊的数据。对象拥有属性和方法。

<h1>访问对象的属性</h1>
属性是与对象相关的值。访问对象属性的语法是：

	objectName.propertyName
<hr>
这个例子使用了 String 对象的 length 属性来获得字符串的长度：
	
	var message="Hello World!";
	var x=message.length;
	在以上代码执行后，x 的值将是：
	12
<hr>
<h1>访问对象的方法</h1>

方法是能够在对象上执行的动作。可以通过以下语法来调用方法：

	objectName.methodName()
	
这个例子使用了 String 对象的 toUpperCase() 方法来将文本转换为大写：

	var message="Hello world!";
	var x=message.toUpperCase();
		在以上代码执行后，x 的值将是：
	HELLO WORLD!

创建 JavaScript 对象
通过 JavaScript，能够定义并创建自己的对象。

创建新对象有两种不同的方法：

	1.定义并创建对象的实例
	2.使用函数来定义对象，然后创建新的对象实例



创建对象的一个实例，并向其添加了四个属性：

~~~
------------------------------------------------------------------------
	使用函数来定义对象，然后创建新的对象实例
------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<script>
var person=new Object();
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue"; 
document.write(person.firstname + " is " + person.age + " years old.");
</script>

</body>
</html>
------------------------------------------------------------------------
	定义并创建对象的实例
------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>

<script>
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"}
document.write(person.firstname + " is " + person.age + " years old.");
</script>

</body>
</html>
~~~


~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>titlr</title>
</head>
<body>
<script>
function person(firstname,lastname,age,eyecolor){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
    this.changeName=changeName;
	function changeName(name){
		this.lastname=name;
	}
}
myMother=new person("Sally","Rally",48,"green");
myMother.changeName("Doe");
document.write(myMother.lastname);
</script>

~~~

<h1>JavaScript 类</h1>
JavaScript 是面向对象的语言，但 JavaScript 不使用类。

在 JavaScript 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。

JavaScript 基于 prototype，而不是基于类的。


















































































