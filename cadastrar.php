<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "Newsletter_Data";

$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

if ($conexao -> connect_error) {
    try {
        throw new Exception("Erro na conexão com o banco de dados: " . $conexao -> connect_error);
    } catch (Exception $e) {
        error_log($e->getMessage());
        exit();
    }
}

$nome = $_POST['nome'];
$email = $_POST['email'];

$sql = "INSERT INTO inscritos (nome, email) VALUES (?, ?)";
$stmt = $conexao -> prepare($sql);
$stmt -> bind_param("ss", $nome, $email);

if($stmt->execute()){
    echo json_encode(["status" => "sucesso", "mensagem" => "Inscrição realizada com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "mensagem" => "Erro ao realizar a inscrição. Tente novamente."]);
}

$stmt -> close();
$conexao -> close();
?>