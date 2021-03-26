type Combinable= number |string;
type Conv='as-text'| 'as-number'


function combine(n1: Combinable,n2:  Combinable, resl: Conv){
   let res;
   if(typeof n1=='number' && typeof n2=='number'||resl=="as-number"){
       res=+n1 + +n2
   }else{
       res=n1.toString()+n2.toString();
   }
}
const combineAge=combine(20,26,"as-number");
console.log(combineAge);

const combineName=combine('max','anna',"as-text");
console.log(combineName);
//worksfor bothcases number and string 
//union type ^

