function convertir(x){
    binario="";
    while(x>1){
        binario =  x % 2 + binario;
        x = Math.trunc(x/2);
    }
    binario = x + binario;
    return binario;
}