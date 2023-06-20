let nombre = document.getElementById ("nombre");
let apellido = document.getElementById ("apellido");
let correo = document.getElementById ("correo");
let quantitybtn = document.getElementById ("ticketsQuantity");
let categorybtn = document.getElementById ("category");
let pricebtn = document.getElementById ("resumen");
let deletebtn = document.getElementById ("clear");
let resultado = document.getElementById ("price")
let estudiante = document.getElementById ("estudiante");
let trainee = document.getElementById ("trainee");
let junior = document.getElementById ("junior");




function ticketsPrice(evento) {
    evento.preventDefault();
    
    let quantitybtn = document.querySelector();

    if (Number(quantitybtn.value)) {
        let totalPayment;

        switch (categorybtn.value) {
            case "estudiante": {
                totalPayment = 200 * quantitybtn.value * 0.2;
                break;
            }
            case "trainee": {
                totalPayment = 200 * quantitybtn.value * 0.5;
                break;
            }
            case "junior": {
                totalPayment = 200 * quantitybtn.value * 0.85;
                break;
            }
        }

        document.querySelector(resultado.value).textContent = {totalPayment};
    }

}