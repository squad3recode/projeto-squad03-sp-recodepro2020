<?php
    session_start();

    $email = $_POST['email']; 
    $senha = $_POST['senha'];
    
    if (strlen($email) > 3 && strlen($senha) > 3) {
        $senha_cripto = md5($senha);
    
        $conn = mysqli_connect("localhost", "root", "", "quiz_login");
    
        // Execução da instrução SQL
        $resultado_consulta = $conn->query("SELECT * from cadastro where email = '$email' AND senha = '$senha_cripto'");
    
        // $usuarios = Retorno da consulta no banco de dados
        $cadastro = mysqli_fetch_assoc($resultado_consulta);
    
        if($cadastro == null){
            echo "
            <script>
                alert('E-mail ou senha inválidos!')
                location.href = '../login.php'
            </script>
            ";
        }else{
            $_SESSION['nome'] = $cadastro["nome"];
            $_SESSION['idade'] = $cadastro["idade"];
            $_SESSION['email'] = $cadastro["email"];
            $_SESSION['id'] = $cadastro["id"];
            
            header('Location: ../perfil.php');
        }

    }
    else {
        echo "
            <script>
                alert('E-mail ou senha inválidos!')
                location.href = '../login.php'
            </script>
        ";
    }
?>