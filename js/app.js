const toggleBtn = document.querySelector(".navbar_toggleBtn")
const menu = document.querySelector(".navbar_menu")

toggleBtn.addEventListener("click", () => {
    // 클래스가 존재한다면 클래스를 제거하고, 클래스가 없다면 클래스를 추가하는 전등 스위치 같은 역할 수행
    menu.classList.toggle('active');
    submenu.classList.toggle('active');
});

// 검색결과 dom 에 뿌려주기

const btn = document.querySelector(".btn");
const result = document.querySelector(".detail");
const vaild = document.getElementById("Search");


btn.addEventListener("click", () =>{
    if(vaild.value == ""){
        alert("검색어를 입력해주세요!");
        vaild.focus();
    }else{
        result.innerHTML += "<h1 onclick='popup()'>장학금 정보</h1>";
    }
});

function popup() {
    window.open("Scholarshipinfo.html", "장학금 정보", "width=800, height=800, left=100, top=50");
}

    