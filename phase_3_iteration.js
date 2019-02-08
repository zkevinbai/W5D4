// Array bubbleSort
/*
def bubblesort(arr)
    sorted = false
    until sorted
        sorted = true
        arr.each_index do |i|
            next if i == arr.length - 1
            if arr[i] > arr[i + 1]
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                sorted = false
            end
        end
    end
    arr
end
*/

Array.prototype.bubblesort = function (callback) {
    let sorted = false;
    while (sorted === false) {
        sorted = true;
        // console.log("infinite loop?");
        for(let i = 0; i < this.length; i++) {
            if (i === this.length - 1) {break}
            
            if (callback(this[i], this[i + 1])) {
                let left = this[i];
                let right = this[i+1];

                this[i] = right;
                this[i+1] = left;

                sorted = false;
            }
        }
    }
    return this;
}

function callback(i, j) {
    if (i > j) {
        return true;
    } else if (i <= j) {
        return false;
    }
}

// console.log([2, 1, 15, 2, 4, 3, 3, 5, 7, 8, 9].bubblesort(callback))

//String substrings

String.prototype.substrings = function(){
    let subs = [];
    for(let i = 0; i < this.length; i++){
        for(let j = i + 1; j < this.length + 1; j++){
            let holder = this.slice(i, j);
            subs.push(holder);
        }
    }

    return subs;
}

String.prototype.substringsHodor = function(){
    let subs = [];
    for(let i = 0; i < this.length; i++){
        let holder = this[i];
        for(let j = i ; j < this.length; j++){
            subs.push(holder)
            holder += (this[j]);
        }
    }

    return subs;
}


// console.log("abc".substrings())
console.log("abc".substringsHodor())


/*
012
abc

0
12

1
2

2

a
ab
abc

b
bc

c

*/