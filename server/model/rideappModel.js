import { Client } from 'pg';

const connection = 'postgres://Abdulrasaq:youngster@localhost:5432/ridedb';
const client = new Client({
  connectionString: connection,
});

client.connect((err) => {
  if(err){
    console.log(error)
  }else{
    console.log('connected')
  }
});

// client.query('SELECT * FROM Rideapp', (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message);
//   client.end();
// });
