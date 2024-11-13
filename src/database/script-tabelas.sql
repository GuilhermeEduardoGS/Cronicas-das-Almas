create database souls;
use souls;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(25)
);