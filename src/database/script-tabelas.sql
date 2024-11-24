create database souls;
use souls;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(25),
classe varchar(30)
);

create table quiz(
    idQuiz int primary key auto_increment,
    fkUsuario int,
    constraint fkUsuarioQuiz foreign key (fkUsuario) references usuario(idUsuario),
    rCertas int,
    rErradas int
);