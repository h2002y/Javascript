/**
 * Functions
 * 여러번 호출이 가능하다
 * 중복 코드를 제거함으로써 코드를 간결하게 해준다
 * 
 * 호출시 괄호() 안에 parameter를 넣어서 function에 값을 전달할 수 있다
 * function에서는 괄호() 안에 arguments로 변수값을 전달받을 수 있다
 * function 안에서 return을 사용해서 값을 다시 반환할 수 있다
 * 함수 정의: function 함수이름(arguments){실행코드}
 * 함수 호출: 함수이름(parameter);
 * 
 * 파라미터는 여러개를 전달할 수 있다
 * 하지만 파라미터를 받는 함수에 파라미터를 넘기지 않으면 
 * 함수 안의 파라미터 값은 undefined가 된다
 * 파라미터가 함수에 넘겨지는 순서는 함수 호출 시 입력 순서대로다
 * ex) minus(a, b); => a - b
 *     minus(b, a); => b - a
 * 
 * 함수의 파라미터 변수는 함수 안에서만 사용 가능하다
 * 
 * 객체의 속성값으로 함수를 주는 것도 가능하다
 * 객체의 속성 함수 안에서 객체 자신의 다른 속성값도 사용할 수 있다
 * 속성 함수여도 파라미터를 통해서 외부 변수값을 가져올 수 있다
 */

//console.log("Hello PPanyana!");
//consolse.log("Hello Banana!");
//consolse.log("Hello Apple!");
//consolse.log("Hello Samsung!");
//consolse.log("Hello World!"); => 중복되는 코드

function sayHello(name){
    console.log("Hello " + name +"!");
}

sayHello("PPanyana"); // Hello PPanyana!
sayHello("Banana"); // Hello Banana!
sayHello("Apple"); // Hello Apple!
sayHello("Samsung"); // Hello Samsung!
sayHello("World");// Hello World!

//객체의 속성값으로 function(){}도 가능하다
const player = {
    name:"PPanyana",
    sayHi: function(){
        console.log("Hi!");
    },
    sayWelcome: function(){ // 객체의 다른 속성 사용
        console.log("Welcome " + player.name + "!");
    },
    sayBye: function(otherName){ // 파라미터를 통해 외부 변수값 사용
        console.log("Bye, " + otherName + "!");
    },
}

player.sayHi(); // Hi!
player.sayWelcome(); // Welcome PPanyana!
player.sayBye("Banana"); // Bye, Banana!

const calculator = { // 파라미터 값으로 동작을 수행하고 다시 데이터를 리턴
    plus: function (a,b){
        return a + b;
    },
    minus: function (a,b){
        return a - b;
    },
    times: function (a,b){
        return a * b;
    },
    divide: function(a,b){
        return a / b;
    },
    power: function(a,b){
        return a ** b;
    }
}

let result;
result = calculator.plus(4, 2); // 6
console.log(result);
result = calculator.minus(4, 2); // 2
console.log(result);
result = calculator.times(4, 2); // 8
console.log(result);
result = calculator.divide(4, 2); // 2
console.log(result);
result = calculator.power(4, 2); // 16
console.log(result);