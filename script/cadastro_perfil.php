<?php
session_start();

$nome = $_POST['nome'];
$idade = $_POST['idade'];
$email = $_POST['email'];
$senha = $_POST['senha'];


if (strlen($nome) > 3 && strlen($email) > 3 && strlen($senha) > 3 && $senha) {


    $conn = mysqli_connect("localhost", "root", "", "quiz_login");
    
    $senha_cripto = md5($senha);    

    $sql = "INSERT INTO cadastro (nome, idade, email, senha) values ('$nome', '$idade', '$email', '$senha_cripto')";
    $conn->query($sql);

    $_SESSION['nome'] = $nome;
    $_SESSION['idade'] = $idade;
    $_SESSION['email'] = $email;

    echo "<script>
            alert('Cadastro efetuado!')
            window.location.href = '../perfil.php'
        </script>
        ";
}

else if (strlen($nome) <= 3) {
    echo "<script>
        alert('Digite um nome válido para realizar o cadastro!')
        window.location.href = '../cadastramento.php'
    </script>
    ";
}
else if (strlen($email) <= 3) {
    echo "<script>
        alert('Digite um e-mail válido para realizar o cadastro!')
        window.location.href = 'cadastramento.php'
    </script>
    ";
}
else if (strlen($senha) <= 3) {
    echo "<script>
        alert('Digite uma senha válida para realizar o cadastro!')
        window.location.href = 'cadastramento.php'
    </script>
    ";
}

?>