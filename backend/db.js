const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "Ayushi@12344",
//   host: "localhost",
//   port: 5432,
//   database: "hostel"
// });
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
 ssl: {
  rejectUnauthorized: false // Set to true if you have a valid CA certificate
 }
})

pool.on("error", (error, client) => {
  console.log(error);
});

module.exports = {
  pool
};
