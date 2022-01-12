function validaArray(arr, numero){
    try{
        if(!arr && !numero) throw new ReferenceError("Parametros inválidos ou vazio");
    
        if(typeof arr !== "object") throw new TypeError("O Arry precisa ser do tipo object");
        
        if(typeof numero !== "number") throw new TypeError("O numero precisa ser do tipo number");
    
        if(arr.length !== numero) throw new RangeError("Tamanho inválido");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Reference Error!!!");
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log("Type Error!!!");
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log("Range Error!!!");
            console.log(e.message);
        }
        else{
            console.log("Erro inesperado!!!" + e);
        }
    }
}

console.log(validaArray());
console.log(validaArray(5,5));
console.log(validaArray([],"s"));
console.log(validaArray([], 5));
console.log(validaArray([1,2,3,4, 5],5));