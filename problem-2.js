function seriesOfNumbers(a){
    let result = [1];
    
    if(a === 0 || a === 1) return 1;
    
    for(let i = 2; i <= a; i++){
        result.push(result[i - 2] + 2)
    }
    
    return result.join(", ");
}

console.log(seriesOfNumbers(4))