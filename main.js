let target = document.querySelector("#dynamic");

// 랜덤 문구 고르기
function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split(""); // split : 해당 문자열 기준으로 내누어 배열시키기

    return selectStringArr;
}

// 문구 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr){

    if(randomArr.length > 0){
        target.textContent += randomArr.shift(); // shift() : 배열의 앞부터 빼기
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

// 커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);
