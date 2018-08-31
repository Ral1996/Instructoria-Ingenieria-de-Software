var patronSingleton = (function(){
    
    function patronSingleton(){}
    patronSingleton.existencias = 300;       // Existencia definida del producto dulces.
    patronSingleton.cajaVenta;               // Se almacena la cantidad ingresada de la venta.
    patronSingleton.cajaCompra;              // Se almacena la cantidad ingresada de la compra.
    patronSingleton.getInstance = function() // Creamos la instancia.
    {
        return this;
    }
    
    // Creamos el proceso para la compra con el patrón.
    patronSingleton.myVenta = function(carrito)
    {
        this.cajaVenta = carrito; // Obtenemos el valor de la cantidad a comprar.
        if(this.cajaVenta <= 0){  // Tiene que ser mayor de cero para generarse una venta.
                alert("Insertar una cantidad mayor que cero.");
            }else if(this.cajaVenta !== "" && this.cajaVenta !== "undefined"){ // Si es diferente de vasio, generara la venta.
                this.existencias -= parseInt(this.cajaVenta);// Convertimos a entero el valor de la venta y se lo sumamos a las existencias.
                var exis = this.existencias;                 // Guardamos la nueva existencia.
                alert("Existencias actualizadas: " + exis);  // Mostramos en una alerta nuestra nueva existencia del producto.
            }
    }
    // Creamos el proceso para la venta con el patrón.
    patronSingleton.myCompra = function(carrito)
    {
        this.cajaCompra = carrito; // Obtenemos el valor de la cantidad a vender.
        if(this.cajaCompra <= 0){  // Tiene que ser mayor de cero para generarse una compra.
                alert("Insertar una cantidad mayor que cero.");
            }else if(this.cajaCompra !== "" && this.cajaCompra !== "undefined"){ // Si es diferente de vasio, generara la compra.
                this.existencias += parseInt(this.cajaCompra); // Convertimos a entero el valor de la compra y se lo sumamos a las existencias.
                var exis = this.existencias;                   // Guardamos la nueva existencia.
                alert("Existencias actualizadas: " + exis);    // Mostramos en una alerta nuestra nueva existencia del producto.
            }
    }
    
    return patronSingleton; // Retornamos a la función.
}) ();

$(document).on("click","#btn_vender1", function(){      // Evento click del boton "Vender".
    var client = patronSingleton.getInstance();
    var cajaVenta = $("#txt_venta1").val();
    client.myVenta(cajaVenta);
});

$(document).on("click","#btn_compra1", function(){      // Evento click del boton "Compra".
    var client = patronSingleton.getInstance();
    var cajaCompra = $("#txt_compra1").val();   
    client.myCompra(cajaCompra);
}); 
    