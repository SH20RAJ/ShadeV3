// let arr = [];


// for(let i = 1; i<=100; i++) {
//     console.log("i", i);
//     var j = 1;
//     var counter = 1;
//     while (counter < 100) {
//         console.log("j", j);
//         arr[j] = !arr[j]
//         j = i*j;
//         counter = counter +1
//     }
// }

// // 1 , 2 , 4 , 5 , 

// console.log(arr);




function devisorNum(a) {
    // finding no of divisors
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            count++;
        }
    }
    return count;
}

let arr  = [];


for (let i = 1; i <= 100; i++) {
    if(devisorNum(i)%2 == 0) {
        arr[i] = false;
    } else {
        arr[i] = true;
    }
}


console.log(arr);