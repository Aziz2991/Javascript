// function abc(){
//     console.log('hello');

// }
// abc();
// abc();
// abc();
// abc();
// function abc(name){
//     console.log(name)

// }
// abc('Ghous Ahmad');
// abc('zain')
// function foo(a,b,c){
// console.log(c)
// }
// foo('hello',3455,true,)
// function printName(name){
//     document.write(name)
// }
// var name = prompt('Enter your name')
// printName(name)
// function myFunc(a,b){
//     return a + b;
// }
// var result = myFunc(5,10)
// console.log(result)

// function abc(a,b){
//     return a % b;
// }
// abc(6,8)
// var result = abc(6,8)
// console.log(result)
// function abc(a,b){
//     var output = a * b;
//     return output;

// }

// console.log(abc(5,5) + 5)
// console.log(abc(7,2) + 7)

// function ad(){
//     var abc = 'ghous ahmed'
//     return abc;
// }
// // console.log(ad())
// var products = ['Laptop','phone','tablet','smartwatch']
// function displayProducts(){let list= document.getElementById('productlist')

// list.innerHTML = products.forEach(products =>{let li = document.createElement('li')})


// }
// for(i = 0; i < products.length; i++){}
let students = ['umer','hashir','naveed'];
let scores = [320,230,480]
let totalMarks = 500;
for(let i = 0; i < students.length; i ++){let percentage = (scores[i]/totalMarks)* 100;
    document.write(`Scores of ${students[i]} is $ {scores[i]} . Percentage:${percentage}%<br>`);
}