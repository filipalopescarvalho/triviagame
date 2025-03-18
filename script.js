const questions = [
    {
      question: "What planet is known as the 'Red Planet'?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide"
    },
    {
      question: "How many continents are there on Earth?",
      choices: ["5", "6", "7", "8"],
      correctAnswer: "7"
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "What is the square root of 64?",
      choices: ["6", "7", "8", "9"],
      correctAnswer: "8"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      choices: ["Osmium", "Oxygen", "Oganesson", "Oxide"],
      correctAnswer: "Oxygen"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "Mark Twain", "Jane Austen", "Charles Dickens"],
      correctAnswer: "Harper Lee"
    },
    {
      question: "What is the hardest natural substance on Earth?",
      choices: ["Gold", "Iron", "Diamond", "Platinum"],
      correctAnswer: "Diamond"
    },
    {
      question: "Which planet is closest to the sun?",
      choices: ["Venus", "Mars", "Mercury", "Earth"],
      correctAnswer: "Mercury"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
      document.getElementById('question').innerHTML = `You got ${score}/${questions.length} correct`;
      document.getElementById('choices').innerHTML = ''; 
      return; 
    }
  
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerHTML = currentQuestion.question;
  
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = currentQuestion.choices[i];
      btn.value = currentQuestion.choices[i];
      btn.disabled = false; 
    }
  
    document.getElementById('result').innerHTML = ""; 
  }
  
  function checkAnswer(button) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');
  
    if (button.value === currentQuestion.correctAnswer) {
      resultElement.innerHTML = "Correct!";
      resultElement.style.color = "green"; 
      score++; 
    } else {
      resultElement.innerHTML = "Wrong!";
      resultElement.style.color = "red"; 
    }
  
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`choice${i}`).disabled = true;
    }
  
    setTimeout(() => {
      resultElement.innerHTML = ""; // Clear the result text before displaying the next question
      currentQuestionIndex++;
      displayQuestion();
    }, 2000);
  }
  
  displayQuestion();