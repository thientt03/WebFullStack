const fs = require('fs')

const obj = {
    a:5,
    b:6,
}
// Json
const jsonObj = JSON.stringify(obj)

fs.writeFile("test.txt", jsonObj, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("hihi");
    }
});
console.log("End write")

console.log("Begin read")
fs.readFile("test.txt",(err,data) => {
    if(err){
        console.log(err);
    }else{
        const dataObj = JSON.parse(data);
        console.log("File data", dataObj.a);
    }
});
console.log("End write")