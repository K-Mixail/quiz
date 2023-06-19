import DATA from './test-sun-system.js';

//cюда будем сохранять ответ пользователя 
let localResults = {};  

const quiz = document.querySelector('#quiz');
const questions = document.querySelector('#questions');
const indicator = document.querySelector('#indicator');
const results = document.querySelector('#results');
const btnNext = document.querySelector('#next');
const btnRestart = document.querySelector('#restart');

const renderQuestions = (index) => { //20:45
    renderIndicatior(index + 1);
    
    questions.dataset.currentStep = index; //34:50

    //функция отображения вопроса с ответами (вопросы будем брать из массива DATA по index-у)

    const renderAnswers = () => DATA[index].answers
        .map((answer) =>
        //функция отображает ответы, относящиеся к конкретному вопросу 22:30
            `
                <li>
                    <label>
                        <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                        ${answer.value} 
                    </label>
                </li>
            `
        )
        .join('') //соединяем каждый li через '' (иначе по умлочанию будет ',')
    
    //здесь выводим вопросы (по одному) 21:40
    questions.innerHTML = `
        <div class="quiz-questions__item">
            <div class="quiz-questions__item--question"> ${DATA[index].question} </div> 
            <ul class="quiz-questions__item--answers"> ${renderAnswers()}  </ul>
        </div>
    `;//24:45 оптимизация этого кода
}

const renderResults = () => { //39:35
    let content = ''; 
    const getClassname = (answer, questionIndex) => {
        let classname = '';
        if ((!answer.correct) && (answer.id == localResults[questionIndex])) {
            //если ответ НЕверный и пользователь его выбрал
            classname = 'answer-invalid';
        } else if (answer.correct) {
            //если ответ верный
            classname = 'answer-valid';
        }
        return classname;
    };
    //41:40
    const getAnswers = (questionIndex) => DATA[questionIndex].answers  //questionIndex - индекс текущего вопроса
    .map((answer) => `<li class=${getClassname(answer, questionIndex)}> ${answer.value} </li>`)      
    .join('');

    DATA.forEach((question, index) => { //39:50
        content += `
        <div class="quiz-results__item">
            <div class="quiz-results__item--question"> ${question.question} </div>
            <ul class="quiz-results__item--answers"> ${getAnswers(index)} </ul>

            <div> "TEST TEST TEST" </div>
        </div>  
        `;
    });
    results.innerHTML = content;
};

const renderIndicatior = (currentStep) => { 
    //currentStep - фун., кот. мы выводим в renderQuestions с index + 1, т.к. index нач. с нуля
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

//добавляем слушатели, которые будут реагировать на определённые события (16:45)
quiz.addEventListener('change', (event) => {
//логика ответа
    if (event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;  //сохраняем выбранный пользователем ответ 31:30
        btnNext.disabled = false;
        console.log(localResults);
    }
    
});

quiz.addEventListener('click', (event) => {
//логика кнопок (вперёд и сначала)
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        if (DATA.length === nextQuestionIndex) {
            //переход к результатам
            questions.classList.add('question--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('indicator--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            renderResults();
        } else {
            // переход к следующему вопросу
            renderQuestions(nextQuestionIndex); //отображаем следующий вопрос
        }
        btnNext.disabled = true; //при переходе к следующему вопросу, кнопка должна быть выключена
    }
    if (event.target.classList.contains('btn-restart')) {
        localResults = {}; //cбрасываем всё, что человек отвечал ранее
        results.innerHTML = ''; //очищаем результаты при рестарте
        questions.classList.remove('question--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('indicator--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');
        renderQuestions(0); //переходим к рендору первого вопроса
    }
});

renderQuestions(0);




// const test = () => {
    
//         return "df";

// }


// btnRestart.innerHTML = `
//             <button class="btn btn-restart" id="restart">${test}</button>
//                 `;