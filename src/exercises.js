function commonEnd(a, b) {
    if (!a || a.length === 0 || !b || b.length === 0) {
        return false;
    }

    if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) return true;
        else return false;
}

function endsMeet(values, n) {
    let newArray = [];
    if (!values || values.length < n || n < 0) {
        return newArray;
    }

    if (n === 0) {
        return values;
    } else {
        for (let index = 0; index < n; index++) {
            newArray.push(values[index]);
        }

        for (let index = values.length - n; index < values.length; index++) {
            newArray.push(values[index]);
        }
        return newArray;
    }
}

function difference(numbers) {
    if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
        return undefined;
    } else {
        // intentionally empty
    }

    let max = numbers[0];
    let min = numbers[0];

    numbers.forEach((number) => {
        if (number > max) {
            max = number;
        } else {
            // intentionally empty
        }
    });

    numbers.forEach((number) => {
        if (number < min) {
            min = number;
        } else {
            // intentionally empty
        }
    });

    let difference = max - min;
    return difference;
}

function max(numbers) {
    if (!numbers) {
        return undefined;
    } else if (numbers.some(isNaN)) {
        return undefined;
    } else if (numbers.length < 3 || numbers.length % 2 == 0) {
        return undefined;
    } else {
        let newArray = [numbers[0], numbers[(numbers.length - 1)/2], numbers[numbers.length - 1]];
        let largest = Math.max.apply(Math, newArray);

        return largest;
    }
}

function middle(values) {
    let newArray = [];
    if (!values) {
        return newArray;
    } else if (values.length < 3 || values.length % 2 == 0) {
        return newArray;
    } else {
        let middle = (values.length - 1)/2;
        newArray = [values[middle - 1], values[middle], values[middle + 1]]; // could use .push but this is smoother in my opinion
        return newArray;
    }
}

function increasing(numbers) {
    if (!numbers) {
        return false;
    } else if (numbers.length < 3 || numbers.some(isNaN)) {
        return false;
    } else {
        // intentionally empty
    }
    numbers.forEach((number) => {
        if (number % 1 !== 0) {
            return false;
        } else {
            // intentionally empty
        }
    });

    let condition = true;
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        if (numbers[i + 1] - currentNumber === 1 && currentNumber - numbers[i - 1] === 1) {
            return true;
        } else {
            condition = false;
        }
    }

    if (!condition) return false;
}

function everywhere(values, x) {
    if (!values || !x) {
        return false;
    } else if (values.length < 1) {
        return false;
    }

    
}

function consecutive(numbers) {
// write your code here
}

function balance(numbers) {
// write your code here
}

function clumps(values) {
// write your code here
}

/*
* Exports all functions for use in external grader.js file. Do not modify.
*/

module.exports = {
    commonEnd,
    endsMeet,
    difference,
    max,
    middle,
    increasing,
    everywhere,
    consecutive,
    balance,
    clumps
};
