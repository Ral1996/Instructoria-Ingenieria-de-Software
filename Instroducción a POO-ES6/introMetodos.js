/*

MATERIA: INGENIERÍA DE SOFTWARE.
DOCENTE: ING. MILAGRO ALICIA DE REYES.
INSTRUCTOR: BACH. RAÚL MAURICIO PORTILLO MUÑOZ.


    INTRODUCCIÓN A POO (PROGRAMACIÓN ORIENTADA A OBJETOS).
                ESTANDAR ES6 (ECMA SCRIPT 6).

*/

// EN ESTE APARTADO IMPLEMENTAREMOS MÉTODOS PROTOTIPOS.

// CREAMOS LA CLASE TRAINGULO
class Triangulo
{
    constructor(base,altura) // CREAMOS EL CONSTRUCTOR Y LE PASAMOS DOS PARAMETROS
    {
        // PARAMETROS IGUALADOS.
        this.base = base;
        this.altura = altura;
    }
    get Area() // ENCARGADA DE RETORNA LA RESPUESTA A LA INSTANCIA.
    {
        return this.CalcularArea();
    }
    CalcularArea() // ENCARGADA DEL PROCESO LÓGICO DE CALCULAR EL AREA DE UN TRINAGULO.
    {
        return (this.base * this.altura)/2;
    }
    MostrarRespuesta() // MÉTODO ENCARGADO DE MOSTRAR EN LA CONSOLA LA RESPUESTA CONCATENADA.
    {
        console.log("El Area del Triangulo es: " + respuesta.Area); 
        // DESPUÉS DE LA CADENA ESTRING + CONCATENAMOS LA RESPUESTA
    }
}

const respuesta = new Triangulo(5,5); // CREAMOS UN NUEVO OBJETO Y LE PASAMOS SUS RESPECTIVOS PARAMETROS.
respuesta.MostrarRespuesta();         // IMPLEMENTAMOS EL MÉTODO.