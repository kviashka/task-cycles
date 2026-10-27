/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    const min = Math.min(start, end);
    const max = Math.max(start, end);

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let cnt = 0;
    let cur = a;

    while (cur > 0.1) {
        cur /= 2;
        cnt++;
    }
    return cnt;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let res = '';
    let i = 0;

    if (message.length === 0) {
        return res;
    }

    do {
        if ((i + 1) % 3 === 0) {
            res += '_';
        } else {
            res += message[i];
        }
        i++;
    } while (i < message.length);

    return res;
}
