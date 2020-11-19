<?php
    session_start();
    // Se não existir um valor no indice nome, então encerre a aplicação
    if (!isset($_SESSION['nome'])) {
        header('Location: index.php');
        exit;
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/estilo.css">
    <title>Magnólia - Perfil</title>
</head>
<body>
    <menu class="menu">
        <nav>
            <a class="logotipo" href="./index.php"><img src="./img/logotipo.svg" alt="Logotipo"></a>
            <a class="menu_btn" href="#">Por que fazer</a>
            <a class="menu_btn" href="#">Por que confiar</a>
            <a class="menu_btn" href=#>Sobre nós</a>
            <a class="menu_btn" href="#">Contato</a>
            <a class="menu_fazerquiz" href="#">Fazer Quiz</a>
            <a class="menu_btn" href="login.php">Login</a>
        </nav>
    </menu>

    <main class="perfil">
        <div>
            <h1>Perfil</h1>
            <h2>Nome:</h2>
            <p><?php echo $_SESSION['nome']; ?></p>
            <h2>Idade:</h2>
            <p><?php echo $_SESSION["idade"]; ?></p>
            <hr>
            <h2>E-mail:</h2>
            <p><?php echo $_SESSION["email"]; ?></p>
        </div>
        <button><a href="#">Alterar perfil</a></button>
        <button><a href="./index.php" <?php session_destroy()?>>Sair</a></button>
    </main>
    <br/><br/><br/><br/><br/><br/>
    <footer>
        <nav>
            <a href="#">Testemunhos</a>
            <a href="#">Contato</a>
            <a href="#">Como ajudar?</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
        </nav>
        <p>&copy;2020 - Squad 3 SP1 - Tarde</p>
        <img src="./img/redesocial01.svg" alt="Rede Social 1">
        <img src="./img/redesocial02.svg" alt="Rede Social 2">
        <img src="./img/redesocial03.svg" alt="Rede Social 3">
    </footer>
</body>
</html>
