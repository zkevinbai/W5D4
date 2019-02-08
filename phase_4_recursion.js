// range(start, end)

/*
    def rec_range(start, end)

        return [start] if start == end



    end

*/

function range(start, end){
    let arr = [start];
    if (start === end) {
        return arr;
    }

    return arr.concat(range(start+1, end));
}

// console.log(range(1, 3))

// sumRec(arr)

function sumRec(array){
    if (array.length <= 1){
        return array[0];
    }

    return array[0] + sumRec(array.slice(1, array.length + 1));
}

// console.log(sumRec([1, 3]))
// console.log(sumRec([1, 3, 5, 8]))

// exponent(base, exp)

function exponent(base, exp) {
    let neg = false;
    if (exp < 0) {
        neg = true;
        // let exp = -1 * exp;
    }
    if (exp === 0) {
        return 1;
    } else if (exp === 1) {
        if (neg === true) {
            return 1/base;
        } else {
            return base;
        }
    }
    if (neg === true) {
        return 1/base * exponent(base, exp+1);
    } else {
        return base * exponent(base, exp-1);
    }
}

// console.log(exponent(2, 0))
// console.log(exponent(2, 1))
// console.log(exponent(2, -1))
// console.log(exponent(2, 6))
// console.log(exponent(2, -4))

// fiobnacci(n)

function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    }
    let memo = fibonacci(n-1);
    memo.push(memo[memo.length-1]+memo[memo.length-2]);
    return memo;
}

console.log(fibonacci(-1))
console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(15))

// deepDup(arr)

function deepDup(arr){
    if (typeof(arr) !== "object") {return arr;}


}