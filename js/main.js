
    function consultaCep() {
        var cep = document.getElementById("cep").value;
        var url = "https://viacep.com.br/ws/" + cep + "/json/";
        console.log(url);

        $.ajax({
            url: url,
            type: "GET",
            success: function (response) {
                console.log(response);
                //$("#logradouro").html(response.logradouro); //id é "#" e classe é "."
                //document.getElementById("logradouro").innerHTML = response.logradouro; 
               
            }
        })
    }