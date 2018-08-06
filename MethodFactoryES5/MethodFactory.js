/*
    INGENIERÍA DE SOFTWARE.
    PATRÓN DE DISEÑO FACTORY METHOD.
    DOCENTE: ING. MILAGRO ALICIA DE REYES.
    POR: BACH. RAÚL MAURICIO PORTILLO MUÑOZ.

    "UTILIZANDO ES5 - (ECMA SCRIPT 5)"

    Interectuadores:
        Los objetos que participan en este patrón son:
            #CREATOR + factory()-Producto.          (CLASS -  FabricaFActory).
            #ConcreteCreator + factory()-Producto.  (SUB CLASS - BURGER).
            #Producto.
            
        Interactuan de la siguiente manera; Creamos una FabricaFactory que dentro del constructor, instanciamos una
        función que creara "Hamburguesas", en la cual recibe parametro de "Especialidad" y para poder entrar por medio
        de un parámetro o varios parámetros, se decide qué tipo de objeto crear para entonces retornarlo y poder utilizarlo.
        Esto hace que no tengamos que importar numerosas clases y mucho menos instanciar muchos objetos de esas mismas clases.

*/

class FabricaFactory {
    constructor() {
        this.createBurger = function (especialidad) {
            var burger;                                 // AQUÍ SE SELECCIONA EL OBJETO DE LA SUB CLASE A  CREAR-UTILIZAR.
            switch (especialidad) {                     // RECIBE EL PARAMETRO DE "ESPECIALIDAD".
                case 'Original':
                    burger = new BurgerDeLaCasa();      // CREAMOS UN NUEVO OBJETO PARA "HAMBURGUESA DE TIPO ORIGINAL".
                    break;
                case 'Especial':
                    burger = new BurgerEspecial();      // CREAMOS UN NUEVO OBJETO PARA "HAMBURGUESA DE TIPO ESPECIAL".
                    break;
                case 'Chikend':
                    burger = new BurgerChikend();       // CREAMOS UN NUEVO OBJETO PARA "HAMBURGUESA DE TIPO CHIKEND".
                    break;
            }
            
            // ESTOS SON ATRIBUTOS GENERALES QUE CONTIENE UNA HAMBURGUESA(FACTORY), EN LAS SUB-CLASES DETALLAMOS LOS INGREDIENTES.
            burger.especialidad = especialidad;
            burger.pan = 'Avena dulce';
            burger.salsa = 'Ranch';
            burger.queso = 'Mozzarela';
            burger.papas = 'Papa rock';
            return burger; // RETORNAMOS BURGER.
        };
    }
}

// CREAMOS UNAS SUB CLASES, QUE DETALLAN LOS INGREDIENTES DE LOS TIPOS DE HAMBURGUESAS A OFRECER.
class BurgerDeLaCasa {
    constructor() {
        this.ingredientes = 'Carne de Res, Jamón de pavo, Jamón de cerdo, Lechuga y Tomate.';
    }
}

class BurgerEspecial {
    constructor() {
        this.ingredientes = 'Carne de Res, Jamón de Pavo y Cerdo, Tocino, Pepinillo, Lechuga y Tomate.';
    }
}

class BurgerChikend {
    constructor() {
        this.ingredientes = 'Filete de Pollo Asado, Pepinillo, Lechuga y Tomate.';
    }
}

// FUNCIÓN ENCARGADA DE EJECUTAR EL SCRIPT - MEDIANTE EL EVENTO ONCLICK DEL LADO DEL CLIENTE.
function ejecutarMF() {
 
    var vBurger = new Array();                  // ARRAY QUE ALMACENARA LOS DIVERSOS TIPOS DE HAMBURGUESAS.
    var fabricaBurger = new FabricaFactory();   // CREAMOS UN NUEVO OBJETO DE LA FABRICA.
    var objectAlert = '';                       // OBJETO ENCARGADO DE GUARDAR EN VARIABLES TEMPORALES PARA LAS ALERTAS.

    //CREACIÓN DE LAS HAMBURGUESAS, AGREGAMOS AL VECTOR LA HAMBURGUESA, PERO ANTES PASAMOS EL PARAMETRO DE ESPECIALIDAD.
    vBurger.push(fabricaBurger.createBurger('Especial')); // "PUSH" --> PARA AGREGAR AL VECTOR.
    vBurger.push(fabricaBurger.createBurger('Original')); // "createBurger", PASA LA ESPECIALIDAD AL SWICH Y ESTE RETONA LA INFO.
    vBurger.push(fabricaBurger.createBurger('Chikend'));
    vBurger.push(fabricaBurger.createBurger('Especial'));
    vBurger.push(fabricaBurger.createBurger('Chikend'));

    // UN CICLO FOR, ENCARGADO DE PASAR(MOSTRAR), LOS DATOS DE LA ESPECIALIDAD DE LA HAMBURGUESA.
    for (var i = 0; i < vBurger.length; i++) {
        objectAlert = (i + 1) + '.-\nTipo: ' + vBurger[i].especialidad + '\nIngredientes: ' + vBurger[i].ingredientes + '\nPan: ' 
        + vBurger[i].pan + '\nSalsa: ' + vBurger[i].salsa + '\nQueso: ' + vBurger[i].queso + '\nPapas: ' + vBurger[i].papas;
        
        alert(objectAlert); // CON ESTO MOSTRAMOS EN UNA ALERTA EN EL NAVEGADOR, CADA HAMBURGUESA.
        objectAlert = '';   // PARA GUARDAR EN VARIABLES TEMPORALES.
    }   
    
}