/**
 * JS가 직접 CSS를 변경하는 대신 class로 간접 변경하기
 * class 이름 등을 직접 사용 X, 상수로 만들어서 불변 & 오타가 나도 찾기 쉽게
 * h1.className === "clicked" => const clickedClass = "clicked";
 */

const h1 = document.querySelector("div.hello:first-child h1");

// 1번째 방법 - class가 clicked/없음 상태로 변경
// class가 오직 하나여야 하기 때문에 좋은 방법

// function handleTitleClick(){
//     const clickedClass = "clicked";
//     h1.className === clickedClass ? h1.className = "" : h1.className = clickedClass;
// }


// 2번째 방법 - class를 추가 및 삭제하는 방법
// classList의 contains, remove, add 활용

// function handleTitleClick(){
//     const clickedClass = "clicked";
//     h1.classList.contains(clickedClass) ? h1.classList.remove(clickedClass) : h1.classList.add(clickedClass);
// }


// 3번째 방법 - 코드 개선
// toggle 사용하기
// toggle => 인자로 들어온 String 값의 class 이름이 해당 요소에 이미 있는지 확인
// 있다면 해당 class 제거 / 없다면 해당 class 추가
function handleTitleClick() {
    const clickedClass = "clicked";
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);