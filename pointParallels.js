exports.parallel = function(A, B) {

    if (A.x === B.x) {
        console.log('Прямая параллельна оси абсцис');
    } else if (A.y === B.y) {
        console.log('Прямая параллельна оси ординат');
    } else {
        console.log('Прямая не параллельна осям координат');
    }
};
