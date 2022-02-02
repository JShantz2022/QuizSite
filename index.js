function questionOne(){
    var firstQuestion = ["The five rings of the Olympic flag are interlocking.",
    "Mount Kilimanjaro is the tallest mountain in the world.", "The plural of moose is moosen.",
    "Computer programming is part of computer science."]
    var response = document.getElementById("answer1");
    var txtScore = document.getElementById("score");
    var score = parseFloat(txtScore.innerText[21]);
    var congrats = document.getElementById("congratulations");

    if(Number.isNaN(score)){
        score = 0;
    }

    var questionNumber = Math.floor(Math.random()*firstQuestion.length);

    var answer = confirm(firstQuestion[questionNumber])

    switch (answer) {
        case true:
            switch (questionNumber) {
                case 0:
                    if(response.innerHTML != "Correct"){
                        score++;
                    }
                    response.innerHTML = "Correct";
                    response.style.color = "green";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    if(score == 5){
                        congrats.innerHTML= "Congratulations!! You got every question right."
                    }
                    break;
                case 1:
                    if(score != 0 && response.innerHTML == "Correct"){
                        score--;
                    }
                    response.innerHTML = "Incorrect";
                    response.style.color = "red";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    break;
                case 2:
                    if(score != 0 && response.innerHTML == "Correct"){
                        score--;
                    }
                    response.innerHTML = "Incorrect";
                    response.style.color = "red";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    break;
                case 3:
                    if(response.innerHTML != "Correct"){
                        score++;
                    }
                    response.innerHTML = "Correct";
                    response.style.color = "green";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    if(score == 5){
                        congrats.innerHTML= "Congratulations!! You got every question right."
                    }
                    break;
                default:
                    break;
            }
            break;
    
        default:
            switch (questionNumber) {
                case 0:
                    if(score != 0 && response.innerHTML == "Correct"){
                        score--;
                    }
                    response.innerHTML = "Incorrect";
                    response.style.color = "red";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    break;
                case 1:
                    if(response.innerHTML != "Correct"){
                        score++;
                    }
                    response.innerHTML = "Correct";
                    response.style.color = "green";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    if(score == 5){
                        congrats.innerHTML= "Congratulations!! You got every question right."
                    }
                    break;
                case 2:
                    if(response.innerHTML != "Correct"){
                        score++;
                    }
                    response.innerHTML = "Correct";
                    response.style.color = "green";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    if(score == 5){
                        congrats.innerHTML= "Congratulations!! You got every question right."
                    }
                    break;
                case 3:
                    if(score != 0 && response.innerHTML == "Correct"){
                        score--;
                    }
                    response.innerHTML = "Incorrect";
                    response.style.color = "red";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    break;
                default:
                    break;
            }
            break;
    }
}  

function questionTwo(){
    var secondQuestion = ["What animal meows?", "What does the cow say?", "What is red, an apple or a banana?",
    "Give me food, and I will live. Give me water, and I will die. What am I?"]
    var response = document.getElementById("answer2");
    var txtScore = document.getElementById("score");
    var score = parseFloat(txtScore.innerText[21]);
    var congrats = document.getElementById("congratulations");

    if(Number.isNaN(score)){
        score = 0;
    }

    var questionNumber = Math.floor(Math.random()*secondQuestion.length);

    var answer = prompt(secondQuestion[questionNumber]);



    switch (questionNumber) {
        case 0:
            answer = answer.toLowerCase();
            if( answer === "cat"){
                if(response.innerHTML !== "Correct"){
                    score++;
                }
                response.innerHTML = "Correct";
                response.style.color = "green";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
                if(score === 5){
                    congrats.innerHTML= "Congratulations!! You got every question right."
                }
            }
            else{
                if(score !== 0 && response.innerHTML === "Correct"){
                    score--;
                }
                response.innerHTML = "Incorrect";
                response.style.color = "red";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break;
        case 1:
            answer = answer.toLowerCase();
            if(answer === "moo"){
                if(response.innerHTML !== "Correct"){
                    score++;
                }
                response.innerHTML = "Correct";
                response.style.color = "green";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
                if(score === 5){
                    congrats.innerHTML= "Congratulations!! You got every question right."
                }
            }
            else{
                if(score !== 0 && response.innerHTML === "Correct"){
                    score--;
                }
                response.innerHTML = "Incorrect";
                response.style.color = "red";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break;
        case 2:
            answer = answer.toLowerCase();
            if(answer === "apple"){
                if(response.innerHTML !== "Correct"){
                    score++;
                }
                response.innerHTML = "Correct";
                response.style.color = "green";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
                if(score === 5){
                    congrats.innerHTML= "Congratulations!! You got every question right."
                }
            }
            else{
                if(score !== 0 && response.innerHTML === "Correct"){
                    score--;
                }
                response.innerHTML = "Incorrect";
                response.style.color = "red";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break
        default:
            answer = answer.toLowerCase();
           if(answer === "fire"){
            if(response.innerHTML !== "Correct"){
                score++;
            }
            response.innerHTML = "Correct";
            response.style.color = "green";
            txtScore.innerHTML = "Your total score is: " + score + "/5";
            if(score === 5){
                congrats.innerHTML= "Congratulations!! You got every question right."
            }
           }
           else{
            if(score !== 0 && response.innerHTML === "Correct"){
                score--;
            }
            response.innerHTML = "Incorrect";
            response.style.color = "red";
            txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break;
    }
}

function questionThree(){
    var thirdQuestion = ["45 + 6 =", "76 - 71 =", "64 * 3 =", "55 / 5 ="]
    var response = document.getElementById("answer3");
    var txtScore = document.getElementById("score");
    var score = parseFloat(txtScore.innerText[21]);
    var congrats = document.getElementById("congratulations");
    var answer = 0;
    var nonNumeric;

    if(Number.isNaN(score)){
        score = 0;
    }

    var questionNumber = Math.floor(Math.random()*thirdQuestion.length);

    answer = parseInt(prompt(thirdQuestion[questionNumber]));
    nonNumeric = Number.isNaN(answer);

    while(nonNumeric == true){
        answer = parseInt(prompt("You didn't enter a numeric value. Please try again. " + thirdQuestion[questionNumber]));
        nonNumeric = Number.isNaN(answer);
    
    }

    switch (questionNumber) {
        case 0:
            if( answer == 51){
                if(response.innerHTML != "Correct"){
                    score++;
                }
                response.innerHTML = "Correct";
                response.style.color = "green";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
                if(score == 5){
                    congrats.innerHTML= "Congratulations!! You got every question right."
                }
            }
            else{
                if(score != 0 && response.innerHTML == "Correct"){
                    score--;
                }
                response.innerHTML = "Incorrect";
                response.style.color = "red";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break;
        case 1:
            if(answer == 5){
                if(response.innerHTML != "Correct"){
                    score++;
                }
                response.innerHTML = "Correct";
                response.style.color = "green";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
                if(score == 5){
                    congrats.innerHTML= "Congratulations!! You got every question right."
                }
            }
            else{
                if(score != 0 && response.innerHTML == "Correct"){
                    score--;
                }
                response.innerHTML = "Incorrect";
                response.style.color = "red";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break;
        case 2:
            if(answer == 192){
                if(response.innerHTML != "Correct"){
                    score++;
                }
                response.innerHTML = "Correct";
                response.style.color = "green";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
                if(score == 5){
                    congrats.innerHTML= "Congratulations!! You got every question right."
                }
            }
            else{
                if(score != 0 && response.innerHTML == "Correct"){
                    score--;
                }
                response.innerHTML = "Incorrect";
                response.style.color = "red";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break
        default:
           if(answer == 11){
            if(response.innerHTML != "Correct"){
                score++;
            }
            response.innerHTML = "Correct";
            response.style.color = "green";
            txtScore.innerHTML = "Your total score is: " + score + "/5";
            if(score == 5){
                congrats.innerHTML= "Congratulations!! You got every question right."
            }
           }
           else{
            if(score != 0 && response.innerHTML == "Correct"){
                score--;
            }
            response.innerHTML = "Incorrect";
            response.style.color = "red";
            txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break;
    }
}

function questionFour(){
    var fourthQuestion = ["10 + 3", "60 / 5", "100 * 0.5", "48 - 17"]
    var response = document.getElementById("answer4");
    var txtScore = document.getElementById("score");
    var score = parseFloat(txtScore.innerText[21]);
    var congrats = document.getElementById("congratulations");
    var answer = 0;
    var nonNumeric;

    if(Number.isNaN(score)){
        score = 0;
    }

    var questionNumber = Math.floor(Math.random()*fourthQuestion.length);

    answer = parseInt(prompt(fourthQuestion[questionNumber]));
    nonNumeric = Number.isNaN(answer);
    
    while(nonNumeric == true){
        answer = parseInt(prompt("You didn't enter a numeric value. Please try again. " + fourthQuestion[questionNumber]));
        nonNumeric = Number.isNaN(answer);
    
    }
    

    switch (questionNumber) {
        case 0:
            if( answer == 13){
                if(response.innerHTML != "Correct"){
                    score++;
                }
                response.innerHTML = "Correct";
                response.style.color = "green";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
                if(score == 5){
                    congrats.innerHTML= "Congratulations!! You got every question right."
                }
            }
            else{
                if(score != 0 && response.innerHTML == "Correct"){
                    score--;
                }
                response.innerHTML = "Incorrect";
                response.style.color = "red";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break;
        case 1:
            if(answer == 12){
                if(response.innerHTML != "Correct"){
                    score++;
                }
                response.innerHTML = "Correct";
                response.style.color = "green";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
                if(score == 5){
                    congrats.innerHTML= "Congratulations!! You got every question right."
                }
            }
            else{
                if(score != 0 && response.innerHTML == "Correct"){
                    score--;
                }
                response.innerHTML = "Incorrect";
                response.style.color = "red";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break;
        case 2:
            if(answer == 50){
                if(response.innerHTML != "Correct"){
                    score++;
                }
                response.innerHTML = "Correct";
                response.style.color = "green";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
                if(score == 5){
                    congrats.innerHTML= "Congratulations!! You got every question right."
                }
            }
            else{
                if(score != 0 && response.innerHTML == "Correct"){
                    score--;
                }
                response.innerHTML = "Incorrect";
                response.style.color = "red";
                txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break
        default:
           if(answer == 31){
            if(response.innerHTML != "Correct"){
                score++;
            }
            response.innerHTML = "Correct";
            response.style.color = "green";
            txtScore.innerHTML = "Your total score is: " + score + "/5";
            if(score == 5){
                congrats.innerHTML= "Congratulations!! You got every question right."
            }
           }
           else{
            if(score != 0 && response.innerHTML == "Correct"){
                score--;
            }
            response.innerHTML = "Incorrect";
            response.style.color = "red";
            txtScore.innerHTML = "Your total score is: " + score + "/5";
            }
            break;
    }
}

function questionFive(){
    var fifthQuestion = ["Cats Meow", "Dogs Moo", "Bunnies hop", "10 + 17 is 27"]
    var response = document.getElementById("answer5");
    var txtScore = document.getElementById("score");
    var score = parseFloat(txtScore.innerText[21]);
    var congrats = document.getElementById("congratulations");

    if(Number.isNaN(score)){
        score = 0;
    }

    var questionNumber = Math.floor(Math.random()*fifthQuestion.length);

    var answer = confirm(fifthQuestion[questionNumber])

    switch (answer) {
        case true:
            switch (questionNumber) {
                case 0:
                    if(response.innerHTML != "Correct"){
                        score++;
                    }
                    response.innerHTML = "Correct";
                    response.style.color = "green";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    if(score == 5){
                        congrats.innerHTML= "Congratulations!! You got every question right."
                    }
                    break;
                case 1:
                    if(score != 0 && response.innerHTML == "Correct"){
                        score--;
                    }
                    response.innerHTML = "Incorrect";
                    response.style.color = "red";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    break;
                case 2:
                    if(response.innerHTML != "Correct"){
                        score++;
                    }
                    response.innerHTML = "Correct";
                    response.style.color = "green";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    if(score == 5){
                        congrats.innerHTML= "Congratulations!! You got every question right."
                    }
                    break;
                case 3:
                    if(response.innerHTML != "Correct"){
                        score++;
                    }
                    response.innerHTML = "Correct";
                    response.style.color = "green";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    if(score == 5){
                        congrats.innerHTML= "Congratulations!! You got every question right."
                    }
                    break;
                default:
                    break;
            }
            break;
    
        default:
            switch (questionNumber) {
                case 0:
                    if(score != 0 && response.innerHTML == "Correct"){
                        score--;
                    }
                    response.innerHTML = "Incorrect";
                    response.style.color = "red";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    break;
                case 1:
                    if(response.innerHTML != "Correct"){
                        score++;
                    }
                    response.innerHTML = "Correct";
                    response.style.color = "green";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    if(score == 5){
                        congrats.innerHTML= "Congratulations!! You got every question right."
                    }
                    break;
                case 2:
                    if(score != 0 && response.innerHTML == "Correct"){
                        score--;
                    }
                    response.innerHTML = "Incorrect";
                    response.style.color = "red";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    break;
                case 3:
                    if(score != 0 && response.innerHTML == "Correct"){
                        score--;
                    }
                    response.innerHTML = "Incorrect";
                    response.style.color = "red";
                    txtScore.innerHTML = "Your total score is: " + score + "/5";
                    break;
                default:
                    break;
            }
            break;
    }
}