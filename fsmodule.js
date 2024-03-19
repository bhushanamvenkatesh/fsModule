let fs = require('fs')

// console.log('reading started asynchronusly')
// let text = fs.readFile("./content.txt", (err, data) => {
//     if (!err) {
//         console.log(data.toString())
//     }
//     else {
//         console.log('not available ')
//     }
// })

// console.log('readig done asynchronusly')

// console.log('reading data Synchronously')
// let data=fs.readFileSync('content.txt')
// console.log(data.toString())
// console.log('reading done synchronously')

// console.log('wring a file')
// fs.writeFile('./content2.txt','writing a file using writefile',(err)=>{
//     if(err){
//         console.log('eerr')
//     }
//     else{
//         console.log('writing success')
//     }
// })
// console.log('writing done')

// console.log('append data using append file ')
// fs.appendFileSync('content.txt','appending data to the exiting file')
// console.log('appending success')
// console.log('reading content.txt')
// let s=fs.readFileSync('content.txt')
// console.log(s.toString())
// console.log('reading done content.txt')


//Deleting a file 
// fs.unlink('unlink.txt',(err)=>{
//     if(err){
//         console.log('Error file not available')
//     }
//     else{
//         console.log('file deleted successfully')
//     }
// })

//Creating a folder using mkdir

// fs.mkdir('newfolder1',(err)=>{
//     if(err){
//         console.log('Creation failed')
//     }
//     else{
//         console.log('folder created successfully')
//     }
// }

// )
fs.rmdirSync('newfolder1')