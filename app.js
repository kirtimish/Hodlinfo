const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const cors = require('cors')
const app = express();
const {Client} = require('pg');
const client = new Client({
    host:'localhost',
    user:'postgres',
    post: 5432,
    password:'asd@1234',
    database:'postgres'
})

app.use(express.static(path.join(__dirname + 'public')));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

// INSERTING DATA

// async function saveData() {
//   const res = await fetch('https://api.wazirx.com/api/v2/tickers')
//   const result = await res.json();
  
//   const arr = Object.values(result);
//   const info = [];
//   for(let i=1;i<arr.length;i++){
//     if(i >10){
//       break;
//     }
//     info.push(arr[i])
//   }
//   client.connect(); 
//   for(let i=0;i<info.length;i++){
//        client.query(
//           `INSERT INTO "info" ("id","name", "last","buy","sell","volume","base_unit")  
//            VALUES ($1, $2, $3, $4, $5, $6, $7)`, [i+1,info[i].name, info[i].last, info[i].buy, info[i].sell, info[i].volume, info[i].base_unit]); 
//   }
//   client.end;
// }

// saveData();

app.get('/',(req,res) => {
  client.connect();
  client.query('SELECT * FROM info',(err,result) => {
    if(!err){
      res.status(200).json(result.rows)
    }
  })
})

app.listen('3000', () => {
  console.log('Server listening at port 3000')
})