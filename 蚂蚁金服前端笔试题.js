/*eslint-env node*/

//Please compelet following tests in 60mins

//1.Please write a function to reverse a string by word

function reverse(str){
    //TODO
    var arr = str.split(' ');
    return arr.reverse().join(' ');
}

reverse('hello antfin group'); // return 'group antfin hello'

//第一道题很ez 因为之前一直在codewars上做算法练习，这种直接把字符串用空格分开拆分成数组再翻转 再拼接return出来就ok

//2. Please write a add function,

function add(num){
    //TODO
    var num1 = num;
    return function(num){
        var num2 = num;
        return num1+num2
    }
}
console.log(add(2)(3)); //print 5 
// 这道题花了我快一个小时，一开始看见add(2)(3),还以为是不定参数 后来才反应过来应该是闭包 ，而闭包学的不太好，看了看文献才改出来。以后估计就没什么问题了