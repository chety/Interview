### `Fs` module is a `node.js` core module to work with _files and directories_

- Always use the `promises namespace` on the built-in modules. You can then use the `async` and `await` operators to make code synchronous without blocking program execution.
- Whenever you are creating a directory, make sure that you wrap it in a **try/catch**. The default behavior in `Node.js` is _to throw an error when you try to create a directory that already exists_. If you just want to check if a directory exists or not, you can use the `stat` method. _Note that this method does not exist on the `promises` namespace, but on the main `fs` object_.

```js
const fs = require('fs').promises;
const path = require('path');

// const fs = require('fs').promises; // for using readdir as below we have to import fs with promises

// async function readDirectory() {
//   console.log("Start");
//   const items = await fs.readdir("stores",{withFileTypes:true});
//   for (const item of items) {
//     const type = item.isDirectory() ? "folder" : "file";
//     console.log(`${item.name} ${type}`)
//   }
//   console.log("End");
// }
// // readDirectory();

// async function readFiles(folder) {
//   const items = await fs.readdir(folder,{withFileTypes:true});
//   items.forEach(item => {
//     if (item.isDirectory()) {
//       readFiles(`${folder}/${item.name}`)
//     }else{
//       console.log(`${item.name} found in ${folder}`)
//     }
//   })
// }
// readFiles("stores")

async function findSalesFiles(folder) {
  const files = [];

  async function findFiles(folder) {
    const items = await fs.readdir(folder, { withFileTypes: true });
    for (const item of items) {
      const dir = path.join(folder, item.name);
      if (item.isDirectory()) {
        await findFiles(dir);
      } else if (path.extname(item.name) === '.json') {
        files.push(dir);
      }
    }

    //!! You can not use await in forEach. Because forEach is not async aware
    // items.forEach(item => {
    //   const {name} = item
    //   if (item.isDirectory()) {
    //     await findFiles(`${folder}/${name}`)
    //   }else if(name === "sales.json"){
    //     files.push(`${folder}/${name}`)
    //   }
    // })
  }

  await findFiles(folder);
  return files;
}

//creating directories

async function createDirectory(path) {
  //create directory. Lets pretend path = "sales/201/newDirectory" If "sales/201" does not exist exception will be thrown
  //For eliminating this use recursive:true as second parameter. This will create parent directory(here -> sales/201 )
  await fs.mkdir(path, { recursive: true });
}

//better way to create directory
async function createDirectorySafely(path) {
  try {
    await fs.mkdir(path);
  } catch (error) {
    console.error(`${path} already exist.\nDetails:`,error);
  }
}

async function createFile() {
  //will create an empty file. If you want any content change String() to whatever you want
  await fs.writeFile(path.join(__dirname, 'greeting.txt'), String());
}

function utilities() {
  console.log(`Directory name:${__dirname}`);
  console.log(`File Name: ${__filename}`);
  console.log(`Extension: ${path.extname('sales.json')}`);
  console.log('Parse ->  ', path.parse('stores/201/sales.json'));
}

async function getTotal(filePath) {
  const buffer = await fs.readFile(filePath);
  return JSON.parse(buffer).total;
}

//default flag is w which stands for rewrite the file
async function appendToFile(filePath, value) {
  await fs.writeFile(filePath, `${value}\r\n`, { flag: 'a' });
}

async function calculateTotalSum() {
  const saleFiles = await findSalesFiles(path.join(__dirname, 'stores'));
  let total = 0;
  for (const file of saleFiles) {
    const subTotal = await getTotal(file);
    total += subTotal;
  }
  return total;
}

async function main() {
  // console.log(files);

  // const dir = path.join(__dirname, 'stores', '201', 'newSales');
  // await createDirectory(dir);
  // await createDirectorySafely(dir);
  // await createFile();

  // await createTotalDirectory();
  // await readFile();

  const salesTotalDir = path.join(__dirname, 'salesTotal');
  await createDirectorySafely(salesTotalDir);
  const total = await calculateTotalSum();

  await appendToFile(path.join(salesTotalDir, 'total.txt'), total);
}

main();

```
