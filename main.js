//1. 랜덤번호 지정
//2. 유저의 번호 입력 -> go라는 버튼을 누름
//3. 맞추면 -> 맞췄습니다
//4. 틀리면 -> 랜덤번호 < 입력값 down  /  랜덤번호 > 입력값 up
//5. reset 누르면 게임리셋
//6. 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측불가, 버튼이 disable)
//7. 유저가 1~100 범위 밖에 숫자를 입력하면, 기회를 깍지 않는다.
//8. 유저가 이미 입력한 숫자를 또 입력하면 알려준다, 기회를 깍지 않는다.

let computerNum = 0;
let playBtn = document.getElementById("play-btn");
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")

playBtn.addEventListener("click", play);

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;
    
    if (userValue < computerNum){
        resultArea.textContent = "UP!!!";
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!!";
    }else{
        resultArea.textContent = "맞췄습니다!!!";
    }
}

pickRandomNum();
