<?php

require "Usuaria.php";

$usuaria = new Usuaria;
$usuaria->email = $_POST['email'];
$usuaria->senha = $_POST['senha'];

$usuaria->senha = md5($usuaria->senha);
$validar = $usuaria->login();

if ($validar) {
    print_r(json_encode($validar));
} else {
    return false;
}
