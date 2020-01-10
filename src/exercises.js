function commonEnd(a, b) {
    if (!a || a.length === 0 || !b || b.length === 0) {
        return false;
    }

    if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
          return true;
    } else {
          return false;
    }

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
    if (!numbers || numbers.length < 1) {
        return undefined;
    }

    numbers.forEach((number) => {
        if (isNaN(number)) {
            return undefined;
        } else {
            // intentionally empty
        }
    });

    let max = 0;
    let min = 0;
    let UPPER_LIMIT = Number.MAX_SAFE_INTEGER;
    let LOWER_LIMIT = Number.MIN_SAFE_INTEGER;

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

        }
    });

    let difference = max - min;
    return difference;
}

function max(number) {
// write your code here
}

function middle(values) {
// write your code here
}

function increasing(numbers) {
// write your code here
}

function everywhere(values, x) {
// write your code here
}

function consecutive(numbers) {
// write your code here
}

function balance(numbers) {
// write your code here
console.log("test");
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
