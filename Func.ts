function add(n1: number, n2: number){
    return n1+n2;
}

function printResult(num: number): void{
    console.log("res"+num)
}


printResult(add(5,9));
//'5''9'->59
let combinedValues: Function;

combinedValues=add;
//also combinedValues:(a:number, b:number)=>number;

//combinedValues=5// wont workas not a func

console.log(combinedValues(8,8));

