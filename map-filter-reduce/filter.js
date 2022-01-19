function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const nums = [1, 24, 55, 34, 56, 66, 2, 3, 4];

console.log(filtraPares(nums));