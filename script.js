$(document).ready(function () {
  $("#form-newsLetter").submit(function (event) {
    //evita que formulario recarregue a pagina
    event.preventDefault();
    //limpa as mensagens de feedback anterior
    $("#msg-sucesso").hide().text("");
    $("#msg-erro").hide().text("");

    //recebe os valores do forms
    let nome = $("#nome").val();
    let email = $("#email").val();

    if (nome === "" || email === "") {
      $("#msg-erro")
        .text("Por favor, preencha todos os campos obrigatórios.")
        .show();
      return;
    }
  });
});
