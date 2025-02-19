// // // // // var array = ['axix','munir','iradat']
// // // // // var flag = prompt('enter word')

// // // // // for (var i = 0; i < array.length; i++){if (array[i]=== 'iradat'){flag = true}}
// // // // // if(flag === true){document.write('mil gya')}
// // // // // else{document.write('nai mila')}
// // // // // let name = ['ali','mubin']
// // // // // let hh = 'no'
// // // // // for(var i = 0;i < hh.length; i++){if(hh[i] === 'ali'){hh = 'yes'; console.log('mil gya');break}}
// // // // // let arr = [1,2,3,4,5,6,7,8,9,10]
// // // // // for (var i = 0; i < arr.length; i++){console.log(arr[i])}
// // // // // for ( let i = 1; i <= 10; i++){console.log(i)}
// // // // // for(let i = 2;i <=20; i +=2){console.log(i)}
// // // // // for(let i = 1;i <=60;i +=3){console.log(i)}
// // // // // for(let i = 10 ; i >=1; i--){console.log(i)}
// // // // // for (var i = 1 ;i <= 50; i++){console.log(i)}
// // // // // for (var i = 50; i >= 1; i--){console.log(i)}
// // // // let sum = 0;
// // // // for(let i = 1;i <= 10; i++){sum += i}console.log("sum:",sum)
// // // //     let num = 5;
// // // // for(let i = 1; i<=10; i++){console.log(`${num} x ${i} = ${num * i}`)}
// // // let number = 5;
// // // let factorial = 1;
// // // // for(let i = number; i>0;i--){factorial *= i;}console.log(`factorial of ${number} is ${factorial}`)
// // // var cleanestCities = ['karachi','multan','islamabad','riaz','mianwali']
// // // var cityToCheck = prompt('Enter city')
// // // if(cityToCheck === cleanestCities[0]){alert('It is one of the cleanest cities')}
// // // else if(cityToCheck === cleanestCities[1]){alert('It is one of the cleanest cities')}
// // // else if (cityToCheck === cleanestCities[2]){console.log('It is one of the cleanest cities')}
// // // else if(cityToCheck === cleanestCities[3]){console.log('It is one of the cleanest cities')}
// // // else if (cityToCheck === cleanestCities[4]){console.log('It is one of the cleanest cities')}
// // // else {alert('It is not on the list')}
// // /// for (var i = 0; i < cleanestCities.length; i++){if(cityToCheck === cleanestCities[i]){matchFound === 'yes';alert('It is one of the cleanest cities')}}
// // // if (matchFound === 'no'){alert('It is not on the list')}

// // // var matchFound = false;
// // // for(var i = 0;i < cleanestCities.length; i++){if(cityToCheck === cleanestCities[i]){matchFound = true;
// // //     alert('It is one of the cleanest cities');break;
// // // }}
// // // if(matchFound === false){alert('it is not on the list')}
// // var cleanestCities = ['karachi','multan','islamabad','riaz','mianwali']
// // var cityToCheck = prompt('Enter city')
// // var numElements = cleanestCities.length
// // // console.log(numElements)
// // var matchFound = false;
// // for (var i = 0;i <  numElements; i++){if(cityToCheck === cleanestCities[i]){matchFound = true;alert("It is one of the cleanest cities");break;}}
// // if(matchFound === false){alert('it is not on the list')}
// let cities = ['mianwali','karachi','islamabad']
// let cityToCheck = prompt('Enter city whatever you want to check')
// searched = false;
// for (var i = 0; i < cities.length; i++){if(cityToCheck === cities[i]){searched = true; alert('i searched required city');break;}}
// if(searched === false){alert('I could not searched city')}
var firstNames = ['aziz','habib','naseer']
var lastName = ['mianwli','karachi','kohat']
var fullName = []
for (var i = 0; i < firstNames.length; i++){for (var j = 0; j < lastName.length; j++){fullName.push(firstNames[i] + lastName[j])}}
console.log(fullName[i])