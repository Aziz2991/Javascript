// // // // // // // // // // // // // // // // // // // // // // // var cleanestCities = ['mianwali','kohat','kamr']
// // // // // // // // // // // // // // // // // // // // // // // var cityToCheck = prompt('Enter your city')
// // // // // // // // // // // // // // // // // // // // // // // cityToCheck = cityToCheck.toLowerCase()
// // // // // // // // // // // // // // // // // // // // // // // isAvailable = false;
// // // // // // // // // // // // // // // // // // // // // // // for(var i = 0; i < cleanestCities.length; i++){if(cityToCheck === cleanestCities[i]){isAvailable = true; break}}
// // // // // // // // // // // // // // // // // // // // // // // if(isAvailable === true){alert('I searched')}if(isAvailable === false){alert('I could not se
// // // // // // // // // // // // // // // // // // // // // // //  var firstChar = cityToCheck.slice(0,1)

// // // // // // // // // // // // // // // // // // // // // // //  var otherChars = cityToCheck.slice(1)
// // // // // // // // // // // // // // // // // // // // // // //  firstChar = firstChar.toUpperCase()
// // // // // // // // // // // // // // // // // // // // // // //  otherChars = otherChars.toLowerCase()
// // // // // // // // // // // // // // // // // // // // // // //  var newe = firstChar + otherChars
// // // // // // // // // // // // // // // // // // // // // // //  console.log(newe)
// // // // // // // // // // // // // // // // // // // // // // var name = 'azizULLah'
// // // // // // // // // // // // // // // // // // // // // // var firstChar = name.slice(0,1)
// // // // // // // // // // // // // // // // // // // // // // console.log(firstChar)
// // // // // // // // // // // // // // // // // // // // // // var otherChars = name.slice(1)
// // // // // // // // // // // // // // // // // // // // // // firstChar = firstChar.toUpperCase()
// // // // // // // // // // // // // // // // // // // // // // otherChars = otherChars.toLowerCase()
// // // // // // // // // // // // // // // // // // // // // // var namee = firstChar + otherChars
// // // // // // // // // // // // // // // // // // // // // // console.log(namee)

// // // // // // // // // // // // // // // // // // // // // var name = 'aziUllaH';
// // // // // // // // // // // // // // // // // // // // // var firstChar = name.slice(0,1)
// // // // // // // // // // // // // // // // // // // // // var otherChars = name.slice(1);
// // // // // // // // // // // // // // // // // // // // // firstChar = firstChar.toUpperCase();
// // // // // // // // // // // // // // // // // // // // // otherChars = otherChars.toLowerCase()
// // // // // // // // // // // // // // // // // // // // // var modified = firstChar + otherChars
// // // // // // // // // // // // // // // // // // // // // console.log(modified)
// // // // // // // // // // // // // // // // // // // // var month = prompt('Enter a month')
// // // // // // // // // // // // // // // // // // // // var charsInMonth = month.length
// // // // // // // // // // // // // // // // // // // // if(charsInMonth > 3){monthAbbrev = month.slice(0,3)}
// // // // // // // // // // // // // // // // // // // let life = 'Life is not a bed of flowers'
// // // // // // // // // // // // // // // // // // // for(var i = 0; i < life.length; i++){alert(life.slice(i,i + 7)=== 'of')}
// // // // // // // // // // // // // // // // // // var text = 'she loves him more'
// // // // // // // // // // // // // // // // // // for(var i = 0; i < text.length ; i++){if(text.slice( i,i + 12)==='him'){}}let 
// // // // // // // // // // // // // // // // // let life = 'life is not bed of flowers'
// // // // // // // // // // // // // // // // // // console.log(life.length)
// // // // // // // // // // // // // // // // // // console.log(n)
// // // // // // // // // // // // // // // // // // for(var i = 0; i < life.length; i++){console.log(life.slice(i,i + 26)=== 'flowers')}
// // // // // // // // // // // // // // // // // let sear = life.includes('notg')
// // // // // // // // // // // // // // // // // console.log(sear)
// // // // // // // // // // // // // // // // // var text = 'pakistan is land of mountains'
// // // // // // // // // // // // // // // // // var find = prompt('Enter a word for find')
// // // // // // // // // // // // // // // // // find = find.toLowerCase()
// // // // // // // // // // // // // // // // // seen = false;
// // // // // // // // // // // // // // // // // var ab = text.includes('find')
// // // // // // // // // // // // // // // // // if(find === text){seen = true}
// // // // // // // // // // // // // // // // // if(seen = true){alert('I found')}else{alert('sorry')}
// // // // // // // // // // // // // // // // let text = 'Hello, Javascript'
// // // // // // // // // // // // // // // // let search = prompt('enter word')
// // // // // // // // // // // // // // // // search = search.toLowerCase()
// // // // // // // // // // // // // // // // if(text.includes(search)){alert(`'${search}' found in the string`)}else{alert(`'${search}' not found in the string`)}
// // // // // // // // // // // // // // // let text = 'you are not honest'
// // // // // // // // // // // // // // // let search = prompt('enter word for search')
// // // // // // // // // // // // // // // search = search.toLowerCase()
// // // // // // // // // // // // // // // if(text.includes(search)){alert('I found searched')}else{alert('not found')}
// // // // // // // // // // // // // // // var text = 'pakistan is land of corrupt people'
// // // // // // // // // // // // // // // var search = prompt('Ente word')
// // // // // // // // // // // // // // // if(text.indexOf(search) !== -1) {console.log('found')}else{console.log('not found')}
// // // // // // // // // // // // // // var text = 'pakistan is land of people'
// // // // // // // // // // // // // // let find = prompt('Enter word by indexof')
// // // // // // // // // // // // // // if(text.indexOf(find)!== -1){alert('found')}else{alert('not found'                                                                              )}
// // // // // // // // // // // // // let name = 'my name is amir'
// // // // // // // // // // // // // console.log(name.indexOf(is))
// // // // // // // // // // // //  'use strict'
// // // // // // // // // // // //  let name = ['aziz','izt','love']
// // // // // // // // // // // //  let search = prompt('Enter word that you  search')
// // // // // // // // // // // //  isAvaialable = false;
// // // // // // // // // // // //  for(var i = 0; i<name.length; i++){if(search === name[i]){isAvaialable === true; break}}
// // // // // // // // // // // //  if(isAvaialable === true){alert('I searched')}
// // // // // // // // // // // //  if(isAvaialable === false){alert('I could not search')}
// // // // // // // // // // // for(var i = 0; i < 5; i++){console.log(i);for(var j = 0; j < 5 ; j++){console.log(j)}}
// // // // // // // // // // var text = ['My name is ghous ahmad']
// // // // // // // // // // for(var i = 0; i<text.length;i++){console.log(text.slice(i,i + 5) === 'ghous')}
// // // // // // // // // var text = 'My name is Ghous Ahmed';
// // // // // // // // // for(var i = 0; i < text.length; i++){console.log(text.slice(i, i + 5)=== 'Ghous')}

// // // // // // // // // let text = 'My name is aziz'
// // // // // // // // // for (var i = 0; i<text.length; i++){console.log(text.slice(i,i + 2) === "is")}
// // // // // // // // // let a = 'What is your name'
// // // // // // // // // let b = prompt('Enter word')
// // // // // // // // // flag = false;
// // // // // // // // // for(let i = 0; i < a.length; i++){console.log(a.slice(i,i + 4) === 'name')

// // // // // // // // // }
// // // // // // // // // if(flag === true){alert('found')}
// // // // // // // // // else{alert('not found')}
// // // // // // // // var text = 'my name is you know'
// // // // // // // // // var user = prompt('Enter name you search')
// // // // // // // // // user = user.toLowerCase()
// // // // // // // // // for( var i = 0; i < text.length; i++){if(text.slice(i,i +user.length) === user){console.log('found')}}
// // // // // // // // //  console.log(text.indexOf('namer'))
// // // // // // // // if (text.indexOf('myt') !== -1){console.log('found')}else{console.log('not found')}
// // // // // // //  let a = 'ghteous'.charAt(2)
// // // // // // //  console.log(a)
// // // // // // function isPalindrome(word){word = word.toLowerCase();
// // // // // //     let length = word.length;
// // // // // // }
// // // // // // for(let i = 0; i < length / 2; i++){if(word[i] !== word[length - 1 - i]){return false;}}

// // // // // var arr = [['ghous','ahmed'],['zain','khan']]
// // // // // // for (var i = 0; i < arr.length;i++){for(var j = 0; j < arr[i].length; j++)
// // // // // //     console.log(arr[i][j]);
// // // // // // }
// // // // // let flat = arr.flat()
// // // // // console.log(flat)
// // // // // for(var i = 0; i<flat.length;i++){console.log(flat[i])};
// // // // // var str = 'ghous ahmad'
// // // // // console.log(str.replace('ahmad','khan'))
// // // // var text = 'My name is aziz.aziz is the famous name.do you know what is meaning of aziz?'
// // // // console.log(text.replace(/aziz/g,'Azizullah'))
// // // // let number = 78669
// // // // let n = console.log(number.toString())
// // // // console.log(n)
// // // // console.log(typeof(number))

// // // // var num = 2.455857
// // // // console.log(num.toFixed(10))
// // // let text = 'what is my name?'
// // // // for (var i = 0; i < text.length; i++){console.log(text.slice(i,i + 4) === 'name')};
// // // // let a = text.includes(name)
// // // var input = prompt('Enter word')
// // // input = input.toLowerCase()
// // // for (var i = 0; i < text.length; i ++){if(text.slice(i,i + input.length)=== input){console.log('found')}}
// // // var text = 'what is your name'
// // // if(text.indexOf('your') !== -1){alert('found')}else {alert('Not found')}
// // let text = 'My work is farming vegetables'
// // // let input = prompt('Enter word')
// // // input = input.toLowerCase()
// // // if(text.indexOf(input) !== -1){alert('I found')}
// // // else {alert('Not found')}
// // console.log(text.lastIndexOf('work'))

// // let a = 'name'[0]
// // console.log(a)
// var name = 'my name is gulam khan.khan is famous word'
// console.log(name.replaceAll('khan','pthan'))
// let a = 89878
// let b = console.log(a.toString())
// console.log(b)
// let b = 897.99877
// let a = (b.toFixed(23))
// console.log(a)