const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function guessNumber (myNumber) {
    function questionsAboutNumber () {
        const askNumber = prompt ('Угадай число от 1 до 100');
        
        if (askNumber === null){
            alert('Игра окончена');
        }
        if (askNumber > myNumber) {
            alert('Загаданное число меньше');
            questionsAboutNumber();
        }
        if (askNumber < myNumber){
            alert('Загаданное число больше');
            questionsAboutNumber();
        }
        if (!isNumber(askNumber)){
            alert('Введи число!');
            questionsAboutNumber();
        }
        if (askNumber === myNumber){
            confirm('Поздравляю, Вы угадали!!!');
        }
        
    }

    questionsAboutNumber()
}

guessNumber(10)