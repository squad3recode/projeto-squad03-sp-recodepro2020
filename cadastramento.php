<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/estilo.css">
    <title>Magnólia - Cadastramento</title>
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

    <main>
        <main class="login_cadastramento">
            <div>
                <h1>Cadastre-se</h1>
                <form action="./perfil.php">
                    <p>Nome: <input class="form_login" type="text" name="nome"></p>
                    <p>Idade: <input class="form_login" type="number" name="idade"></p>
                    <hr>
                    <p>E-mail: <input class="form_login" type="text" name="nome"></p>
                    <p>Senha: <input class="form_login" type="password" name="senha"></p>
                    <p><input type="checkbox" name="termos" id="termos"> Aceito os <a href="#">Termos de Uso</a> e a <a href="#">Política de Privacidade</a></p>
                    <input class="login_entrar" type="submit" value="Cadastrar" name="submit">
                </form>            
            </div>
        </main>
    </main>
    <br/><br/><br/><br/>
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