// Questions to the quiz// 
var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "JQuery","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "JavaScript"], "CSS"),
    new Question("Commonly used data types do not include?", ["Strings", "Numbers","Alerts", "Booleans"], "Alerts"),
    new Question("String values must be enclosed within ____  when being assigned to variables?", ["Parenthesis", "Curly Brackets", "Commas", "Quotes"], "Parenthesis"),
    new Question("The condition in an if/else statement is enclosed within?", ["Quotes", "Period", "Square Brackets", "Curly Brackets"], "Curly Brackets")];
 
    var quiz = new Quiz(questions);

 
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestion().CorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.CorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        shoScore();
    }
    else {
       
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestion().text;
 
       
        var choices = quiz.getQuestion().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        shoProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 function shoProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 function shoScore() {
    var gameOver = "<h1>Results</h1>";
    gameOver += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver;

    if (score === 5){
        alert('Your Score is ' + quiz.score);
        alert('YOU DID PERFECT');
      } else if (score === 4) {
        alert('Your Score is ' + quiz.score);
     } else if (score === 3) {
        alert('Your Score is ' + quiz.score);
     } else if (score === 2) {
        alert('Your Score is ' + quiz.score);
     } else {
        alert('Your Score is ' + quiz.score);
  
      }
};

populate();



