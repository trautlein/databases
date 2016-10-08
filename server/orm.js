/* You'll need to
 *   npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'root');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('users', {
  Id: {
    type: Sequelize.INTEGER, 
    allowNull: false, 
    autoIncrement: true,
    primaryKey: true
  },
  UserName: Sequelize.STRING
});

var Messages = db.define('messages', {
  Id int(8) NOT NULL AUTO_INCREMENT,
  User varchar(30) NOT NULL,
  MessageText varchar(1000),
  CreatedAt timestamp(6),
  PRIMARY KEY (`Id`)

  Id: {
    type: Sequelize.INTEGER, 
    allowNull: false, 
    autoIncrement: true, 
    primaryKey: true
  },
  User: {
    type: Sequelize.STRING,
     allowNull: false
  },
  MessageText: Sequelize.STRING,
  TimeCreated: Sequelize.DATE(6),

});

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
User.sync()
  .then(function() {
    // Now instantiate an object and save it:
    return User.create({username: 'Jean Valjean'});
  })
  .then(function() {
    // Retrieve objects from the database:
    return User.findAll({ where: {username: 'Jean Valjean'} });
  })
  .then(function(users) {
    users.forEach(function(user) {
      console.log(user.username + ' exists');
    });
    db.close();
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });
