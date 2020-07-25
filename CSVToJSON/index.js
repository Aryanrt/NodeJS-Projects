const csvFilePath = 'customer-data.csv'
const fs = require('fs')
const csv = require('csvtojson')
let arr = []


csv()
  .fromFile(csvFilePath)
  .then((jsonArrayObj)=>{ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj); 
     fs.writeFile('customer-data.json',JSON.stringify(jsonArrayObj,null,2),()=>{console.log('done');});
   })
