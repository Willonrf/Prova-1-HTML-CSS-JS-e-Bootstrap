$(document).ready(function(){
    $("#cep").mask("00000-000")
    $("#cpfcnpj").keydown(function(){
        var tipo
        try {
            $("#cpfcnpj").unmask();
        } catch (e) {}

        if (document.getElementById('tipoCPF').checked){
            tipo = document.getElementById('tipoCPF').value;
        }else if(document.getElementById('tipoCNPJ').checked){
            tipo = document.getElementById('tipoCNPJ').value;
        }

        if(tipo == "CPF"){
            $("#cpfcnpj").mask("999.999.999-99");
        } else if (tipo == "CNPJ"){
            $("#cpfcnpj").mask("99.999.999/9999-99");
        }                   
    });
})

function validar(){
    var nome = document.getElementById('nome').value;
    var cpfcnpj = document.getElementById('cpfcnpj').value;
    var cep = document.getElementById('cep').value;
    var estado = document.getElementById('estado').value;
    if(nome == "" || cpfcnpj == "" || cep == "" || estado == ""){
        alert("Todos os campos são obrigatorios");
        form.reset();
        form.nome.focus();
    }else{
        alert("Subimissão concluida!!");
    }
}

function tipoPessoaResultante(){
    var tipo;
    if (document.getElementById('tipoCPF').checked){
        tipo = document.getElementById('tipoCPF').value;
    }else if(document.getElementById('tipoCNPJ').checked){
        tipo = document.getElementById('tipoCNPJ').value;
    }
    if(tipo == "CPF"){
        document.getElementById("tp").innerHTML = tipo +':';
    }else if(tipo == "CNPJ"){
        document.getElementById("tp").innerHTML = tipo +':';
    }
    
}