/*eslint-env node*/

//Please compelet following tests in 60mins

//1.Please write a function to reverse a string by word

function reverse(str){
    //TODO
    var arr = str.split(' ');
    return arr.reverse().join(' ');
}

reverse('hello antfin group'); // return 'group antfin hello'


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