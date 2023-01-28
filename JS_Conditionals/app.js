/***
 * Conditionals(조건문)
 * if(){} 또는 switch(){ case 1: case 2: ...}
 * Condition은 true or false만 가능하다
 * 
 * if(조건식 => return true or false){실행 코드}
 * else if(조건식) {실행 코드}
 * else {실행 코드}
 * if 다음 else if와 else로 추가로 다른 조건을 넣는 것도 가능
 * 
 * 비교연산자
 * == equals
 * || or => 조건문 중 하나라도 true일때 동작
 * && and => 조건문 모두 true일때 동작
 * !(조건문) not 조건문일떄 동작
 * != not equals 값이 같지 않을때 동작
 * === equals(including type)
 * !== not equals(including type)
 * 
 * Javacript의 경우 === equals 도 존재한다
 * ==는 서로 비교하는 변수의 타입에 상관없이 값이 같으면 true
 * ex) 11 == "11"
 * ===는 변수 타입도 동일하면서 값이 같으면 true
 * Javascript는 변수의 타입 구분을 다른 언어처럼 엄격하게 구분하지 않기 때문에
 * 가급적이면 === 를 사용한다
 * 동일 타입에서 같지않음을 비교하려면 !==
 */

console.log(11 == "11") // true
console.log(11 === "11") // false

const age1 = "Its confidential";
const age2 = "18";
const age3 = 24;

console.log(parseInt(age1)); // NaN
console.log(parseInt(age2)); // 18
// 문자열안에 숫자가 있으면 숫자로 변환해서 리턴

function ageValidator(age){
    if(isNaN(age)) console.log("ERROR: This is not a number");
    else if(age > 20) console.log("WOW " + age + "! you can drink!")
    else console.log(age);
} // isNaN() 숫자면 true 숫자가 아니면 false
//   하지만 숫자로만 이루어진 문자열도 true를 리턴함

ageValidator(age1); // ERROR: This is not a number
ageValidator(age2); // 18
ageValidator(age3); // WOW 24! you can drink!