// function setAreaName(){
//     var zipCode = +document.getElementById("zipcode").value;
//     var area = document.getElementById("area");

//     if(zipCode === 45200){area.value = "Golra"}else if(zipCode === 44210){
//         area.value = "Islamabad f7";
//     }
//     else if(zipCode === 44320){area.value = "islamabad federal board"}
//     else if(zipCode === 44310){area.value = " Islamabad Allama Iqbal open University"}
//     else{alert('invalid code')}
// }



// Nested Loop  is very clear to understandable in this code

// let count = 0;
// for(let i = 1; i <=3; i++)
//     {for(let j = 1;j<=3;j++)
//     {console.log(`i:${i},j:${j}`);
// count++;}}
// console.log({count})

// const firstNumber = 5;
// const secondNumber = 10;
// const sum = firstNumber + secondNumber;
// console.log(`The sum of ${firstNumber} and ${secondNumber} is:${sum}`)
// for (let i = 1; i<= 10; i++)
// {console.log(`5 X ${i} = ${5 * i}`


// )}
// for(var i = 1; i <= 10; i++){console.log(i)}

// for(var i = 2;i<=20;i +=2){console.log(i)}
// let sum = 0
// for(let i = 1; i <= 10;i++){sum += i;}
// // console.log(`sum: ${sum}`)
// let num = parseInt(prompt('Enter a number'))
// // for(var i = 1; i<=10;i++){console.log(num + " x " + i + " = " + (num * i))}
// let a =prompt('Enter word')
// // for(var i = 0 ;i <a.length; i++){console.log(a[i])}for
// for(let i = 1; i<=10; i++){console.log(`Multiplication table for ${i}:`)
// for(let j = 1;j <= 10; j++){console.log(`${i} x ${j} = ${i * j}`)}console.log('')}

// for(var i = 0; i<10; i++){for(var j = 0;j< 5;j++)
//     console.log(i,j)
// }
function changeImage(event){event.preventDefault();
    document.getElementById('myImage').src = "C:\Users\abc\Pictures\images.jpg"
}