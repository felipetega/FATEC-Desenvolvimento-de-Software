//Validação simples
window.onload = function validacao () {
  $("#form").validate({
      debug: true,
      rules: {
          nome:{
            required: true,
            minlength: 3,
          },
          senha:{
            required: true,
            minlength: 6,
          },
          email:{
            required: true,
            minlength: 6,
          },
          nomeCompleto:{
            required: true,
            minlength: 6,
          },
          cpf:{
            required: true,
            minlength: 11,
          },
          cnpj:{
            required: true,
            minlength: 11,
          },
          telefone:{
            required: true,
            minlength: 8,
          },
  }})
  }
  