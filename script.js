const countTry = 10;

const getRandomNum = (min = 0, max = 100) => {
    return Math.ceil(Math.random() * max) + min
}

const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const guessNumber = (myNumber, tryCount) => {
    function questionsAboutNumber() {
        let askNumber = prompt('Угадай число от 1 до 100');
        let countMessage;

        if (askNumber === null) {
            alert('Игра окончена');
            return;
        }

        if (!isNumber(askNumber)) {
            alert('Введи число!');
            questionsAboutNumber();
        } else {
            askNumber = +askNumber
        }

        tryCount--;
        countMessage = ' осталось ' + tryCount + ' попыток';;

        if (askNumber === myNumber) {
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                guessNumber(getRandomNum(0, 100), countTry);
            }
            alert('Игра окончена');
            return;
        }

        if (tryCount === 0) {
            if (confirm('попытки закончились, хотите сыграть еще?')) {
                guessNumber(getRandomNum(0, 100), countTry);
            }

            alert('Игра окончена');
            return;
        }

        if (askNumber > myNumber) {
            alert('Загаданное число меньше ' + countMessage);
            questionsAboutNumber();
        } else {
            alert('Загаданное число больше ' + countMessage);
            questionsAboutNumber();
        }
    }
    questionsAboutNumber()
}

guessNumber(getRandomNum(0, 100), countTry);