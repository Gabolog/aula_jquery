function consultaCep() {
    // amostrar barra de progresso durante a busca de dado
    $(" .barra-container").show();
    // termino
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(" .barra-container").hide();

            //$("#logradouro").html(response.logradouro); //id é "#" e classe é "."
            //document.getElementById("logradouro").innerHTML = response.logradouro; 

        }
    })
}
$(function(){
    $(" .cep").hide();
    $(" .barra-container").hide();
    
});


