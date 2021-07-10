/*
s=""
for(i=1;i<=5;i++){
  s=s+ "*"
}
console.log(s)
*/ 
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
/*
for(r=1;r<=6;r++){
  s=""
  for(c=1;c<=5;c++){
    s=s+ "*"
  }
  console.log(s)
}
*/

/*
*
**
***
****
*****
*/
/*
for(r=1;r<=5;r++){
  
  s=""
  for(c=1;c<=r;c++){
    s= s+ "*"
  }
  console.log(s)
}
*/
a=5
for(r=1;r<=5;r++){
  
  s1=""
  for(s=1;s<=a;s++){
    s1= s1+ ""
  }
  s=""
  for(c=1;c<=r;c++){
    s=s+ "*"
  }
  console.log(s1+s)
  a=a-1
  
}
/*
x=5
for(r=1;r<=5;r++){
    s1=""
  for(s=1;s<=x;s++){
    s1=s1+ " "
  }
  
  s=""
  for(i=1;i<=r;i++){
    s=s+ "*"
  }
  console.log(s1+s)
  x=x-1
}
*/
/*
for(i=1;i<=5;i++){
  console.log(i)
}
i=6 
while(i<=5){
  console.log(i)
  i++
}
i=6
do{
  console.log(i)
  i++
}while(i<=5)

//length->8
s='Abhishek'
//length->8
for(i=0;i<=s.length-1;i++){
console.log(s[i])
}
s='Abhishek'
console.log(s.substring(0,4))
//
s='Abhishek'
for(i=0;i<=s.length-1;i++){
console.log(s.substring(0,i+1))
}
s="Abhishek"
for(t of s){
  console.log(t)
}

//strings can't be updated
 

*/
/*
 s = "Abhishek"
 s1=s.substring(0,3) //Abh 
 s2=s.substring(4)   //shek 
 s = s1+ "i" + s2 
 console.log(s)
 */
 /*
 s="China will lose soon"
 s1 = ""
 s2 = ""
 for(t of s){
   s1 = s1+t 
   s2 = t+s2 
   
 }
console.log(s1,s2)
*/
/*
s = "China will lose to India"
s = s+" "
word = ""
for(t of s){
  if(t != " "){
     word = word+t
  }
  else{
     console.log(word)
     word=""
  }
}
*/
/*
//array 
a = [10,20,30,40,50,60]
console.log(a.length)
console.log(a[0])
for(t of a){
  console.log(t)
}

for(i=0;i<=a.length-1;i++){
  console.log(i)
}

for(k of a){
  console.log(k)
}
*/
//Assignment 
1.fizz Bizz Problem
1-100
3=>fizz
5=>Buzz
15=>fizzBuzz
2.(Check Palindrome)S = "Madam is walking on the street"



c3 = 0 
c5 = 0 
for(i=1;i<=100;i++){
  s=""
  c3++
  c5++
  if(c3 == 3){
    s=s+"Fizz"
    c3 = 0 
  }
   if(c5 == 5){
     s=s+"Buzz"
     c5=0
  }
  if(s == ""){
    console.log(i)
  }
  else{
    console.log(s)
  }
}


//Assignment
s = "madam is walking with her dad and mom"
s=s + " "
word = ""
revword=""
for(k of s){
  if(k != " "){
    word=word+k
    revword = k + revword
}
else {
  //rev = word.split("").reverse().join("")
  //if(rev == word){
  //   console.log(word)
  //  }
  if(word == revword){
     console.log(word)
  }
   word = ""
   revword = ""
 }
}