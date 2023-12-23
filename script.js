const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function guessNumber (myNumber, tryCount) {

    function questionsAboutNumber () {
        const count = ' осталось ' + tryCount + ' попыток';
        const askNumber = prompt ('Угадай число от 1 до 100');

        if (tryCount >= 0){
            tryCount--
        }

        if(tryCount === -1){
            if(confirm('попытки закончились, хотите сыграть еще?')){
                guessNumber(10,3);
            }
            return;
        }

        if (askNumber === null){
            alert('Игра окончена' );
            return 0;
        }

        if (askNumber > myNumber) {
            alert('Загаданное число меньше ' + count);
            questionsAboutNumber();
        }

        if (askNumber < myNumber){
            alert('Загаданное число больше ' + count);
            questionsAboutNumber();
        }

        if (!isNumber(askNumber)){
            alert('Введи число! ' + count);
            questionsAboutNumber();
        }

        if (askNumber !== myNumber){
            if(confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')){
                guessNumber(12,3);
            }
            return;
        }
        
    }   
    questionsAboutNumber()
}
guessNumber(15, 3);
