// 字符串转数字
// var a="12px";
// b=parseFloat(a)+1;
// alert(a);
// alert(b);
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var a = 1;
// var b = "10"
// alert(a+b);
// alert(b-a);

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// window.onload=function(){
//     var txt1=document.getElementById("text1");
//     var txt2=document.getElementById("text2");
//     var btn=document.getElementById("button");
//     btn.onclick=function(){
//         alert(parseFloat(txt1.value)+parseFloat(txt2.value))
//     };
// };
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var today = [12, 354, 56, 67, 2, 456, 76, 23]
// for (var num_x = 1;num_x < today.length - 1;num_x++) {
//     if (today[0] < today[num_x]) {
//         var temp = today[num_x]
//         today[num_x] = today[0]
//         today[0] = temp
//         // alert(temp)
//      }alert("目前最大数: "+today[0])
//     }
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     var today = [12, 354, 56, 67, 2, 456, 76, 23]
// for (var num_x = 1;num_x < today.length - 1;num_x++) {
//     first=today[0];
//     if (first < today[num_x]) {
//         var temp = today[num_x]
//         today[num_x] = first
//         first = temp
//         // alert(temp)
//      }alert("目前最大数: "+first)
//     }

// 上面两个例子中,我只是把  first=today[0],函数就不能正常显示了?啥原理,求教!
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var thisday = [28, 12, 89, 73];
// thisday.push(23)//尾部添加
// alert(thisday)
// thisday.unshift("12e")//头部添加
// alert(thisday)
// thisday.pop();//尾部弹出
// alert(thisday)
// thisday.splice(0,2,23)//从数组第0个开始删,一直删两个元素,并在头部添加"23"这个元素
// alert(thisday)
// thisday.splice(1,0,"23r")//从数组第一个元素开始插入(也就是一个元素都不删,直接插入)
// alert(thisday)

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var itisday = [28, 38, 12, 89, 73];
// var dest= [23,345,56,134,5,2,7,3,345,85]
// alert(itisday.concat(dest))
// alert(itisday.join("~~~"))
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var free= [28, 38, 12, 89, 73];
// alert(free.sort());//系统自带排序
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// document.getElementById("css").innerHTML=" It is so great a day"//对应html13行
// document.getElementById("css").style.color="red";//对应html 13行
// document.getElementById("css").style.fontSize="12px";//对应html 13行
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function changered(){
    document.getElementById('css').style.color='red'
}
function changeblack(){
    document.getElementById("css").style.color="black"
}   
function thiss(){
    document.getElementById('css').style.color='#1148ff'
}
function theOne(){
    document.getElementById('css').style.color='#9899ff'
}
//对应html 14/15
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function checkCookie(){
    // if (navigator.cookieEnabled==true){
	// 	alert("Cookies 可用")
	// }
	// else{
	// 	alert("Cookies 不可用")
	// }
}
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function charUpper(){
    var char =document.getElementById("charUpper");
    char.value=char.value.toUpperCase()
    // 1.toLocaleUpperCase  :将字符串中所有的字母字符都将被转换为大写的，同时适应宿主环境的当前区域设置。
    // 2.toUpperCase:   将字符串中的所有字母都被转化为大写字母。
    // 3.toLocaleLowerCase  :将字符串所有的字母字符都被转换为小写，同时考虑到宿主环境的当前区域设置。
    // 4.toLowerCase    :将字符串中的字母被转换为小写字母。
    //这四个常用函数都是用来转换大小写的
}
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function myFunction(x){
	x.style.background="#119048";
}
function alertw(){
    alert("worning !")
}
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = Math.random();
});
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function removeresize(){
//     window.removeEventListener("resize",function(){
//         document.getElementById("demo").innerHTML = Math.random();
//     })
// } //还没有搞明白咋用,日后慢慢琢磨
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById("myBtn").addEventListener("click", function(){
    alert("Hello JavaScript !");
});
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var p1 = document.getElementById("num_x");
var p2 = document.getElementById("num_y");
document.getElementById("myButn").addEventListener("click", function() {
    myFunction(p1.value, p2.value);
});
function myFunction(a, b) {
    var result = parseInt(a) * parseInt(b);
    document.getElementById("deo").innerHTML = result;
}
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

document.write("<li>12345678901234567890</li>");


var wuShortLeg = document.getElementById("daa");//获取父节点id(不建议使用标签名称,因为实际开发中同名的标签太多,建议用id)
var li = document.createElement("li");  //创建一个li标签
li.innerHTML = "123";   //给li标签赋值
wuShortLeg.appendChild(li); //向HTML中写入生成的<li>标签





















































































































