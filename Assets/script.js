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
  { 
    question: "the end",
    choices: [
      "this is a placeholder 1", "this is a placeholder 2", "this is a placeholder 3", "this is a placeholder 4"
    ],
    correctAnswer: "this is a placeholder 1",
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
    }
    else {
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
    if (i === 0) {
      $('#answer-button-1').text(questionsArray[tracker].choices[i])
      $('#answer-button-1').val(questionsArray[tracker].choices[i]);
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
  console.log(tracker);

// enable buttons
  buttonEnable();
}

   // !!TRYING TO GET IT TO READ IF THE ARRAY IS OVER TO STOP TIMER AND QUEUE END OF GAME!!
function endGame() {
  if (tracker > questionsArray.length) {
  clearInterval(clearInterval(timeInterval));
  $("#question-section").addClass("hidden");
  results.text("Game over! your score is: " + timeLeft + ". Thank you for playing!");
  }
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

console.log(questionsArray[tracker].correctAnswer);

// event listeners for checking answer on clicks
$('#answer-button-1').on("click", function(){
  if ($('#answer-button-1').val() === questionsArray[tracker].correctAnswer) {
    results.text("Correct!");
  }
  else if ($('#answer-button-1').val() !== questionsArray[tracker].correctAnswer) {
    results.text("Incorrect!");
    timeLeft = timeLeft - 10;
  }
  console.log($('#answer-button-1').val());
  
  buttonDisable();
  $('#next-button').removeClass("hidden");
});

$('#answer-button-2').on("click", function(){
  if ($('#answer-button-2').val() === questionsArray[tracker].correctAnswer) {
    results.text("Correct!");
  }
  else if ($('#answer-button-2').val() !== questionsArray[tracker].correctAnswer) {
    results.text("Incorrect!");
    timeLeft = timeLeft - 10;
  }
  console.log($('#answer-button-2').val());

  buttonDisable();
  $('#next-button').removeClass("hidden");
});

$('#answer-button-3').on("click", function(){
  if ($('#answer-button-3').val() === questionsArray[tracker].correctAnswer) {
    results.text("Correct!");
  }
  else if ($('#answer-button-3').val() !== questionsArray[tracker].correctAnswer) {
    results.text("Incorrect!");
    timeLeft = timeLeft - 10;
  }
  console.log($('#answer-button-3').val());
  buttonDisable();
  $('#next-button').removeClass("hidden");
});

$('#answer-button-4').on("click", function(){
  if ($('#answer-button-4').val() === questionsArray[tracker].correctAnswer) {
    results.text("Correct!");
  }
  else if ($('#answer-button-4').val() !== questionsArray[tracker].correctAnswer) {
    results.text("Incorrect!");
    timeLeft = timeLeft - 10;
  }
  console.log($('#answer-button-4').val());
  buttonDisable();
  $('#next-button').removeClass("hidden");
});


// next button click handler
$('#next-button').on("click", function () { 
  results.text('');
  tracker++;
  createQuestion(); 
  $(this).addClass("hidden");
});

//  start button click handler
$('#start-button').on("click", function () {
  $('main').removeClass("hidden");
  $('#start-button').addClass("hidden");
  countdown();
  createQuestion();
});
