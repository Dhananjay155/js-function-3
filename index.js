
function calculateFactorial(num){
    if (num<0){
      return "Negative's number does not have factorial.";
    }
    if ((num==0) || (num==1)){
      return 1;
    }
    return num * calculateFactorial(num-1);
  }

console.log(calculateFactorial(5)); 

function isPrime(value){
    if (value<0){
      return "It is a negative number";
    }
    count = 0;
    for (i=1;i<value+1;i++){
      if (value%i===0){
        count ++;
      }
    }
    return count===2;
  }
  
console.log(isPrime(7)); 
console.log(isPrime(10)); 


function findLongestPalindrome(strings){
    res = "";
    for (i=0;i<strings.length;i++){
      ans = strings[i];
      ans = ans.split("").reverse().join("");
      if ((strings[i]==ans) && (res.length<ans.length)){
        res = ans;
      }
    }
    return res
  }
  
var strings = ["level", "noon", "hello", "racecar", "JavaScript"];
console.log(findLongestPalindrome(strings)); 

function countUniqueCharacters(string){
    var set = new Set();
    for (i=0;i<string.length;i++){
      if (string[i] !== " "){
        set.add(string[i])
      }
    }
    return set
  }
  
console.log(countUniqueCharacters("Hello World"));