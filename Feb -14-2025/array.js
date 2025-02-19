// // // // let boy = [['saqi','abid'],[23,43],[true,false],['klsoom','roheela','janymun']]
// // // // let flatmethod = boy.flat()
// // // // console.log(flatmethod)
// // // // const myArr =[[1,2],[3,4],[5,6]]
// // // // const newarr =myArr.flat()
// // // // console.log(newarr)


// // // // let students = ['nellam','klsoomy','life']
// // // // // let tostring = students.toString()
// // // // // console.log(tostring)
// // // // // let join = students.join('$')
// // // // // console.log(join)
// // // // let atmethod = students.at(1)
// // // // console.log(atmethod)

// // // let name = ['abid','hadi','hashim','zrnab']
// // // // let pop = name.pop()
// // // // console.log(pop)
// // // // let shif = name.shift()
// // // // console.log(shif)
// // // // let push = name.push('amir','pervaiz','omama')
// // // // console.log(push)
// // // // let unshift = name.unshift('Amin','Ghfor','Waqar')
// // // // console.log(unshift)
// // // // let splice =name.splice(1,1,'ikram')
// // // // document.write(name)
// // // // console.log(splice)
// // // let slice = name.slice(1,3)
// // // console.log(slice)
// // // let fruits = ['banana','orange','apple','guava']
// // // let fill = fruits.fill('water',1,3)
// // // console.log(fill)
// // // let fruits = ['banana','orange','apple']
// // // let sort = fruits.sort()
// // // console.log(sort)

// // // let numbers = [10,5,40,25]
// // // let nn = numbers.sort((a,b) => b-a)
// // // console.log(nn)
// // // let no = [1,2,3,4]
// // // let map = no.map((value) => value * 4)
// // // console.log(map)
// // let num = ['amir','saqi','mubin']
// // // let v = num.indexOf('saqi')
// // // console.log(v)

// // // let inc = num.includes('amir')
// // // console.log(inc)
// // let students = [['mubin','hashir'],['smar','ilm'],[true,false]
// // ]
// // let n = students.flat()
// // console.log(n)
// let a =['amir','mubashir'];
// let b = [true,false];
// let c = [1,2,3,4]
// let concat =a.concat(b,c)
// console.log(concata)
// let num = ['saqi','hashim','umer']
// // let join =num.join(' @ ')
// // let join = num.toString()
// // console.log(join)
// // let get = num.at(2)
// let get = num.length
// console.log(get)
//  let tasks = [];Array to stroe tasks
let tasks = [];
function addTask(task){tasks.push(task);
    console.log(`Added:$ {task}`)
}
function showTasks() {console.log('To-Do List:',tasks)}
function removeTask(){task.pop();
    console.log('Last Task removed')
}