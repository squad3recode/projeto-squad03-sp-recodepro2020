<?php

class Conexao
{
    public static function getDb()
    {
        $conn = new PDO("mysql:host=localhost;dbname=magnolia;charset=utf8",
        "root",
        "");

        if ($conn) {
            return $conn;
        } else {
            echo "<h1>Erro ao tentar realizar conexão</h1>";
        }
    }
}
