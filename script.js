$(document).ready(function () {
  $("#form-newsLetter").submit(function (event) {
    //evita que formulario recarregue a pagina
    event.preventDefault();
    console.log("Formulário interceptado!");
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
    $.ajax({
      url: "cadastrar.php",
      method: "POST",
      data: {
        nome: nome,
        email: email,
      },
      dataType: "json",
    })
      .done(function (resposta) {
        if (resposta.status === "sucesso") {
          $("#msg-sucesso").text("Cadastro realizado com sucesso!").show();
          $("#form-newsLetter")[0].reset();
        } else {
          $("#msg-erro")
            .text("Erro ao cadastrar. Tente novamente mais tarde.")
            .show();
          console.log(resposta);
        }
      })
      .fail(function () {
        $("#msg-erro")
          .text(
            "Erro na comunicação com o servidor. Tente novamente mais tarde."
          )
          .show();
      });
  });
});
