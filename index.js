let randomNumber1 = Math.floor(Math.random() * 6) + 1;

function changeImage1() {
    if (randomNumber1 == 1){
        document.getElementsByClassName("img1")[0].src = "dice1.png";
    } else if(randomNumber1 == 2){
        document.getElementsByClassName("img1")[0].src = "dice2.png";
    } else if(randomNumber1 == 3){
        document.getElementsByClassName("img1")[0].src = "dice3.png";
    } else if(randomNumber1 == 4){
        document.getElementsByClassName("img1")[0].src = "dice4.png";
    } else if(randomNumber1 == 5){
        document.getElementsByClassName("img1")[0].src = "dice5.png";
    } else {
        document.getElementsByClassName("img1")[0].src = "dice6.png";
    }
}

changeImage1();

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

function changeImage2() {
    if (randomNumber2 == 1){
        document.getElementsByClassName("img2")[0].src = "dice1.png";
    } else if(randomNumber2 == 2){
        document.getElementsByClassName("img2")[0].src = "dice2.png";
    } else if(randomNumber2 == 3){
        document.getElementsByClassName("img2")[0].src = "dice3.png";
    } else if(randomNumber2 == 4){
        document.getElementsByClassName("img2")[0].src = "dice4.png";
    } else if(randomNumber2 == 5){
        document.getElementsByClassName("img2")[0].src = "dice5.png";
    } else {
        document.getElementsByClassName("img2")[0].src = "dice6.png";
    }
}

changeImage2();


function winner(){
    if(randomNumber1 > randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML =" 🚩 Player 1 wins";
    } else if(randomNumber1 < randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML =" 🚩 Player 2 wins";
    } else{
        document.getElementsByTagName("h1")[0].innerHTML ="Draw!"
    }
}
winner();
