<!DOCTYPE html>
<html>
<head>
  <title>Quiz App</title>
  <style>
    body { font-family: Arial; margin: 30px; }
    .question { font-size: 20px; margin-bottom: 10px; }
    .option { margin: 8px 0; }
    .btn { padding: 8px 16px; background-color: blue; color: white; border: none; }
    .btn:hover { background-color: darkblue; }
  </style>
</head>
<body>
  <div id="quizContainer">
    <div class="question" id="questionText"></div>
    <div id="optionsContainer"></div>
    <button class="btn" onclick="nextQuestion()">Next</button>
    <div id="result" style="margin-top: 20px; font-weight: bold;"></div>
  </div>

  <script>
    const questions = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "London"],
        answer: "Paris"
      },
      {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
      },
      {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Syntax"],
        answer: "Cascading Style Sheets"
      },
      {
        question: "What year was JavaScript created?",
        options: ["1996", "1995", "1994", "2000"],
        answer: "1995"
      },
      {
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Larry Page", "Bill Gates", "Elon Musk"],
        answer: "Bill Gates"
      }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
      const q = questions[currentQuestionIndex];
      document.getElementById("questionText").innerText = `Q${currentQuestionIndex + 1}: ${q.question}`;
      const container = document.getElementById("optionsContainer");
      container.innerHTML = "";

      q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option", "btn");
        btn.onclick = () => selectAnswer(opt);
        container.appendChild(btn);
      });
    }

    function selectAnswer(selected) {
      const correct = questions[currentQuestionIndex].answer;
      if (selected === correct) {
        score++;
      }

      // Disable all buttons after one is clicked
      Array.from(document.getElementsByClassName("option")).forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correct) {
          btn.style.backgroundColor = "green";
        } else if (btn.innerText === selected) {
          btn.style.backgroundColor = "red";
        }
      });
    }

    function nextQuestion() {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
      } else {
        document.getElementById("quizContainer").innerHTML = `
          <h2>Quiz Completed!</h2>
          <p>Your score is ${score} out of ${questions.length}</p>
        `;
      }
    }

    // Initial Load
    loadQuestion();
  </script>
</body>
</html>
