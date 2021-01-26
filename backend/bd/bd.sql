drop database if exists quiz_login;
drop database if exists magnolia;

create database magnolia DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

use magnolia;

CREATE TABLE usuaria(
    id_usuaria int not null primary key AUTO_INCREMENT,
    nome varchar(180),
    nascimento date,
    telefone varchar(21),
    telefone_contato varchar(21),
    regiao varchar(80),
    email varchar(252) unique not null,
    senha varchar(60),
    data_de_registro DATETIME DEFAULT now()
)engine=InnoDB;

create table quiz_resultado(
    id_resultado int not null primary key AUTO_INCREMENT, 
    letra_escolhida varchar(10),
    id_usuaria int not null,
    foreign key(id_usuaria) references usuaria(id_usuaria)
)engine=InnoDB; 

CREATE TABLE perguntas(
id_pergunta int primary key not null auto_increment,
enunciado_txt varchar(512) not null,
enunciado_img varchar(512),
respostaA varchar(512),
respostaB varchar(512), 
respostaC varchar(512),
respostaD varchar(512),
respostaE varchar(512),
imagemA varchar(512),
imagemB varchar(512),
imagemC varchar(512),
imagemD varchar(512),
imagemE varchar(512)
);