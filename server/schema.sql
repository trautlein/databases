DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  Id int(8) NOT NULL AUTO_INCREMENT,
  UserName varchar(30) NOT NULL,
  PRIMARY KEY (`Id`)
);

CREATE TABLE messages (
  Id int(8) NOT NULL AUTO_INCREMENT,
  User varchar(30) NOT NULL,
  MessageText varchar(1000),
  CreatedAt timestamp(6),
  PRIMARY KEY (`Id`)
);

INSERT INTO messages (User, MessageText) VALUES ('Hans', "Hi guys, how are you all?");
INSERT INTO messages (User, MessageText) VALUES ('Sarah', "Doing well! ");
INSERT INTO messages (User, MessageText) VALUES ('Sarah', "How about you Hans?");
INSERT INTO messages (User, MessageText) VALUES ('Hans', "Great, thanks for asking!");
INSERT INTO messages (User, MessageText) VALUES ('UnrealDave', "I haven't seen you all in a while.");



/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

