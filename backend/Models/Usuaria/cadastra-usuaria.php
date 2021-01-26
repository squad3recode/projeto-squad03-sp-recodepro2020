<?php

require "Usuaria.php";

$usuaria = new Usuaria;
$usuaria->nome = $_POST['nome'];
$usuaria->nascimento = $_POST['dataDeNascimento'];
$usuaria->telefone = $_POST['telefone'];
$usuaria->telefoneContato = $_POST['telefoneContato'];
$usuaria->regiao = $_POST['regiao'];
$usuaria->email = $_POST['email'];
$usuaria->senha = $_POST['senha'];

$usuaria->senha = md5($usuaria->senha);
$validar = $usuaria->cadastrarLogin();

if ($validar) {
    echo json_encode(true);
} else {
    echo json_encode(false);
}
