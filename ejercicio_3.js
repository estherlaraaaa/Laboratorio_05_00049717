function fibonacci(x){
    var fibo = [0,1];
    for(let i=2; i<x ; i++){
        fibo.push(fibo[i-1]+fibo[i-2]);
    }
    return fibo;
}