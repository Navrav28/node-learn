const fs = require("fs");
// fs.writeFileSync('fileStore/crud.txt', "this is a crud file");
// create file synchronously
// fs.writeFileSync('fileStore/crud1.txt', "this is a crud1 file");

//read file synchronously
// const data = fs.readFileSync('fileStore/crud.txt', 'utf8');
// console.log(data);

// delete file synchronously
// fs.unlinkSync('fileStore/crud1.txt');

// update file synchronously
// fs.appendFileSync('fileStore/crud.txt', " and i am using this file hello world");

// crud opreation with file system
// this is a input from command line
// console.log(process.argv[2]);
const operation = process.argv[2];
if (operation == "write") {
  const name = process.argv[3];
  const content = process.argv[4];
  const filePath = `fileStore/${name}.txt`;

  fs.writeFileSync(filePath, content);
} else if (operation == "read") {
  const name = process.argv[3];
  const content = process.argv[4];
  const filePath = `fileStore/${name}.txt`;

  const readData = fs.readFileSync(filePath, "utf-8");
  console.log(readData);
} else if (operation == "append") {
  const name = process.argv[3];
  const content = process.argv[4];

  const filePath = `fileStore/${name}.txt`;

  const apendData = fs.appendFileSync(filePath, content);
  //   console.log(apendData);
} else if (operation == "delete") {
  const name = process.argv[3];
  const content = process.argv[4];

  const filePath = `fileStore/${name}.txt`;
  const apendData = fs.unlinkSync(filePath);
  console.log("file has been deleted successfully");
  //   console.log(apendData);
}


// else if (operation == "read") {
//   const data = fs.readFileSync("fileStore/" + process.argv[3] + ".txt", "utf8");
//   console.log(data);
// } else if (operation == "delete") {
//   fs.unlinkSync(process.argv[3]);
// } else if (operation == "update") {
//   fs.appendFileSync("fileStore/" + process.argv[3] + ".txt", process.argv[4]);
// } else if (operation == "rename") {
//   fs.renameSync("fileStore/" + process.argv[3] + ".txt", process.argv[4]);
// } else {
//   console.log("Invalid");
// }
