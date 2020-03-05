class DateHelper {

    constructor() {

        throw new Error('DateHelper não pode ser instanciada')
    }
    
    static dataParaTexto(data) {
       return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    }
    
    static textoParaData(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Formato deve estar aaaa-mm-dd")

        return new Date(...texto.split('-').map((item, index) => item - index % 2))
    }
}