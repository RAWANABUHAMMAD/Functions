///1///
function small([n1,n2,n3,n4]){
    document.write(`${n1,n2,n3,n4} is the smallest`);
} 
 small([30,45,60,7])
 document.writeln("<br>");

///2///
function Alpha(text){
    let char = text.split("");
    let sorted = char.sort();
    let String = sorted.join("");
    return String;
}
document.write(Alpha('hello'));
document.writeln("<br>");


///3///
function check (number){
    if(number%2==0){
        return(`${number} is even` );} 
else{
    return(`${number} is odd` );}
}
  document.write(check(9));
  document.writeln("<br>");


///4///
function even(arr){
    let evenNum = arr.filter((num) => num % 2 === 0);
    return evenNum;
}
document.write(even([1, 2, 3, 4, 5, 6,7,8,9]));
document.writeln("<br>");

///5///
function AbsSum(arr){
    return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}
document.write(AbsSum([-1, -3, -5, -4, -10, 0]));
document.writeln("<br>");


//////////////////Mid/////////////////////////////

///1///
function factorial(n){
    let result=1;
    for(let i=1;i<=n;i++)
       result *= i;
    return result ;
}
document.write(factorial(8));
document.writeln("<br>");

///2///
function numbersOnly(array){
    return array.filter(item => typeof item !== 'string');
}
document.write(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']));
document.writeln("<br>");

///3///
function addUp(num) {
    let sum = 0;
    for (let i = num; i >= 0; i--) 
      sum += i; 
    return sum; }
 document.write (addUp (8) );
 document.writeln("<br>");


///4/// 
function minMaxLengthAverage(array){
    let min = Math.min(...array);
    let max = Math.max(...array); 
    let length=  array.length;
    let average=array.reduce((sum,current)=>sum+current,0)/length;
    return [min, max, length, average];
}
document.write(minMaxLengthAverage([7, 13, 3, 77, 100]));
document.writeln("<br>");

///5///
// function romanNumbers(number) {

//     let RomanNumeral =[
//         {value:1000,numeral:"M"},
//         {value:900,numeral:"CM"},
//         {value:80,numeral:"LXXX"},
//         {value:9,numeral:"IX"},
//         ]
//         let result=""
//         for (i=0;i<RomanNumeral.length;i++){
            
//              result+=RomanNumeral[i].numeral;  
//                 number-=RomanNumeral[i].value
         
//         }
//          return result;
//     }
//     document.write(convertToRoman(1989));
//     document.writeln("<br>");


//////////////////Advanced/////////////////////////////

///1////
function countWords(string){
    let words = string.trim().split(/\s+/);
    return words.length;
}
document.write (countWords ('hello from CodingAcademy!'));
 document.writeln("<br>");


///2//// 
function MultiplyByLength(array){
    let result=[]; 
    let length=array.length;
    for (let i = 0; i < array.length; i++){
  result.push(array[i]*length) ;}
     return result;
}
  document.write(MultiplyByLength([4,2,5]));
  document.writeln("<br>");

///3//// 

function endsWithString(str1, str2) {
    return str1.endsWith(str2);
  }
    document.write(endsWithString("CodingSchool", "Ac"));
    document.writeln("<br>");
    
  ///4//// 
   function repeat(text) {
     let result = ""; 
  
    for (let i = 0; i < text.length; i++) {
     result += text[i] + text[i];  
    }
    return result; }
     document.write(repeat("'Coding'"));
     document.writeln("<br>");

     // ///5//// 
     function findIndex(array, element) {
        let index = array.indexOf(element);
        return index+1;
      }
       document.write(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));
       document.writeln("<br>");
      