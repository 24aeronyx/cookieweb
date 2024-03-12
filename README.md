# Repository Praktikum Desain Web

CREATE DATABASE pabw-praktikum

CREATE TABLE user(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
fullname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
umur INT(11) NOT NULL,
role ENUM('user','admin') NOT NULL
)

CREATE TABLE logs(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
pesan VARCHAR(255) NOT NULL,
waktu TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

# Dummy

{
"fullname":"Bagus Tri",
"email":"bagustri@gmail.com",
"password":"slurpi",
"umur":"20",
"role":"user"
}
