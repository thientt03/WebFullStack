// console.log('Xin chào');

// const constVar = "Hello";

// // constVar = 10; bien co dinh k thay doi gia tri

// let letVar = "123456";
// var varVar = "235346";

// letVar = 100;
// varVar = true;

// console.log(letVar, varVar);

// var undefinedVar = null;
// console.log(typeof(undefinedVar));

// var obj = {
//     key: 100,
//     key2:"afsdfsdf",
//     obj2:{
//         nested: "hello",
//     }
// };

// console.log(obj.key);
// console.log(obj["key2"]);

// obj.key3 = "jhjhj"
// console.log(obj);

// delete obj.key2;
// console.log(obj);

// var arr = [0,"item",true, null];
// arr[1];
// console.log(arr);

// arr.push(100);
// console.log(arr);
// console.log(arr.length);

// // vong lap for
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
    
// }

// function funcName(paramA, paramB) {
//     console.log(paramA,paramB);
// }

// funcName(1, 2);

// const variable = function() {}

// const arrFunc = () => {}

// console.log("HASJHASFKJ".replace("HA","GH"));
// console.log((12345.123134).toFixed(2));

// const now = new Date();
// console.log(now.toLocaleString("us"));

// console.log(new RegExp("([A-Z])\w+").test("Klsadkla"));

// var a = 10
// function funcA() {
//     var b = 15;

//     console.log(a);
//     console.log(b);
// }
// funcA();

// if(true){
//     var c = 15
// }

// console.log(a);
// console.log(c);
// // console.log(b);

function print(i, countTime){
    setTimeout(function(){
        console.log(i); 
    },countTime*1000);
}
function countDown(countNum) {
    var i; // -1
    for (var i = countNum; i >= 0; i--) {
        print(i, countNum - i)
    }
    
}

countDown(5)