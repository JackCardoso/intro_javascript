const maca = { 
    value:2,
}
const laranja = {
    value:3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)
}

function mapSemThis(arr){
    return arr.map((item) => item * 2);
}

const nums = [1,2];
console.log('com this -> maçã', mapComThis(nums, maca));
console.log('com this -> Laranja', mapComThis(nums, laranja));

console.log('sem this', mapSemThis(nums));

console.log('array nums', nums);