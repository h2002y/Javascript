/**
 * JS로 HTML 요소 특정 동작 시 이벤트 발생시키기
 * 1. 요소 찾기
 * 2. event listen 하기
 * 3. event react 하기
 */
const clicker1 = document.querySelector(".hello");
const clicker2 = document.querySelector(".world");

function handleTitleClick(){
    console.dir(clicker1);
    console.log("I was Clicked!");
    clicker1.style.color === "salmon" ? clicker1.style.color = "black" : clicker1.style.color = "salmon";
}

function HandleMouseEnter(){
    clicker1.innerText = "Mouse is here!";
}

function HandleMouseLeave(){
    clicker1.innerText = "Mouse is not here!";
}

// 이벤트 할당 첫번째 방법, 권장(removeEventListener로 이벤트를 제거할 수 있기 때문)
clicker1.addEventListener("click", handleTitleClick);
clicker1.addEventListener("mouseenter", HandleMouseEnter);
clicker1.addEventListener("mouseleave", HandleMouseLeave);

// 이벤트 할당 두번째 방법
clicker2.onclick = handleTitleClick;
clicker2.onmouseenter = HandleMouseEnter;
clicker2.addEventListener("mouseleave", HandleMouseLeave);
