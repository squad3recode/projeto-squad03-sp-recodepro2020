<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "quiz_login";


$conn = mysqli_connect("localhost", "root", "", "quiz_login");

if(!$conn){
    die("A conexão ao banco de dados falhou: ".mysqli_connect_error());
}

$sql = "select nome, idade, email, senha from cadastro";
$result = $conn->query($sql);  


// while($row=$result->fetch_assoc()){
//      //echo "Recebi estes dados referente ao índice".$POST['nome']."no cadastramento: " . $POST['idade'] . ", " . $POST['email'] . "e " $POST['senha'] . ".";
//     print_r($row);
//     echo "<hr>";
// }
?>