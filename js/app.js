function calcularPrecioTotal() {
    // Obtener los valores ingresados por el cliente
    var cantidad = parseInt(document.getElementById('ticketsQuantity').value);
    var categoria = document.getElementById('category').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('mail').value;
  
    // Calcular el precio total según la cantidad
    var precioUnitario = 200; // Valor del ticket
    var precioTotal = cantidad * precioUnitario;
  
    // Aplicar descuento según la categoría
    if (categoria === 'Estudiante') {
      precioTotal *= 0.2; // Aplicar descuento del 80%
    } else if (categoria === 'Trainee') {
      precioTotal *= 0.5; // Aplicar descuento del 50%
    } else if (categoria === 'Junior') {
      precioTotal *= 0.85; // Aplicar descuento del 15%
    }

    if (nombre === '' || apellido === '' || correo === '' || cantidad === '' || categoria === '') {
        alert('Por favor, complete todos los campos requeridos.');
        return false; 
    }
  
    // Mostrar el precio total
    document.getElementById('price').textContent = 'Total a pagar: $' + precioTotal.toFixed();
    return false; 
}
  

function borrarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('ticketsQuantity').value = '';
    document.getElementById('category').selectedIndex = 0;

    document.getElementById('price').textContent = 'Total a pagar: $';

    return false; // Evitar el envío del formulario
}