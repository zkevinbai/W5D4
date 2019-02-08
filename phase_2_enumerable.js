// Array myEach
Array.prototype.myEach = function (callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}


// [1,2,3].myEach(callback);

// Array myMap
Array.prototype.myMap = function(callback){
    let mapArr = [];
    
    this.myEach(function(el){
        mapArr.push(callback(el));
    })
    
    return mapArr;
}

// function doSomething (el) {
    //     return el + '!';
    // }
    
    
    // [1,2,3].myEach(doSomething)
    
// [1,2,3].myEach(function(el) {
//     return el + '!';
// })


// mapArr.push(doSomething(el))

// el => mapArr.push(doSomething(el))


// console.log([1,2,3].myMap(callback))

// Array myReduce
Array.prototype.myReduce = function (callback, initialValue){
    let init;
    
    if(initialValue){
        init = initialValue;
        
        this.myEach(function(el) {
            init = callback(init, el);
        });
    } else {
        init = this[0];
        
        for(let i = 1; i < this.length; i++){
            init = callback(init, this[i]);
        }
    }
    
    return init;
}

console.log([1,2,3, 4].myReduce(callback))

function callback(one, two) {
    return one * two;
}