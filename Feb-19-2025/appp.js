// var arr =[['ghous','ahmad'],['zain','khan']]
// for(var i = 0; i< arr.length; i ++){for(var j = 0 ; j < arr[i].length;j++){console.log(arr[i][j])}}
// for (var i = 0; i < 5; i++){
//     for(var j = 0; j < 5 ; j++){console.log(i,j)}
// }
// function submitForm(){
//     var name =document.getElementById('name');
//     var email = document.getElementById('email')
//     if(name.value.trim() && email.value.trim()){console.log('name--->',name.value);console.log('email--->',email.value)
//         name.value = '';
//     email.value= '';
//     }
// }
// function submitForm(){
//     var name = document.getElementById('name');
//     var email = document.getElementById('email');
//     if(name.value.trim() && email.value.trim()){console.log('name--->',name.value);console.log('email--->',email.value);
//         name.value = '';
//         email.value = '';
//     }else{console.log('plz enter value')}
    
// }
// function submitData(){
//     var name = document.getElementById('name');
//     var fatherName = document.getElementById('fatherName');
//     var email = document.getElementById('email');
//     if(name.value.trim() && fatherName.value.trim && email.value.trim()){
//         console.log('name--->',name.value);
//         console.log('fathename--->',fatherName.value);
//         console.log('email---->',email.value);
//         name.value ='';
//         fatherName.value = '';
//         email.value = '';
//     }else{console.log('plz enter value')}
// }
// var name = 'aZizUllAh';
// var firstChar = name.slice(0,1)
// console.log(firstChar)
// var otherChar = name.slice(1)
// console.log(otherChar)
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// var newName = firstChar + otherChar
// console.log(newName-)
// let text = 'what is your name?';
// for(var i = 0; i < text.length; i++){console.log(text.slice(i,i + 4) === 'your')}
// let text = 'my area is mianwali'
// let search = prompt('Enter word you want to search')
// for(let i = 0; i< text.length; i++){if(text.slice(i,i+search.length)=== search){alert('found')}
// var text = 'all man are fond of girls';
// var search = prompt('enter word you search');
// search = search.toLowerCase()

// isAvailable = false;
// for(var i = 0; i < text.length; i++){if(text.slice(i,i + search.length) === search){isAvailable = true}}
// if(isAvailable === true){alert('I found word you searching')}

// var firstNames = 'Azizullah'
// // var firs = firstNames.slice(0,1)
// // console.log(firs)
// var nsj =firstNames.charAt(3)
// console.log(nsj)
// let fruite = 'mango'
// let nnn = fruite.charAt(0);
// console.log(nnn)
// let name = prompt('Enter name');
// let age = parseInt(prompt('Enter age'));
// let education = prompt('Enter education');
// let city = prompt('Enter city');

// if(name === 'aziz' || age < 20 || education === 'matric' ||  
//     city === 'kot'){alert('successful')}
// else{alert('unsuccessful')}
// let userName = prompt('Enter your name');
// let age = parseInt(prompt('Enter your age'))
// let city = prompt('Enter your city')
// if(userName === 'john' || age < 18 ||city === 'Mianwali'){alert('Access granted')}else {alert('Access Denied')}
console.log(!true)
var value = 'hello'
var s = !!value
console.log(typeof s)