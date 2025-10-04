const path = require('path');
const file = "fileDataStore/naveen.txt"
// it provide a extension name
// console.log(path.extname(file))
// it provide a directory name
console.log(path.dirname(file))
// it provide a file name 
console.log(path.basename(file))

// it privide  a full path of hole directory 
console.log(path.resolve("fileDataStore", "naveen.txt"))
 

//  global constant 
console.log(__dirname)
console.log(__filename)