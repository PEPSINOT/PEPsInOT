// Cкопіюй код з минулого уроку
document.addEventListener('DOMContentLoaded', () => {

// Cкопіюй код з минулого уроку
        const questions = [
        {
            question: " яка валюта в пабг мобаіл?",
            answers: ["юсі", "голда", "долар", "гривні"],
            correct: 0
        },
        {
            question: " скльки років пабгу?",
            answers: ["67", "13", "9", "12"],
            correct: 2
        },
        {
            question: " коли був випущиний пабг мобаіл?",
            answers: ["23 березня 2017 року", "2 грудня 2017 року", "5 грудня 2017 року", "17 квітня 2017 року"],
            correct: 0
        },
        {
            question: " скільки дають валюти на початку гри ?",
            answers: ["100", "10", "0", "1000"],
            correct: 2
        },
        {
            question: " скільки коштує перший кейс?",
            answers: ["100000", "30", "0", "20"],
            correct: 2
        },
        {
             question: "скільки людей може находитися в одному раунді?",
            answers: ["200", "100", "4", "80"],
            correct: 1
        },
        {
            question: "яка країна випустила пабг мобаіл?",
            answers: ["Украіна", "Англія", "Польща", "Китай"],
            correct: 3
        },
        {
            question:  "яка крайна саме більше скачала пабг?",
            answers: ["індія", "україна", "польща", "німечина"],
            correct: 0
        },
        {
            question: "яка зброя найпопулярнішою в пабг?",
            answers: ["M416", "ABM", "мк14", "пістоле"],
            correct: 0
        },
        {
            question: "яка зброя найпотужнішою в пабг?",
            answers: ["MG3", "ABM", "Groza", "MK14"],
            correct: 1
        },
        {
            question: "ЯКИЙ ПАТРОН КАЛІБР ВИКОРИСТОВУЄ М416",
            answers: ["7.56", "300 MAGNUM", "5.56", "67"],
            correct: 2
        }
    ];
    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const resultText = document.querySelector('.result-text');
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    const scoreDisplay = document.querySelector('#score-display')
    
    let questionIndex = 0;
    let score = 0;
    let timer = 30;
    const timerDisplay = document.querySelector('#timer');
    let interval;
    
    // Керування екранами (JS)
    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);

    // Функція для відображення запитання
    function showQuestion(question) {
        clearInterval(interval); 
        startTimer();
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);
    
    // Функція для переходу до наступного запитання
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }
    
    // Перевірка відповіді
    function checkAnswer(button, i) {
        if (i == questions[questionIndex].correct) {
            score++;
            scoreDisplay.innerText = `Бали: ${score}`;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        })
        setTimeout(nextQuestion, 1000);
    }


    function showResult() {
        const accuracy = Math.round((score / questions.length) * 100);
        resultText.innerText = `Твій результат: ${score}/${questions.length} (${accuracy}%)`;
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const finalScore = document.querySelector('#final-score');
        finalScore.innerText = score;
    }


    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);


    function startTimer() {
        timer = 30;
        timerDisplay.innerText = `Час: ${timer}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Час: ${timer}`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }

    restartBtn.addEventListener('click', () => {
        startGame();
        resultScreen.classList.add('hide');
    });

});