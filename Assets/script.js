// Define Global Variables
let tracker = 0;
let timeLeft = 100;
let results = $('#results');

let questionsArray = [
  {
    question: "Which of these options is considered a Boolean value",
    choices: [
      "True", "78", "null", "undefined"
    ],
    correctAnswer: "True",
  },
  {
    question: "A variable that has multiple objects stored within it is called...",
    choices: [
      "a value.", "an array.", "a function.", "a jQuery."
    ],
    correctAnswer: "an array.",
  },
  {
    question: "Which coding language is used to style a webpage?",
    choices: [
      "HTML", "Japanese", "Javascript", "CSS"
    ],
    correctAnswer: "CSS",
  },
  {
    question: "What should a developer do when he encounters an unknown error or coding issue?",
    choices: [
      "Give up.", "Kill Yourself.", "Eat a snack.", "Google it."
    ],
    correctAnswer: "Google it.",
  },
];

timerEl = $('#counter');

function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  let timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.text(timeLeft + ' seconds remaining');
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.text(timeLeft + ' second remaining');
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.text('TIMES UP!');
      $('main').addClass("hidden");
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

function createQuestion() {
  $('#question').text(questionsArray[tracker].question);
  console.log(questionsArray[tracker].choices);
  for (var i = 0; i < questionsArray[tracker].choices.length; i++) {
    console.log(i);
    if (i === 0) {
      $('#answer-button-1').text(questionsArray[tracker].choices[i])
      $('#answer-button-1').val(questionsArray[tracker].choices[i]);
      console.log(questionsArray[tracker].choices[i]);
    }
    else if (i === 1) {
      $('#answer-button-2').text(questionsArray[tracker].choices[i])
      $('#answer-button-2').val(questionsArray[tracker].choices[i]);
    }
    else if (i === 2) {
      $('#answer-button-3').text(questionsArray[tracker].choices[i])
      $('#answer-button-3').val(questionsArray[tracker].choices[i]);
    }
    else if (i === 3) {
      $('#answer-button-4').text(questionsArray[tracker].choices[i])
      $('#answer-button-4').val(questionsArray[tracker].choices[i]);
    }
  }
//  increase tracker by one after each question is generated
  tracker++;
  console.log(tracker);

// enable buttons
  buttonEnable();
}

buttonDisable = function() {
  $('#answer-button-1').attr("disabled", true);
  $('#answer-button-2').attr("disabled", true);
  $('#answer-button-3').attr("disabled", true);
  $('#answer-button-4').attr("disabled", true);
}

buttonEnable = function() {
  $('#answer-button-1').attr("disabled", false);
  $('#answer-button-2').attr("disabled", false);
  $('#answer-button-3').attr("disabled", false);
  $('#answer-button-4').attr("disabled", false);
}

// add next button function that activates createQuestion(); 

// create checkAnswers() function: when buttons are clicked check that text matches the correct answer and then increase tracker and run create question again. display corrct or incorrect in the resluts area. if incorrect decrease time by 10 seconds.
// on click inside each button to check answer. W3schools and MDN


// event listeners for checking answer on clicks
$('#answer-button-1').on("click", function(){
  if ($('#answer-button-1').val() === questionsArray[tracker].correctAnswer) {
    alert("Correct!");
    results.text("Correct!");
  }
  else if ($('#answer-button-1').val() !== questionsArray[tracker].correctAnswer) {
    alert("Incorrect!");
    results.text("Incorrect!");
    timeLeft = timeLeft - 10;
  }
  console.log($('#answer-button-1').val());

  buttonDisable();
  $('#next-button').removeClass("hidden");
});

$('#answer-button-2').on("click", function(){
  if ($('#answer-button-2').val() === questionsArray[tracker].correctAnswer) {
    alert("Correct!");
    results.text("Correct!");
  }
  else if ($('#answer-button-2').val() !== questionsArray[tracker].correctAnswer) {
    alert("Incorrect!");
    results.text("Incorrect!");
    timeLeft = timeLeft - 10;
  }
  console.log($('#answer-button-2').val());

  buttonDisable();
  $('#next-button').removeClass("hidden");
});

$('#answer-button-3').on("click", function(){
  if ($('#answer-button-3').val() === questionsArray[tracker].correctAnswer) {
    alert("Correct!");
    results.text("Correct!");
  }
  else if ($('#answer-button-3').val() !== questionsArray[tracker].correctAnswer) {
    alert("Incorrect!");
    results.text("Incorrect!");
    timeLeft = timeLeft - 10;
  }
  console.log($('#answer-button-3').val());
  buttonDisable();
  $('#next-button').removeClass("hidden");
});

$('#answer-button-4').on("click", function(){
  if ($('#answer-button-4').val() === questionsArray[tracker].correctAnswer) {
    alert("Correct!");
    results.text("Correct!");
  }
  else if ($('#answer-button-4').val() !== questionsArray[tracker].correctAnswer) {
    alert("Incorrect!");
    results.text("Incorrect!");
    timeLeft = timeLeft - 10;
  }
  console.log($('#answer-button-4').val());
  buttonDisable();
  $('#next-button').removeClass("hidden");
});


// next button click handler
$('#next-button').on("click", function () { 
  $('results').text('');
  createQuestion(); 
  $(this).addClass("hidden");
});


$('#start-button').on("click", function () {
  $('main').removeClass("hidden");
  $('#start-button').addClass("hidden");
  countdown();
  createQuestion();
});



// This code needs to generate a new question, record the answer, then assess if it is correct or incorrect.

// The user starts the game with 100 points / seconds to finish.

// The score is the time clock. The goal is to finish the quiz with the most time left.

// If the question is correct, then display "correct!" and continue without reducing time, if incorrect then say "incorrect" and load next question. 

// The user will have 10 questions to finish by the end of the time. If they do not finish then alert them they did not finish and tell them how many questions they had left

// If they do finish then congratulate the user and diplay their score!  Then ask for an input of thier intials and record both the highscore and initials in local storage.  

// The HIGH SCORES link in the header/navbar will pull the intials and the previous scores and display them in a list.

// check into using modals for the questions and the high score list display.