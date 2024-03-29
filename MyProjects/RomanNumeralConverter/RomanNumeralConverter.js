function convertToRoman(num) {
 let arr=num.toString().split("").reverse();
 let roman=[];
 let zeros=[];
 switch(arr[0]){
     case "1":roman.push("I");break;
     case "2":roman.push("II");break;
     case "3":roman.push("III");break;
     case "4":roman.push("IV");break;
     case "5":roman.push("V");break;
     case "6":roman.push("VI");break;
     case "7":roman.push("VII");break;
     case "8":roman.push("VIII");break;
     case "9":roman.push("IX");break;
     default:zeros.push(0);
   };
 switch(arr[1]){
     case "1":roman.push("X");break;
     case "2":roman.push("XX");break;
     case "3":roman.push("XXX");break;
     case "4":roman.push("XL");break;
     case "5":roman.push("L");break;
     case "6":roman.push("LX");break;
     case "7":roman.push("LXX");break;
     case "8":roman.push("LXXX");break;
     case "9":roman.push("XC");break;
     default:zeros.push(0);
   };
 switch(arr[2]){
     case "1":roman.push("C");break;
     case "2":roman.push("CC");break;
     case "3":roman.push("CCC");break;
     case "4":roman.push("CD");break;
     case "5":roman.push("D");break;
     case "6":roman.push("DC");break;
     case "7":roman.push("DCC");break;
     case "8":roman.push("DCCC");break;
     case "9":roman.push("CM");break;
     default:zeros.push(0);
   };
  
 switch(arr[3]){
     case "1":roman.push("M");break;
     case "2":roman.push("MM");break;
     case "3":roman.push("MMM");break;
     default:zeros.push(0);
     
   };
  return roman.reverse().join("");
}

convertToRoman(36);