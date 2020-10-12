class Helpers {
     
    constructor(){
        console.log("APP INIT INICIADO COM SUCESSO");
    }
    
    // CONVERTER AAAA-MM-DD > DD/MM/AAAA
    static converterData(tempData) {

        return `${tempData.getDate()}/${tempData.getMonth() + 1}/${tempData.getFullYear()}`;
        
    }

    /* CARREGAR AS MASCARAS */
	carregarMascaras(){

	    console.log("CARREGANDO MASCARAS DE FORMULÁRIOS");

	    $("#loginUsuario").inputmask("(99) 9 9999-9999");
	    $("#codigoSms").inputmask("9 9 9 9 9");

	}
    
  }