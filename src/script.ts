
const greeting:string="Hallo, TypeScript";
console.log(greeting);

function mult(a:number,b:number):number{
    return a*b;
}
console.log(mult(25,25));




function isEven(x:number):boolean{
    if(x%2===0){
        return true;
    }else{
        return false;
    }
    //return x%2===0?true:false;
}
console.log(isEven(12));

function greetUser(username:string):string{
    return `Hallo, ${username}!!!`;
}
let user = {username:'Donald'};
console.log(greetUser(user.username));

const numbers:number[]=[12,-4,67,87,34,-77,90,-100];
function filterPositiveNumbers(arr:number[]):number[]{
      return arr.filter(n => n>0);
} 
const newNumbers=filterPositiveNumbers(numbers);
console.log(newNumbers)