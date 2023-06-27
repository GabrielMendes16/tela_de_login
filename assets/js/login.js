function validarFormulario() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var mensagemValidacao = document.getElementById("mensagem-validacao");


    // Validação do e-mail
    if (!validarEmail(email)) {
        mensagemValidacao.innerHTML = "Por favor, insira um e-mail válido.";
        return false;
    }

    // Validação da senha
    if (!validarSenha(senha)) {
        mensagemValidacao.innerHTML = "A senha deve conter no mínimo 8 dígitos.";
        return false;
    }

    // Se todos os campos forem válidos, o formulário pode ser enviado
    return true;
  }

  function validarEmail(email) {
    // Expressão regular para validar o formato do e-mail
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return regexEmail.test(email);
  }

  function validarSenha(senha) {
    // Verifica se a senha tem pelo menos 8 dígitos
    return senha.length >= 8;
  }