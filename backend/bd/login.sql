create database quiz_login;

create table quiz_login.cadastro(
    id int not null primary key AUTO_INCREMENT,
    nome varchar(80) not null,
    idade int not null,
    email varchar(80) not null UNIQUE,
    senha char(32) not null
);