/*
    INGENIERÍA DE SOFTWARE.
    PATRÓN DE DISEÑO SINGLETON.
    DOCENTE: ING. MILAGRO ALICIA DE REYES.
    POR: BACH. RAÚL MAURICIO PORTILLO MUÑOZ.

    "UTILIZANDO JS"

    El patrón Singleton limita el número de instancias de un objeto en particular a solo uno. 
    Esta única instancia se llama singleton.Los singletons son útiles en situaciones donde las
    acciones de todo el sistema deben coordinarse desde un solo lugar central. Un ejemplo es un
    grupo de conexiones de base de datos. El grupo administra la creación, destrucción y duración
    de todas las conexiones de bases de datos para toda la aplicación, asegurando que no se pierdan
    las conexiones.

    Interectuadores:
        Los objetos que participan en este patrón son: 

            #createInstance(): Este es el encargado de crear y adminitrar el objeto de la instancia.
            #getInstance(): Este es el encargado de devolver una instancia unica.
    
    NOTA: LA IDEA DE CREAR UNA FUNCIÓN DEFINIDA DE TIPO CONSTANTE EN VES DE UNA CLASE, ES QUE COMO TAL EL PATRÓN FUNCIONA
          COMO UNA FUNCIÓN ANÓNIMA(NewInstance), YA QUE ESTA ENVUELVE AL MÉTODO CREAR INSTANCIA (QUE ES UNA REFERENCIA PRIVADA
          QUE NO ES ACCESIBLE DESDE EL EXTERIOR); Y POR ULTIMO EL MÉTODO getInstance, SOLO VERIFICA SI HA SIDO CREADA LA INSTANCIA
          Y SI NO, CREA UNA INSTANCIA PARA REFERENCIAS FUTURAS.
*/

const NewInstance = (function () {                      // CREACIÓN DE LA REFERENCIA (FUNCIÓN ANÓNIMA).
    var instance;                                       // VARIABLE QUE ALMACENA LA INSTANCIA.
        function createInstance() {                     // MÉTODO ENCARGADO DE CREAR LA INSTANCIA.
        var object = new Object("SOY UNA INSTANCIA.");  // VARIABLE QUE ALMACENA EL NUEVO OBJETO("INSTANCIA X").
        return object;                                  // RETORNAMOS EL OBJETO.
    }
    return {                                            // DENTRO DE LA FUNCIÓN ANÓNIMA, RETORNAMOS EL MÉTODO.
        getInstance: function () {                      // MÉTODO ENCARGADO DE DEVOLVER UNA INSTANCIA UNICA.
            if (!instance) {                            
                instance = createInstance();            // CREAMOS INSTANCIA PARA REFERENCIA.
            }
            return instance;                            // RETORNAMOS LA INSTANCIA.
        }
    };
})();
var Singleton = NewInstance;                            // OPTIMIZAMOS Y DECIMOS QUE LA FUNCIÓN ANÓNIMA SERA = a Singleton.
                                                        // QUE SERÁ EL ENCARGADO DE REDUCIR LA NECESIDAD DE VARIABLES GLOBALES.
 
function run() {                                        // FUNCIÓN ENCARGADA DE EJECUTAR EL PATRÓN SINGLETON.
 
    // CREAMOS LAS INSTANCIAS SINGLETON.
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    // HACEMOS USO DE ALERTIFY, PARA MOSTRAR EN PANTALLA LO QUE NOS DEVUELVEN LAS INSTANCIAS GENERADAS POR EL PATRÓN.
    alertify
        .alert("MISMA INSTANCIA? " + (instance1 === instance2), function(){
        alertify.success('Instancia singleton verificada');
    });
 
}