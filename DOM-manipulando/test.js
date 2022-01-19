// // let lines = gets().split('\n');

// // var N = parseInt(lines.shift());
// N = 6;

// for (let i = 1; i<=N; i++) {
// 	if (i%2 === 0) console.log(`${i}^2=`, i**2);    //escreva sua lógica nos espaços em branco
// }

// let N = 13
// for (let i = 0; i <= 1000; i++) {
// 	if (i%N === 2) console.log(i);
// }

// const citacao = "Life is not a problem to be soved";
// let N = 33;
// if(N >= 1 && N <= 34){
//   aux = citacao.substring(0, N);
//   auxUpper = aux.toUpperCase();
  
//   console.log(auxUpper);
  
// }

// const arr = [2, 4, 3, 2];
// const arr = ['6', '6', '6', '6'];

// let aux = arr.map(x => parseInt(x));


// let total = 0;
// for( let i = 0; i < aux.length; i++){
//     if(aux[i] >= 2 && aux[i] <= 6){
//         total += aux[i];
//     }
// }
// console.log(total-(aux.length-1));
const arr = ['3', '1'];

let n = parseInt(arr[0]); let l = parseInt(arr[1]);

console.log(n,l);

if( (n >= 3 && n <= 1000000) && (l >=1 && l <= 4000)){

    console.log(n*l);

}