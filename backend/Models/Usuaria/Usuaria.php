<?php

require "../Conexao.php";

class Usuaria 
{
    public $id;
    public $nome;
    public $nascimento;
    public $telefone;
    public $telefoneContato;
    public $regiao;
    public $email;
    public $senha;

    public function cadastrarLogin()
    {
        $conexao = Conexao::getDb();

        $stmt = $conexao->query("INSERT INTO usuaria (nome, nascimento, telefone, telefone_contato, regiao, email, senha) VALUES ('$this->nome', '$this->nascimento', '$this->telefone', '$this->telefoneContato', '$this->regiao', '$this->email', '$this->senha')");
    
        if ($stmt->rowCount() > 0){
            return true;
        } else {
            return false;
        }
    }

    public function login() {
        $conexao = Conexao::getDb();
        
        $stmt = $conexao->query("SELECT * FROM usuaria WHERE email = '$this->email' AND senha = '$this->senha'");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
