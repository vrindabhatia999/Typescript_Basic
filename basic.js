"use strict";
function combine(n1, n2, resl) {
    var res;
    if (typeof n1 == 'number' && typeof n2 == 'number' || resl == "as-number") {
        res = +n1 + +n2;
    }
    else {
        res = n1.toString() + n2.toString();
    }
}
var combineAge = combine(20, 26, "as-number");
console.log(combineAge);
var combineName = combine('max', 'anna', "as-text");
console.log(combineName);
//worksfor bothcases number and string 
//union type ^
