/** Javascript Variables 
 * JS에서는 데이터 타입을 명시할 때 직접적으로 구분하지 않고
 * 상수 const와 변수 let으로만 구분
 * but 정수, 실수, 문자열, boolean을 아예 구분 못하는 것은 아님
 * Javascript에서 모든 숫자는 double 타입으로 저장한다(int도 사실은 double)
 * undefined와 null도 타입이다
 * null은 절대로 자연발생하지 않는다
 * null은 값이 비어있음(의도적), undefined는 값이 주어지지 않음(의도적X)
*/

const a1 = 5; // => number - double, 상수, 초기화 후 값 변경 불가
const b = 2.25; // => number - double
const c = "문자열도 가능"; // => string
const d = 'A'; // => character
const e = true; // => boolean
const f = null; // => undefined
let g; // => undefined, 메모리는 존재하지만 값이 안정해짐

let a2 = 5; // 변수, 자유롭게 값 변경 가능

//a1 = 3; => Console 창에서 에러 발생
//Uncaught TypeError: Assignment to constant variable.

a2 = 6; // 변수는 에러 X

console.log(a1); // 5출력
console.log(a2); // 6출력



/** Javascript Naming Rules
 *  Javascript는 camelCase를 사용한다.
 * 첫 단어 첫 글자는 소문자, 그 뒤 단어 첫 글자마다 대문자
 */

const thisIsCamelCase = "카멜케이스!";



/**
 * Arrays 
 * 가장 기본적인 데이터 구조
 * 배열 안의 요소들은 배열이름[index숫자] 로 접근할 수 있다
 * 배열의 인덱스는 0부터 시작한다
 * Javascript 배열은 동일한 데이터타입이 아니어도 된다
 * 또한 다른 언어의 배열과는 다르게 요소 추가/삭제가 가능하다
 */

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fir = "fir";
const sat = "sat";
const sun = "sun"; // => 각각 따로 변수로 만들면 데이터 관리가 힘들다

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sum"];
// => 배열로 만들면 데이터 접근이 쉬워진다.

console.log(daysOfWeek[3]); // => thu 출력
//    배열은 숫자 index로 해당 순번 요소에 접근할 수 있다
//    (대신 0부터 시작)

// JS 배열은 push / pop 을 사용해서 배열 끝에 요소를 추가/삭제 가능하다
daysOfWeek.push("MysteryDay"); // 맨뒤에 요소 추가
console.log(daysOfWeek); // 배열 출력, ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sum', 'MysteryDay']

daysOfWeek.pop(); // 맨뒤에 요소 삭제
console.log(daysOfWeek); // ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sum']

const array = ["Hello", true, 5, false, null, undefined, "World", '!'];
// => JS의 배열은 다양한 데이터 타입을 담을 수 있다
//    (C++이나 Java에서는 동일한 데이터 타입만 가능)



/**
 * Objects
 * 다양한 형태의 데이터 타입/변수를 관리하기 쉽게 하나로 묶는 것
 * {} 와 property를 사용한다
 * property를 구분할 떄 쉼표(,)를 사용한다
 * 
 * 배열 대신 객체를 쓰는 이유
 * 배열은 안에 담긴 데이터들이 무엇을 의미하는 지 알 수 없다
 * 객체는 property 이름으로 이게 무엇에 대한 데이터인지 알 수 있다
 * 
 * Objects의 property를 접근할때는 마침표(.)를 사용한다
 * ex) 객체이름.속성
 * 또는 property 이름을 배열 형식으로 넣어서도 접근이 가능하다
 * 대신 property 이름을 따옴표("")로 감싸줘야 한다
 * ex) 객체이름["속성이름"]
 * 
 * property value는 자유롭게 바꿀 수 있다
 * Object를 const로 선언해도 Object 안 속성값을 바꿀 수 있다
 * const Object 전체 재정의만 불가능하고 안의 값들을 바꾸는 건 가능
 * 
 * 기존 Object에 새로운 property를 추가할 수 있다
 */

const player = {
    name: "PPanyana",
    points: 10,
    happy: true,
};

console.log(player.name); // PPanyana
console.log(player.points); // 10
console.log(player.happy); // true

console.log(player); // {name: 'PPanyana', points: 10, happy: true}

console.log(player["name"]); // PPanyana
console.log(player["points"]);
console.log(player["happy"]);

player.lastname = "Banana"; // 새로운 property 와 value 추가
console.log(player.lastname); // Banana
player.points += 100; // propery value 변경
console.log(player); // {name: 'PPanyana', points: 110, happy: true, lastname: 'Banana'}