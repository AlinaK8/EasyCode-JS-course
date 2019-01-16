//High Functions
//Task 1 
function arrayUpdater(arr, handler) {
    if (!arr) return 'Array is not provided';
    if (!arr.length) return 'Array is empty!';

    let updatedString = 'New value: ';

    for (let i = 0; i < arr.length; i++) {
        updatedString += handler(arr[i]);
    }

    return updatedString;
}   

//Fitst callback

let arr1 = ['my', 'name', 'is', 'Trinity'];

let transform =function(el) {
    return el[0].toUpperCase() + el.slice(1);
}

let updatedArr = arrayUpdater(arr1, transform);

//Second callback

let multiplyArr = function(el) {
    return el * 10 + ', ';
}

let arrToMultiply = arrayUpdater([10, 20, 30], multiplyArr);

//Third Callback

let users =[
    {age: 45, name: 'John'}, 
    {age: 20, name: 'Aaron'}
];   

let getTheAgeRight = function(el) {
    return el.name +' is ' + el.age + ', ';
}

let ageResult = arrayUpdater(users, getTheAgeRight);

//Fourth callback

let arrToReverse = ['abc', '123'];

let reverseArr = function(el) {
    let reverse = '';
    
    for (let i = el.length - 1; i >= 0; i--) {
        reverse += el[i];
    }
    return reverse + ', ';
    
    // return str.split('').reverse().join('') + ' , '; - the short version
};

let reverseResult = arrayUpdater(arrToReverse, reverseArr);


//Task 2

function every(arr, handler) {

    if (!arr) return 'please fill in array';

    for (let i = 0; i < arr.length; i++) {

        let checking = true

        if (!handler(arr[i], i, arr)){
            checking = false;
        } 
        
        return checking;
    }   
};

// function every(arr, handler) {
//     if (!arr) return 'please fill in array';

//     for (let i = 0; i < arr.length; i++) {
//         if (!handler(arr[i], i, arr)){
//             return false;
//         } 
//     }   
    
//     return true;
// };


let callbackCheck = function(number, i, arr) {
    return number > 5 + i + arr;
};

let checked = every([1, 13, 5, 2, 5, 2, 16, 46, 343434, 34, 5465, 234], callbackCheck);




//Array methods for sorting

//1
function regenerateArray (arr) {
    if (!arr) { return "array is not provided" };
    if (!arr.length) { return "array is empty! cannot proceed" };

    return modifiedArray = arr.map(function(el) {
        return {
            digit: el,
            odd: el % 2 ? true : false,
        }
    });
};

let arrToModify = [1, 2, 3, 5, 8, 9, 10];

//2

let arrayToCheck = [12, 4, 50, 1, 0, 18, 40];

function checkZeroValue(arr) {
    if (!arr) return 'no array is filled in';

    return arr.some(function(val) {
        return val === 0;
    })
}

//3

 let checkedLenght = ['yes', 'hello', 'no', 'easycode', 'what'].some(function(str){
     return str.length > 3;  
 });

 //4

let distortedArr = [
    { char: "a", index: 12 }, 
    { char: "w", index: 8 }, 
    { char: "Y", index: 10 },
    { char: "p", index: 3 }, 
    { char: "p", index: 2 }, 
    { char: "N", index: 6 }, 
    { char: " ", index: 5 }, 
    { char: "y", index: 4 }, 
    { char: "r", index: 13 },
    { char: "H", index: 0 },
    { char: "e", index: 11 },
    { char: "a", index: 1 }, 
    { char: " ", index: 9 }, 
    { char: "!", index: 14 }, 
    { char: "e", index: 7 }
];

function stringTransform(arr) {
    if (!arr) return 'No array is provided!';
    if (!arr.length) return "array is empty! cannot proceed";

    let sortedArr = arr.sort(function(prev, next) {
        return prev.index - next.index;
    });

    return receivedString = sortedArr.reduce(function(newString, current) {
        return newString += current.char;
    }, "");
};


//Sort()

//1
let arrOfArr = [[14, 15], [1], ['a', 'c', 'd']];

let sortedArrOfArr = arrOfArr.sort(function(prev, next) {
    return prev.length - next.length;
});


//2
let cpuArr = [
    {cpu: 'intel', info: {cores:2, cache:3}},
    {cpu: 'intel', info: {cores:4, cache:4}},
    {cpu: 'amd', info: {cores:1, cache:1}},
    {cpu: 'intel', info: {cores:3, cache:2}},
    {cpu: 'amd', info: {cores:4, cache:2}}
];


let sortedCpuArr = cpuArr.sort(function(prev, next) {
    return prev.info.cores - next.info.cores;
});



    
