/** JS로 HTML의 요소들 변경하기 
 *  document => JS에서 HTML에 접근 가능하게 해줌
 *  HTML document를 object 타입으로 보여준다
 * 
*/

// document 문서 전체
console.log(document);

// document의 body 부분만
console.log(document.body);

// document의 title 가져와서 변경하기
document.title = "브라우저 창 제목 바꿔보기";


// document의 특정 요소 가져오기
// 대부분의 경우 querySelector와 getElementsById 사용

// getElementById
// HTML 요소에 id를 추가해서 id 값으로 가져오는 방법
// <title id="title">This is JS Practice</title>
let title = document.getElementById("title");
console.log(title);


// title에 직접 String으로 넣어서 바꿀 수 X
// ex) title = "getElementById 로 브라우저 창 이름 바꾸기";
// 왜냐하면 getElementById로 가져온 title 자체는 title에 대한 정보가 담긴 object이기 때문
console.dir(title);

// title 이름 String은 title.innerHTML에 들어있다
title.innerHTML = "getElementById 로 브라우저 창 이름 바꾸기"

// getElementById - id로 가져오기
// <h1 id="first">This is h1 1!</h1>
console.log(document.getElementById("first"));

// getElementsByClassName - class로 가져오기
// <h1 class="second">This is h1 2!</h1>
// 동일한 이름의 class가 있으면 전부 다 Array로 리턴
// (하나여도 Array 리턴)
console.log(document.getElementsByClassName("second"));

// getElementsByTagName - HTML tag로 가져오기
// <h1>...</h1>
// 모든 tag Array로 리턴
// (하나여도 Array 리턴)
console.log(document.getElementsByTagName("h1"));

// querySelector - CSS를 찾을 때 처럼 가져오기
// 앞에 아무것도 없으면 태그, .이 붙으면 class, #이 붙으면 id
// 동일한 요소가 여러개 있으면 첫번째 요소만 리턴
// 선택한 요소의 하위 요소에도 접근 가능
/*
    <div class="third">
        <h1>This is h1 4!</h1>
        ...
    </div>
*/
console.log(document.querySelector(".third h1"));

console.log(document.querySelector(".third h1:nth-child(2)"));

// querySelectorAll - querySelector와 동일
// but 동일한 요소가 여러개 있으면 전부 가져와서 Array로 리턴
/*

    <div class="third">
        <h1>This is h1 4!</h1>
        <h1>This is h1 5!</h1>
    </div>
*/
console.log(document.querySelectorAll(".third h1"));