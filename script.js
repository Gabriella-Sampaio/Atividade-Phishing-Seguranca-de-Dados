

document.getElementById("formulario").addEventListener("submit", function(event){

    event.preventDefault()

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let dtNasc = document.getElementById("dtNasc").value;
    let nmMae = document.getElementById("nmMae").value;

    console.log(nome);
    console.log(cpf);
    console.log(dtNasc);
    console.log(nmMae);

    alert("Iremos verificar os dados e entraremos em contato em breve informando o status da sua solicitação, obrigado "+ nome);
    document.getElementById("formulario").reset();

});

