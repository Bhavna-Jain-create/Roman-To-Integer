var romanToInt = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
}
var roman = "XVI"
var romanStr = roman.split("");
console.log(romanStr);
var count = 0;
for(i=0;i<romanStr.length;i++){
    if(romanStr[i] === "I" && romanStr[i + 1] === "V"){
        count += 4;
        i = i + 1;     
    }
    else if(romanStr[i] === "I" && romanStr[i + 1] === "X"){
       count += 9;
       i = i + 1; 32  
    }
    else if(romanStr[i] === "X" && romanStr[i + 1] === "L"){
        count += 40;
        i = i + 1;
    }
    else if(romanStr[i] === "X" && romanStr[i + 1] === "C"){
        count += 90;
        i = i + 1;
    }
    else if(romanStr[i] === "X" && romanStr[i + 1] === "C"){
        count += 90;
        i = i + 1;
    }
    else if(romanStr[i] === "C" && romanStr[i + 1] === "D"){
        count += 400;
        i = i + 1;
    }
    else if(romanStr[i] === "X" && romanStr[i + 1] === "M"){
        count += 900;
        i = i + 1;
    }
    else{
        count += romanToInt[romanStr[i]];
    }
}
console.log(count);