//1)
let greetings= "Hello world" ;
greetings= greetings.slice(0,6)+ (greetings.charAt(6).toUpperCase() + greetings.slice(7))
console.log(greetings)



//2)
let str="Q1W2E3R4T5Y"
let str2 = "";
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c >= "0" && c <= "9"){
            str2 += "Number, ";
        }
        else
            str2 += "String, ";
    }
console.log(str2);
//////////////////////////
let str3="Q1W2E3R4T5Y"
let str4 = "";
let i=0;
let c='';
    while (c = str3[i], i < str3.length){
        if (c >= "0" && c <= "9"){
            str4 += "Number, ";
        }
        else
            str4 += "String, ";
            i++
    }
console.log(str4);



//3)
for (let x=13; x>=3; x--) {

    if (x % 2 === 0) {
            console.log(x + " even");   
    }
    else {
            console.log(x + " odd");
    }
}

let x=13;
while (x>=3) {
    
    if (x % 2 === 0) {
        console.log(x + " even");   
    }
    else {
        console.log(x + " odd");
}
    x--;
}













