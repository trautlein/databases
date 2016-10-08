var mysql = require('mysql');
var Promise = require('bluebird');

var connection = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'chat'
});
connection.connect();



exports.fetchMessages = function () {
  return new Promise ( (resolve, reject) => {
    connection.query('SELECT * FROM messages ORDER BY CreatedAt DESC', (err, results, fields) => {
      if (err) {
        reject(err);
      } else  {
        resolve(results);
      };
    })
  }).then(data => {
    console.log(data);
    return data;
  }).then( function() {
    connection.end();
  })
};

connection.end();
