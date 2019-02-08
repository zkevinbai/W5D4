// Array uniq
Array.prototype.uniq = function (){
    let unique = [1];
    for(let i = 0; i < this.length; i++) {
        if (!unique.includes(this[i])) {
            unique.push(this[i]);
        }
    }
    return console.log(unique);
};

// Array.prototype.uniq([1, 1, 2]);
// [1, 1, 2].uniq()

// Array two sum
Array.prototype.twoSum = function () {
    let positions = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                positions.push([i, j]);
            }
        }
    }
    return console.log(positions);
};

// Array.prototype.twoSum([1, -1, 1])
// [1 , -1, 1].twoSum()

// Array transpose

Array.prototype.transpose = function () {
    let transposed = [];
    for(let i = 0; i < this.length; i++) {
        transposed.push([]);
    }
    for(let i = 0; i < this.length; i++) {
        // transposed.push([]);  // WHY DOES THIS NOT WORK???
        for(let j = 0; j < this[i].length; j++) {
            // console.log(transposed)
            // debugger
            transposed[j].push(this[i][j]);
        }
    }
    return console.log(transposed);
};

// Array.prototype.transpose([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
// [[1, 2, 3], [1, 2, 3], [1, 2, 3]].transpose();