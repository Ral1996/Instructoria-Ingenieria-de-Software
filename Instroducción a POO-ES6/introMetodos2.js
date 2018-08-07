/*

MATERIA: INGENIERÍA DE SOFTWARE.
DOCENTE: ING. MILAGRO ALICIA DE REYES.
INSTRUCTOR: BACH. RAÚL MAURICIO PORTILLO MUÑOZ.


    INTRODUCCIÓN A POO (PROGRAMACIÓN ORIENTADA A OBJETOS).
                ESTANDAR ES6 (ECMA SCRIPT 6).

*/

// EN ESTE APARTADO IMPLEMENTAREMOS MÉTODOS ESTÁTICOS.

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log(Punto.distancia(p1, p2));