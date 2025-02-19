// // // // // // // // // let name = 'aziz'
// // // // // // // // // console.log(name.toUpperCase())

// // // // // // // // // let student = 'SAQI'
// // // // // // // // // console.log(student.toLowerCase())
// // // // // // // // // let s = ['abid','saqib','adil']
// // // // // // // // // let b = s.toUpperCase()
// // // // // // // // // console.log(s)
// // // // // // // // // let name = 'axix'
// // // // // // // // // console.log(name.length)

// // // // // // // // // var fullName = 'ghous'
// // // // // // // // // var firstChar = fullName.slice(0,1).toUpperCase()
// // // // // // // // // console.log(firstChar)
// // // // // // // // // var result = firstChar + fullName.slice(1)
// // // // // // // // // console.log(result)
// // // // // // // // var name = 'abid'
// // // // // // // // var big = name.slice(0,1).toUpperCase()
// // // // // // // // console.log(big)
// // // // // // // // var result = big + name.slice(1)
// // // // // // // // console.log(result)
// // // // // // // // let life = 'life is not bed of flowers'
// // // // // // // // for(var i = 0; i < life.length; i++){console.log(life.slice(i,i+7) ==='flowers')}
// // // // // // // var text = 'pakistan is land of mountains'
// // // // // // // var user = prompt('Enter your word')
// // // // // // // for(var i = 0;i<text.length;i ++){if(text.slice(i,i+user.length).toLocaleLowerCase) === user.toLowerCase()}
// // // // // // // let life = 'life is not bed of flowers'
// // // // // // // let n = life.includes('bed')
// // // // // // // console.log(n)
// // // // // // // let position =life.indexOf('bed')
// // // // // // // console.log(position)
// // // // // // var text = 'pakistan is land of corrupt people'
// // // // // // if(text.indexOf('landu') !== -1){console.log('found'

// // // // // // )}else{console.log('not found')}
// // // // // // var  x = 'it is my home'
// // // // // // console.log(x.indexOf('myh'))
// // // // // // let name = 'my name is amir'
// // // // // // console.log(name.indexOf(i))va
// // // // // // var str = 'Ghous Ahmad'
// // // // // // console.log(str.replace('Ahmad','khan'))
// // // // // // let x = 'fruits are expensive.vegetables are not expensive.meat is expensive'
// // // // // // console.log(x.replaceAll(/expensive/g,'cheap'))
// // // // // Math.round(2.1)
// // // // // // console.log(Math.round(2.1))
// // // // // // let a = 2.5
// // // // // // let b =Math.round(a)
// // // // // // console.log(b)
// // // // // let a = 2.1
// // // // // // let b =Math.ceil(a)
// // // // // // console.log(b)
// // // // // let b = Math.floor(a)
// // // // // console.log(b)
// // // // // let randomNumber = Math.random()
// // // // // console.log(randomNumber)
// // // // // var array = ['ghous','ahmad','zain','ali']
// // // // // for (var i = 0; i <array.length; i++){console.log(i)}
// // // // var arr = ['karachi','islamabad','lahore','mianwali']
// // // // // var flag = false
// // // // // for( var i = 0; i < arr.length; i++){if(arr[i] === 'islamabad'){flag = true}}
// // // // // if (flag){console.log('mil gya')}
// // // // // else {console.log('nai mila')}
// // // // var b = arr.includes('islamabad')
// // // // console.log(b)
// // // // if(b === true){console.log('find')

// // // // }
// // // // else {console.log('not find')}
// // // // var arr = ['karachi','islamabad','lahore','mianwali']
// // // // var gh = false;
// // // // for (var i = 0; i < arr.length; i++){if(arr[i]=== 'quetta')}
// // // // let name = ['ali','muhib','saqi','izt','mobeen']
// // // // let find = 'no'
// // // // for (var i = 0;i <name.length; i++){if(name[i] === 'ali')}{find = 'yes';console.log('i found')}
// // // // let name = 'Hameed';
// // // // name = name + ' Khan'
// // // // console.log(name)
// // // // let number = [10,8,7,2,11,19,1]
// // // // let minumber = number[0]
// // // // for(let i = 0; i < number.length; i++){if(number[i] < minumber){
// // // //     minumber = number[i]
// // // // }}
// // // // console.log(minumber)
// // // // let number = [3,8,8,8,1]
// // // // let minumber = [0]
// // // // for(var i = 0; i <number.length; i++){if(number[i] < minumber){minumber = number[i]}}
// // // // console.log(minumber)
// // // // let number = [8,2,7,44]
// // // // let maxnumber = [0]
// // // // for(var i = 0; i < number.length; i++){if(number[i] > maxnumber){maxnumber = number[i]}}
// // // // console.log(maxnumber)
// // // // let numbers = [10,5,8,20,15]
// // // // let maxnumber = Math.max(...numbers)
// // // // console.log(maxnumber)
// // // let number = [30,59,79,1]
// // // let minumber = Math.min(...number)
// // // console.log(minumber)
// // // let name = ['abid','umer','faheem','ilyas']
// // // let fill = name.fill('hneef',1,2)
// // // console.log(fill)
// // // let name = ['munir','saqi','imran','emar','ali']
// // // let sort = name.sort()
// // // console.log(sort);
// // // let numbers = [10,5,40,25]
// // // let sortd = numbers.sort((a,b)=> b - a)
// // // console.log(sortd)
// // // let numbers = [4,3,2,8]
// // // console.log(numbers)
// // // let mapmethod = numbers.map((value)=> value * 8)
// // // console.log(mapmethod)
// // let student = ['abid','hashim','umer']
// // // let neww =student.indexOf('hashim')
// // // console.log(neww)
// // let includesmethod = student.includes('hashimu')
// // console.log(includesmethod)
// // if(includesmethod){console.log('Yes available')}
// // else{console.log('not searched')}
// // let name = [['abid','saqi'],['umair','younis'],['waseem','shbir']]
// // let flat = name.flat()
// // console.log(flat)
// // let students = ['abid','shbir','saleem'];
// // // let boys = ['anees','alam']
// // // let girl = ['sumaia','klsoom','haider']
// // // let cocatarray = students.concat(boys,girl)
// // // console.log(cocatarray)
// // // let atmethod = students.at(2)
// // // console.log(atmethod)
// // // let joinmethod = students.join('*')
// // // console.log(joinmethod)
// // let tostring = students.toString()
// // console.log(tostring)
// let cities = ['karachi','lahore','rawalpindi']
// // let fillmethod = cities.fill('lahore',0,'lahore',1)
// // console.log(fillmethod);
// // let ne = cities.fill('karachi',1)
// // console.log(ne)

function mypersonalData(){
    document.write('My name is Azizullah');
    document.write('<br>');
    document.write('My education is Graduation');
    document.write('<br>');
    document.write('My profession is web developing');
    document.write('<br>')
    document.write('<br>')
}